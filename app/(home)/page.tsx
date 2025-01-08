import Link from "next/link";

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <div className="mt-[88px] max-w-[500px] mx-auto px-4 mb-28">
        <div className="bg--800 bg--300 p-2 flex flex-col justify-start ">
          <h1 className="flex justify-center items-center text-2xl font-semibold mb-5 w-fit mx-auto p-1 rounded-md shadow-sm shadow-black text-stone-400">
            About Me
          </h1>
          <p className="font-semibold text-xl mx-5">
            Hi, I am Pratik Sanjayrao Pund
          </p>
          <p className="mx-5 pt-4 text-neutral-400 text-clip">
            I am a proficient and passionate full stack software engineer with
            over 1 years of experience developing a wide range of projects with
            varying levels of complexity. My eagerness to learn new things is
            only matched by my desire to advance alongside driven and ambitious
            individuals. Through my work, I strive to craft digital experiences
            that exceed user expectations, leaving a lasting impression of
            quality and innovation.
          </p>
        </div>
        <div className="mt-6 bg--600 p-2">
          <div className="mx-5">
            <p className="font-semibold text-xl">Education</p>
            <p className="pt-4 text-neutral-400">
              Indian Institute of Engineering Science and Technology, Shibpur
            </p>
            <p className="text-neutral-400">
              B. Tech. in Mechanical Engineering
            </p>
            <p className="text-neutral-400">2020-2024</p>
=======
      <div className="max-w-3xl mx-4 md:mx-auto">
        <div className="mt-[88px] rounded-md bg--300 grid grid-cols-2 justify-center items-center h-auto p-2 mb-28">
          <div className="mx-2 border h-auto p-2 bg--400 rounded-md">
            Hey, I am Pratik Sanjayrao Pund.
          </div>
          <div className="mx-2 border h-auto p-2 bg--400 rounded-md">
            
>>>>>>> d9c85dc9001e0308ac7d651d47d6e9d8f6032a79
          </div>
        </div>
        <div className="p-2 mt-4 flex items-center">
          <Link
            href="/products "
            className="mx-5 py-1 px-2 bg-white rounded-md text-black shadow-sm shadow-black">
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
