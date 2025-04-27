import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen max-w-2xl mx-auto px-8 text-center gap-4
    ">
      <p className="text-xl"> The page you are looking for is not available.</p>
      <Link href={"/"}>
        <Button variant={"secondary"} className="font-bold">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
