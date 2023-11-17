import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="border-6 grid grid-cols-[1fr,300px] items-center border-dashed border-faded px-5 py-6 lg:grid-cols-[1fr] lg:justify-center">
      <h2 className="text-[calc(100%+0.8vw)] font-bold lg:text-center lg:text-[calc(100%+2vw)]">
        🤗 Get In Touch
      </h2>
      <Link
        href={"/contact"}
        className=" flex h-fit w-[300px] items-center justify-center rounded-md bg-gradient-to-r from-[#a6d0f0] to-[#447fff] py-6 text-xl font-bold text-white  hover:brightness-110 lg:w-full  "
      >
        Contact Me
      </Link>
    </div>
  );
}
