import ProjectSection from "@/components/project-section";
import ProjectSectionNew from "@/components/project-section-second";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProductPage = () => {
  return (
    <div>
      <div className="mt-24 max-w-xl md:max-w-3xl mx-auto md:mx:auto mb-10">
        <ProjectSection
          description="It is a Website where users can give mock Interview. All Interviews are AI generated, where you can record answers and after final submissions you will get feedback on your Interview. It is very helpful for practice."
          title="InterviewAI"
          link="https://interviewai-nu.vercel.app/"
          linkLabel="InterviewAI"
          image="/interviewai.png"
          githublink="https://github.com/pratik-git10/InterviewAI"
        />

        <ProjectSection
          title="Zoom-CLone"
          description="This project is a replicate of Zoom website. Its core functionalities include user login, admin dashboard, creating personal meeting room, sharing room id. Also you can view recording. The technology stack utilized comprises Next.js, next authentication all implemented with TypeScript."
          link="https://zoom-clone-three-fawn.vercel.app/"
          linkLabel="Zoom"
          image="/zoom_img.jpg"
          githublink="https://github.com/pratik-git10/zoom-clone"
        />

        <ProjectSection
          title="Whiteboard"
          description="This project is a clone of Miro, a renowned whiteboard platform. Its core functionalities include notetaking and diagram creation. The technology stack utilized comprises Next.js, Clerk authentication, Convex, Live blocks, all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
          githublink="https://github.com/pratik-git10/whiteboard"
        />
      </div>
    </div>
  );
};

export default ProductPage;
