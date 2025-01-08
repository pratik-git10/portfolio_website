import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  description: string;
  link: string;
  linkLabel?: string; // Optional prop for the link label
  image: string;
  githublink: string;
};

const ProjectSectionNew = ({
  description,
  link,
  image,

  githublink,
}: Props) => {
  return (
    <div className="border shadow-inner shadow-slate-500 rounded-md mb-8 p-4 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-4 md:gap-6 mx-3 md:mx-0">
      <Link href={link} target="_blank" className="flex-shrink-0">
        <div className="rounded-md flex justify-center items-center">
          <Image
            alt="Project Preview"
            src={image}
            width={224} // Matches w-56
            height={112} // Matches h-28
            className="w-56 h-28 md:w-56 md:h-28 object-contain mt-2 shadow-md shadow-slate-500 rounded-md"
          />
        </div>
      </Link>
      <div className="flex-1 flex flex-col md:items-end justify-center md:justify-start text-center md:text-left">
        <p className="text-sm sm:text-base flex">{description}</p>
        <div className="mt-3">
          <Link
            href={githublink}
            target="_blank"
            className="text-black p-2 bg-white rounded-md mr-2 flex items-center gap-1  ">
            <IconBrandGithub stroke={1} size={20} />
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionNew;
