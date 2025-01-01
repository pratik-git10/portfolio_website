import ProjectSection from "@/components/project-section";
import ProjectSectionNew from "@/components/project-section-second";
import React from "react";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <div>
      <div className="mt-24 max-w-xl md:max-w-3xl mx-auto md:mx-auto mb-28">
        <ProjectSection
          description="This project is a clone of Miro, a renowned whiteboard platform. Its core functionalities include notetaking and diagram creation. The technology stack utilized comprises Next.js, Clerk authentication, Convex, Live blocks, all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
        />

        <ProjectSectionNew
          description="This project is all about SaaS E-commerce. Its core functionalities include user login, admin dashboard, all API tracking then for client interface separate functionality. The technology stack utilized comprises Next.js, Clerk authentication all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
        />

        <ProjectSection
          description="This project is a clone of Miro, a renowned whiteboard platform. Its core functionalities include notetaking and diagram creation. The technology stack utilized comprises Next.js, Clerk authentication, Convex, Live blocks, all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
        />

        <ProjectSectionNew
          description="This project is all about SaaS E-commerce. Its core functionalities include user login, admin dashboard, all API tracking then for client interface separate functionality. The technology stack utilized comprises Next.js, Clerk authentication all implemented with TypeScript."
          link="https://whiteboard-clone.vercel.app/"
          linkLabel="Whiteboard"
          image="/whiteboard_img.jpg"
        />
      </div>
    </div>
  );
};

export default ProductPage;
