import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-[88px] max-w-[500px] mx-auto px-4 mb-10">
      <div className="bg--800 bg--300 p-2 flex flex-col justify-start ">
        <h1 className="flex justify-center items-center text-2xl font-semibold mb-5 w-fit mx-auto p-1 rounded-md shadow-sm shadow-black">
          About Me
        </h1>
        <p className="font-semibold text-xl mx-5">
          Hi, I am Pratik Sanjayrao Pund
        </p>
        <p className="mx-5 pt-4 text-neutral-400 text-clip">
          I am a passionate full stack software engineer with over 1 year of
          experience developing a wide range of projects with varying levels of
          complexity. My eagerness to learn new things is only matched by my
          desire to grow alongside driven and ambitious individuals.
        </p>
      </div>
      <div className="mt-6 p-2">
        <div className="mx-5">
          <p className="font-semibold text-xl">Education</p>
          <p className="pt-4 text-neutral-400">
            Indian Institute of Engineering Science and Technology, Shibpur
          </p>
          <p className="text-neutral-400">B. Tech. in Mechanical Engineering</p>
          <p className="text-neutral-400">2020-2024</p>
        </div>
      </div>
      <div className="p-2 mt-4 flex items-center">
        <Link
          href="/products"
          className="mx-5 py-1 px-2 bg-white rounded-md text-black shadow-sm shadow-black hover:scale-105 transition-all duration-300 ">
          Projects
        </Link>
      </div>
    </div>
  );
}
