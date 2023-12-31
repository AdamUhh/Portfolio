import {
  mdiBattery90,
  mdiCheckboxMultipleBlankOutline,
  mdiChevronUp,
  mdiMicrosoft,
  mdiVolumeHigh,
  mdiWifi,
} from "@mdi/js";
import Time from "components/VSCode_Components/Statusbar/Time";
import Image from "next/image";
import { vscodeIcon } from "../../assets";
import { DesktopItem, DesktopLink } from "./CommonButtons";

const Taskbar = () => (
  <footer className="absolute bottom-0 left-0 grid h-12 w-screen grid-cols-3 bg-[#7777773d] shadow-[0_0_15px_rgba(255,255,255,0.4)] blur-[20.5]  sm:grid-cols-2">
    <div className="sm:hidden" />
    <ul className="mx-auto grid h-full grid-cols-[60px_60px_60px]">
      <DesktopItem path={mdiMicrosoft} size={1.2} title="Microsoft" />
      <DesktopItem
        path={mdiCheckboxMultipleBlankOutline}
        size={1.2}
        title="Monitors"
      />
      <DesktopLink href="/about" title="Go To Portfolio">
        <Image src={vscodeIcon} alt="VSCode Portfolio" width={27} />
      </DesktopLink>
    </ul>
    <ul className="ml-auto grid h-fit my-auto grid-cols-[1fr_1fr_1fr_1fr_100px] gap-1">
      <DesktopItem path={mdiChevronUp} size={0.8} title="Tasks" />
      <DesktopItem path={mdiBattery90} size={0.8} title="Battery" rotate />
      <DesktopItem path={mdiWifi} size={0.7} title="Wifi" />
      <DesktopItem path={mdiVolumeHigh} size={0.8} title="Volume" />
      <DesktopItem size={0.8} title="Time">
        <Time isHome />
      </DesktopItem>
    </ul>
  </footer>
);

export default Taskbar;
