"use client";

import Link from "next/link";
// import { useState } from "react";

// import { useClickOutside } from "@/hooks/useClickOutside";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import UserProfile from "./user-profile";
import Image from "next/image";

const Navlinks = [
  { link: "/New_Resume.pdf", img: "/resume.svg" },
  { link: "https://github.com/pratik-git10", img: "/github.svg" },
  {
    link: "https://linkedin.com/in/pratik-pund-473168216",
    img: "/linkedin.svg",
  },
  { link: "/", img: "/leetcode.svg" },
];

const Navbar = () => {
  // const [showUserProfile, setShowUserProfile] = useState(false);
  // const profileRef = useClickOutside<HTMLDivElement>(() =>
  //   setShowUserProfile(false)
  // );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 m-3">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-md bg-white/10 p-4 backdrop-blur-2xl ">
        {/* shadow-lg shadow-white/10  */}
        <Link href="/" className="text-xl font-semibold">
          <h1 className="shadow-inner shadow-slate-600 p-1.5 rounded-md -rotate-12">
            Pratik Pund
          </h1>
        </Link>

        <div className="flex justify-center items-center gap-4 py-1.5  rounded-sm">
          {Navlinks.map((navlink, index) => (
            <Link href={navlink.link} target="_blank" key={index}>
              <Image
                src={navlink.img}
                alt="image"
                width={25}
                height={25}
                className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900 hover:scale-125 transition ease-in-out"
              />
            </Link>
          ))}
        </div>

        {/* <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-0"
          onClick={() => setShowUserProfile(!showUserProfile)}>
          <Avatar className="">
            <AvatarImage src="/" alt="Pratik Pund" />
            <AvatarFallback className="bg-neutral-300">PP</AvatarFallback>
          </Avatar>
        </Button> */}

        {/* showUserProfile && 
          <div
            ref={profileRef}
            className="absolute top-[84px] right-4 rounded-lg border bg-black p-4 transition-transform duration-300 transform scale-100">
            //  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-lg border bg-black p-4 transition-transform duration-300 scale-100 
            <UserProfile />
          </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
