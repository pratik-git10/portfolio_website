import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  description: string;
  link: string;
  linkLabel?: string; // Optional prop for the link label
  image: string;
  title: string;
  githublink: string;
};

const ProjectSectionNew = ({
  description,
  link,
  image,
  title,
  githublink,
}: Props) => {
  return (
    <div className="border shadow-inner shadow-slate-500 rounded-md mb-8 p-4 flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6 mx-3 md:mx-0">
      <div className="flex-1 flex flex-col md:items-start justify-center md:justify-start text-center md:text-left">
        <p className="font-bold text-lg text-neutral-400">{title}</p>
        <p className="text-sm sm:text-base flex">{description}</p>
        <div className="mt-3 flex justify-center">
          <Link
            href={githublink}
            target="_blank"
            className={`p-2 bg-white text-black rounded-md mr-3 flex gap-1 items-center justify-center w-fit`}>
            <IconBrandGithub stroke={1} size={20} />
            Source Code
          </Link>
        </div>
      </div>

      <Link href={link} target="_blank" className="flex-shrink-0 relative">
        <div className="rounded-md flex justify-center items-center hover:scale-105 transition-all relative">
          <Image
            alt="Project Preview"
            src={image}
            width={224} // Matches w-56
            height={112} // Matches h-28
            className={`w-56 h-28 md:w-56 md:h-28 object-contain flex justify-center items-center mt-2 shadow-md shadow-slate-500 rounded-md`}
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity bg-black/30 rounded-md">
            <ExternalLink className="text-gray-500" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectSectionNew;
