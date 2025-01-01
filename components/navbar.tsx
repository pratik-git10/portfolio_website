// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import UserProfile from "./user-profile";

// type Props = {};

// const Navbar = (props: Props) => {
//   const [showUserProfile, setShowUserProfile] = useState(false);
//   const profileRef = useRef<HTMLDivElement>(null);

//   const handleProfileClick = () => {
//     setShowUserProfile(!showUserProfile);
//   };
//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       profileRef.current &&
//       !profileRef.current.contains(event.target as Node)
//     ) {
//       setShowUserProfile(false);
//     }
//   };

//   useEffect(() => {
//     if (showUserProfile) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showUserProfile]);

//   return (
//     <div className="m-3 h-12 bg-neutral-200 rounded-md backdrop-blur-2xl shadow-white shadow-2xl flex justify-between items-center p-4 max-w-4xl mx-auto top-0 fixed inset-x-0">
//       <Link href="/">
//         <div className="font-semibold text-xl">Pratik Pund</div>
//       </Link>
//       <button onClick={handleProfileClick}>
//         <div className="bg-gray-300 rounded-full p-1 object-cover">
//           <Image
//             src="/Pratik_Photograph.jpg"
//             height={25}
//             width={25}
//             alt="photo"
//             className="rounded-full object-cover h-8 w-8"
//           />
//         </div>
//       </button>
//       {/* Conditionally render the UserProfile component */}
//       {showUserProfile && (
//         <div
//           ref={profileRef}
//           className="absolute top-14 right-4 bg-white shadow-2xl rounded-lg p-4 border"
//         >
//           <UserProfile />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserProfile from "./user-profile";
import Image from "next/image";

const Navbar = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const profileRef = useClickOutside<HTMLDivElement>(() =>
    setShowUserProfile(false)
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 m-3">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between rounded-md bg-white/10 p-4 backdrop-blur-2xl">
        {/* shadow-lg shadow-white/10  */}
        <Link href="/" className="text-xl font-semibold">
          <span className="shadow-sm shadow-slate-600 p-1.5 rounded-md">
            Pratik Pund
          </span>
        </Link>

        <div className="flex justify-center items-center gap-4 py-1.5 px-4 rounded-sm">
          <Link href="https://github.com/pratik-git10" target="_blank">
            <Image
              src="/github.svg"
              alt="image"
              width={25}
              height={25}
              className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/pratik-pund-473168216"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="image"
              width={25}
              height={25}
              className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900"
            />
          </Link>
          <Link href="/" target="">
            <Image
              src="/leetcode.svg"
              alt="image"
              width={25}
              height={25}
              className="bg-white rounded-md p-0.5 shadow-md shadow-gray-900"
            />
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-0"
          onClick={() => setShowUserProfile(!showUserProfile)}
        >
          <Avatar className="">
            <AvatarImage src="/Pratik_Photograph.jpg" alt="Pratik Pund" />
            <AvatarFallback className="bg-neutral-300">PP</AvatarFallback>
          </Avatar>
        </Button>

        {showUserProfile && (
          <div
            ref={profileRef}
            className="absolute top-[84px] right-4 rounded-lg border bg-black p-4 transition-transform duration-300 transform scale-100"
          >
            {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-lg border bg-black p-4 transition-transform duration-300 scale-100 */}
            <UserProfile />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
