import React from "react";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
type Props = {};

const ComponentsPage = (props: Props) => {
  const icons = [
    { Icon: IconBrandHtml5, color: "text-orange-500", title: "HTML" },
    { Icon: IconBrandCss3, color: "text-blue-500", title: "CSS" },
    { Icon: IconBrandReact, color: "text-blue-400", title: "Reatcjs" },
    { Icon: IconBrandNextjs, color: "text-black", title: "Nextjs" },
    { Icon: IconBrandNodejs, color: "text-green-500", title: "Nodejs" },
    { Icon: IconBrandMongodb, color: "text-green-500", title: "Mongodb" },
    { Icon: IconBrandTailwind, color: "text-blue-300", title: "Tailwind" },
    {
      Icon: IconBrandJavascript,
      color: "text-yellow-300",
      title: "JavaScript",
    },
    { Icon: IconBrandMysql, color: "text-blue-500", title: "MySql" },
  ];

  const toolIcons = [
    { Icon: IconBrandGit, color: "text-orange-600", title: "Git" },
    { Icon: IconBrandGithub, color: "text-black", title: "Github" },
  ];

  return (
    <div className="bg--500 flex flex-col justify-center items-center mt-24 max-w-3xl mx-auto mb-28">
      <h1 className="font-bold text-xl bg--400 px-36 py-1 shadow-2xl shadow-slate-500 rounded-md">
        Skills
      </h1>
      <h1 className="font-bold text-xl mt-6 text-blue-800">Technology</h1>
      <div className="flex justify-center items-center w-full">
        <div className="bg--500 rounded-md gap-6 grid grid-cols-3 mt-4 p-3">
          {/* iconsgrid */}
          {icons.map(({ Icon, color, title }, index) => (
            <div
              key={index}
              className="bg-white/20 shadow-md shadow-black w-20 h-20 rounded-md flex justify-center items-center relative group"
            >
              <div className="absolute top-[-35px] opacity-0 transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:scale-100 text-sm font-medium bg-gray-800 text-white py-1 px-2 rounded">
                {title}
              </div>

              <Icon stroke={1} className={`${color} h-10 w-10`} />
            </div>
          ))}
          {/* end of iconsgrid */}
        </div>
      </div>

      {/* Tools */}
      <Separator className="mt-8" />
      <h1 className="font-bold text-xl mt-6">Tools</h1>
      <div className="justify-center items-center flex">
        <div className="bg--500 rounded-md gap-6 grid grid-cols-3 mt-4 p-3">
          {/* iconsgrid */}
          {toolIcons.map(({ Icon, color, title }, index) => (
            <div
              key={index}
              className="bg-white/20 shadow-md shadow-black w-20 h-20 rounded-md flex justify-center items-center relative group"
            >
              <div className="absolute top-[-35px] opacity-0 transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:scale-100 text-sm font-medium bg-gray-800 text-white py-1 px-2 rounded">
                {title}
              </div>

              <Icon stroke={1} className={`${color} h-10 w-10`} />
            </div>
          ))}
          {/* end of iconsgrid */}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
