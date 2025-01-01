// import React from "react";
// import { IconBrandNextjs, IconBrandNodejs } from "@tabler/icons-react";
// type Props = {};

// const ComponentsPage = (props: Props) => {
//   return (
//     <div className="bg--500 flex flex-col justify-center items-center mt-24 max-w-3xl mx-auto">
//       <h1 className="font-bold">Skills</h1>
//       <div className="justify-center items-center flex">
//         <div className="bg--500 rounded-md gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 p-3">
//           {/* iconsgrid */}

//           <div className="bg-slate-500 w-20 h-20 rounded-md flex justify-center items-center">
//             <IconBrandNextjs stroke={2} className="text-black h-10 w-10" />
//           </div>
//           <div className="bg-slate-500 w-20 h-20 rounded-md flex justify-center items-center">
//             <IconBrandNodejs stroke={2} className="text-green-500 h-10 w-10" />
//           </div>
//           <div className="bg-slate-500 w-20 h-20 rounded-md flex justify-center items-center">
//             <IconBrandNextjs stroke={2} className="text-black h-10 w-10" />
//           </div>
//           <div className="bg-slate-500 w-20 h-20 rounded-md flex justify-center items-center">
//             <IconBrandNextjs stroke={2} className="text-black h-10 w-10" />
//           </div>

//           {/* end of iconsgrid */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComponentsPage;

import React from "react";
import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMongodb,
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
    { Icon: IconBrandReact, color: "text-blue-400" },
    { Icon: IconBrandNextjs, color: "text-black" },
    { Icon: IconBrandNodejs, color: "text-green-500" },
    { Icon: IconBrandMongodb, color: "text-green-500" },
    { Icon: IconBrandTailwind, color: "text-blue-300" },
    { Icon: IconBrandJavascript, color: "text-yellow-300" },
    { Icon: IconBrandTypescript, color: "text-blue-500" },
  ];
  const toolIcons = [
    { Icon: IconBrandGithub, color: "text-black" },
    { Icon: IconBrandGit, color: "text-orange-600" },
  ];

  return (
    <div className="bg--500 flex flex-col justify-center items-center mt-24 max-w-3xl mx-auto mb-28">
      <h1 className="font-bold text-xl bg--400 px-36 py-1 shadow-2xl shadow-slate-500 rounded-md">
        Skills
      </h1>
      <h1 className="font-bold text-xl mt-6 text-rose-800">Technology</h1>
      <div className="flex justify-center items-center w-full">
        <div className="bg--500 rounded-md gap-6 grid grid-cols-3 mt-4 p-3">
          {/* iconsgrid */}
          {icons.map(({ Icon, color }, index) => (
            <div
              key={index}
              className="bg-white/20 shadow-md shadow-black w-20 h-20 rounded-md flex justify-center items-center"
            >
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
          {toolIcons.map(({ Icon, color }, index) => (
            <div
              key={index}
              className="bg-white/20 shadow-md shadow-black w-20 h-20 rounded-md flex justify-center items-center"
            >
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
