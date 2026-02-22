import ProjectSection from "@/components/project-section";
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
          description="A real-time chat application built using WebSockets that enables instant messaging between users. The platform supports live message updates without page refresh, user presence detection, and smooth two-way communication. Designed for fast, scalable, and low-latency interaction."
          title="Chatter"
          link="https://chatter-app-gamma.vercel.app"
          linkLabel="Chatter"
          image="/chatter.png"
          githublink="https://github.com/pratik-git10/chatter-realtime-chat-app"
        />

        <ProjectSection
          title="Trackcue"
          description="A smart reminder web application that helps users track upcoming product expiration dates. Users can add products with expiry details and receive timely alerts before items expire. The system helps reduce waste and ensures better inventory management through automated notifications."
          link="https://www.trackcue.site"
          linkLabel="Trackcue"
          image="/trackcue.png"
          githublink="https://github.com/pratik-git10/trackcue"
        />

        <ProjectSection
          title="ThumbnailAI"
          description="An AI-based web application that generates eye-catching YouTube thumbnails from user input. Users can enter a topic or title, and the system creates engaging, high-quality thumbnail designs automatically. Built to help content creators save time and improve click-through rates with visually optimized thumbnails."
          link="https://yt-thumbnail-jade.vercel.app"
          linkLabel="YTthumbnailAI"
          image="/thumbnail.png"
          githublink="https://github.com/pratik-git10/YT_Thumbnail"
        />
      </div>
    </div>
  );
};

export default ProductPage;
