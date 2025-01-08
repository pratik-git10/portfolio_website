import ProjectSection from "@/components/project-section";
import ProjectSectionNew from "@/components/project-section-second";
import React from "react";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <div>
      <div className="mt-24 max-w-xl md:max-w-3xl mx-auto md:mx:auto mb-28">
        <ProjectSection
          description="This project is a clone of Miro, a renowned whiteboard platform. Its core functionalities include notetaking and diagram creation. The technology stack utilized comprises Next.js, Clerk authentication, Convex, Live blocks, all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
          githublink="https://github.com/pratik-git10/whiteboard"
        />

        <ProjectSectionNew
          description="This project is all about SaaS E-commerce. Its core functionalities include user login, admin dashboard, all API tracking then for client interface separate functionality. The technology stack utilized comprises Next.js, Clerk authentication all implemented with TypeScript."
          link="https://zoom-clone-three-fawn.vercel.app/"
          linkLabel="Zoom"
          image="/zoom_img.jpg"
          githublink="https://github.com/pratik-git10/zoom-clone"
        />

        <ProjectSection
          description="This is a Replicate Project of Google Docs. Which allows the users to create files based on there preferences. Many basic with advance functionality are crfeated for user like save the file in databse print in pdf format and many more"
          link="/"
          linkLabel="Google-Documents"
          // image
          image="/image"
          githublink="https://github.com/pratik-git10/Docs_Clone"
        />

        <ProjectSectionNew
          description="This project is all about SaaS E-commerce. Its core functionalities include user login, admin dashboard, all API tracking then for client interface separate functionality. The technology stack utilized comprises Next.js, Clerk authentication all implemented with TypeScript."
          link="https://zoom-clone-three-fawn.vercel.app/"
          linkLabel="Zoom"
          // image
          image="/image"
          githublink="https://github.com/pratik-git10/zoom-clone"
        />
      </div>
    </div>
  );
};

export default ProductPage;
