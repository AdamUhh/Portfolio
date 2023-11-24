import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { vscodeIcon } from "../../assets";

export default function VSCodeLoading() {
  return (
    <div className=" fixed left-[50%] top-[50%] z-10 flex min-h-[250px] min-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-xl bg-[#2F2F2F] shadow-md shadow-black sm:min-w-[325px]">
      <Image src={vscodeIcon} alt="VSCode Portfolio" width={80} />
      <Icon
        path={mdiLoading}
        size={1}
        color={"#fff"}
        className="mt-10 animate-spin"
      />
    </div>
  );
}
