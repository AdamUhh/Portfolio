import Link from "next/link";
import NextTopLoader from "nextjs-toploader";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#2b323c] font-jetBrains">
      <NextTopLoader showSpinner={false} />
      <h1 className="flex items-center  text-[calc(100%+6vw)] sm:text-[calc(100%+10vw)]">
        <span className="font-black text-[#8b99a5]">{"<"}</span>
        <span className="text-[calc(100%+6vw)] text-yellow-400">404</span>
        <span className="font-black text-[#8b99a5]">{"/>"}</span>
      </h1>
      <h2 className="flex flex-col text-2xl font-bold sm:text-md text-white/90">
        <div className="flex">
          <span className="text-[#78b7fd]">Error404</span>
          <span>() {"{"}</span>
        </div>
        <span className="pl-6">
          <span className="text-[#e16b7b]">message</span> = &quot;
          <span className="text-[#98c97b]">page not found</span>&quot;
        </span>
        <span>{"};"}</span>
      </h2>
      <Link
        href={"/"}
        className="mt-10 border-b-2 border-transparent py-2 text-white/70 transition-all hover:border-code-BRACKET "
      >
        Go To Home
      </Link>
    </div>
  );
}
