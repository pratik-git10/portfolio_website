"use client";

import { IconBrandHtml5 } from "@tabler/icons-react";
import { Contact2Icon, FolderOpenDot, HomeIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

type Link = {
  title: string;
  icon: React.ReactNode | any;
  href: string;
};

export const Floatingdock = () => {
  return (
    <div className="flex items-center justify-center">
      <FloatingdockCore />
    </div>
  );
};

const FloatingdockCore = () => {
  const links: Link[] = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full text-black" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <FolderOpenDot className="h-full w-full text-black" />,
      href: "/products",
    },
    {
      title: "Skills",
      icon: <IconBrandHtml5 className="h-full w-full text-black" />,
      href: "/skills",
    },

    {
      title: "Contact",
      icon: <Contact2Icon className="h-full w-full text-black" />,
      href: "/contact",
    },
  ];

  const mouseHandlerX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e: any) => mouseHandlerX.set(e.pageX)}
      onMouseLeave={(e: any) => mouseHandlerX.set(Infinity)}
      className="fixed bottom-5 inset-x-0 mx-auto gap-9 flex justify-center items-center h-16 bg-neutral-700 rounded-xl w-fit px-4 bg-white/10 p-4 shadow-md shadow-white/10 backdrop-blur-2xl"
    >
      {links.map((el, idx) => (
        <IconContainer mouseHandlerX={mouseHandlerX} el={el} key={el.title} />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  el,
  mouseHandlerX,
}: {
  el: Link;
  mouseHandlerX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseHandlerX, (val) => {
    let bounds = ref?.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hoverd, setHoverd] = useState(false);

  return (
    <Link
      href={el.href}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width: width,
          height: height,
        }}
        key={el.title}
        className="flex relative items-center justify-center rounded-full bg-neutral-300  "
      >
        <AnimatePresence>
          {hoverd && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                x: "-50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: "-50%",
              }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              transition={{
                duration: 0.2,
              }}
              className="absolute left-1/2 text-xs px-2 py-0.5 whitespace-pre-wrap -translate-x-1/2 -top-7 w-fit bg-neutral-100 rounded-md text-neutral-500"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex justify-center items-center"
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};
