import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret",
};

export default function SecretPage() {
  return (
    <div
      style={{
        backgroundImage: `url('/secret_wallpaper.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        width: "100%",
        height: "100%",
      }}
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl"> You found a secret page 😊</h2>
    </div>
  );
}
