import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const UserProfile = (props: Props) => {
  const handleResumeClick = () => {
    const resumePath = "./pratik_pund_resume_.pdf";

    const link = document.createElement("a");
    link.href = resumePath;

    // Uncomment the next line if you want to force download instead of opening in a new tab
    // link.download = "pratik_resume.pdf";

    link.target = "_blank";

    link.click();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-52 w-52">
        <Image
          src="/Pratik_Photograph.jpg"
          alt="photos"
          height={90}
          width={90}
          className="rounded-full object-cover h-44 w-44"
        />
        <Button
          variant="default"
          className="my-2 w-full border border-gray-500 text-base"
          onClick={handleResumeClick}
        >
          Resume
        </Button>
      </div>
      <div className="w-full bg-[#858585] mt-2.5 py-1.5 rounded-md">
        <Link
          href="https://github.com/pratik-git10"
          target="_blank"
          className="w-full flex justify-center"
        >
          Github
        </Link>
      </div>
      <div className="w-full bg-blue-500 my-2 py-1.5 rounded-md">
        <Link
          href="https://linkedin.com/in/pratik-pund-473168216"
          target="_blank"
          className="w-full flex justify-center"
        >
          Linkedin
        </Link>
      </div>
    </>
  );
};

export default UserProfile;
