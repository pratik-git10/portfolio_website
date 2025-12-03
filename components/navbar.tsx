"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAVLINKS = [
  { link: "/pratikpund_resume.pdf", img: "/resume.svg", external: true },
  {
    link: "https://github.com/pratik-git10",
    img: "/github.svg",
    external: true,
  },
  {
    link: "https://linkedin.com/in/pratik-pund-473168216",
    img: "/linkedin.svg",
    external: true,
  },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide / Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50 transition-transform duration-300 px-2
        ${hidden ? "-translate-y-20" : "translate-y-0"}
      `}>
      <div className="mx-auto m-3 flex h-14 max-w-4xl items-center justify-between rounded-md bg-white/10 p-4 backdrop-blur-2xl shadow-lg shadow-white/5">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold">
          <h1 className="shadow-inner shadow-slate-600 p-1.5 rounded-md -rotate-12 hover:rotate-0 ease-in-out duration-300 text-amber-200">
            Pratik Pund
          </h1>
        </Link>

        {/* Nav Icons */}
        <div className="flex items-center gap-4">
          {NAVLINKS.map((item, idx) =>
            item.external ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src={item.img}
                  alt="icon"
                  width={25}
                  height={25}
                  className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900 hover:scale-125 transition"
                />
              </a>
            ) : (
              <Link key={idx} href={item.link}>
                <Image
                  src={item.img}
                  alt="icon"
                  width={25}
                  height={25}
                  className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900 hover:scale-125 transition"
                />
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
