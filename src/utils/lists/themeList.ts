import { mdiBrightness7, mdiFlowerTulip, mdiForest, mdiLeaf, mdiSolarPowerVariant, mdiWaves, mdiWeatherNight, mdiWeatherNightPartlyCloudy, mdiWeatherSunset } from "@mdi/js";

interface I_Theme {
  name: string;
  icon: string;
  color: string;
}

const themeList: I_Theme[] = [
  { name: "light", icon: mdiBrightness7, color: "#ffff00dd" },
  { name: "dark", icon: mdiWeatherNight, color: "#cccccc" },
  { name: "ocean", icon: mdiWaves, color: "#0a84c8" },
  { name: "sunset", icon: mdiWeatherSunset, color: "#fb9062" },
  { name: "forest", icon: mdiForest, color: "#3f5a36" },
  { name: "midnight", icon: mdiWeatherNightPartlyCloudy, color: "#777" },
  { name: "autumn", icon: mdiLeaf, color: "#7b2232" },
  { name: "pinkish", icon: mdiFlowerTulip, color: "#FFC0CB" },
  { name: "solar", icon: mdiSolarPowerVariant, color: "#ffffffdd" },
];

export { themeList };
export type { I_Theme };

