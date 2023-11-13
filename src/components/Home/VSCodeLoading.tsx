import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { vscodeIcon } from "../../assets";

export default function VSCodeLoading() {
  return (
    <div className=" fixed left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#2F2F2F] px-40 pb-10 pt-16 shadow-md shadow-black">
      <Image src={vscodeIcon} alt="VSCode Portfolio" width={80} />
      <Icon path={mdiLoading} size={1} className="animate-spin m-auto mt-10" />
    </div>
  );
}
