import {
  mdiCodeJson,
  mdiFile,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageMarkdown,
  mdiLanguageTypescript,
  mdiReact,
} from "@mdi/js";
import { explorerList } from "./lists";

const extColorDict: Record<string, string> = {
  ".tsx": "#00bcd4",
  ".ts": "#0a84c8",
  ".js": "#f6df1c",
  ".html": "#e44d26",
  ".css": "#50a8ee",
  ".md": "#42a5f5",
  ".json": "#debb7b",
};

const extIconDict: Record<string, string> = {
  ".tsx": mdiReact,
  ".ts": mdiLanguageTypescript,
  ".js": mdiLanguageJavascript,
  ".html": mdiLanguageHtml5,
  ".css": mdiLanguageCss3,
  ".md": mdiLanguageMarkdown,
  ".json": mdiCodeJson,
};

const fullExtDict: Record<string, string> = {
  ".tsx": "TypeScript JSX",
  ".ts": "TypeScript",
  ".js": "JavaScript",
  ".html": "HTML",
  ".css": "Tailwind CSS",
  ".md": "Markdown",
  ".json": "JSON",
};

export const getColorFromFileExt = (filename: string): string => {
  const lastDotIndex = filename.lastIndexOf(".");
  const ext = lastDotIndex !== -1 ? filename.substring(lastDotIndex) : filename;

  return extColorDict[ext] || "#fff";
};

export const getIconFromFileExt = (filename: string): string => {
  const lastDotIndex = filename.lastIndexOf(".");
  const ext = lastDotIndex !== -1 ? filename.substring(lastDotIndex) : filename;

  return extIconDict[ext] || mdiFile;
};

export const getFullExtensionFromName = (pathname: string) => {
  const filename = explorerList.filter((e) => e.route === pathname);
  if (filename.length > 0) {
    const { name } = filename[0];
    const lastDotIndex = name.lastIndexOf(".");
    const ext = lastDotIndex !== -1 ? name.substring(lastDotIndex) : name;

    return fullExtDict[ext] || "#fff";
  }
  return "Unknown";
};
