import {
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageMarkdown,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiReact,
  mdiCodeJson,
} from "@mdi/js";

const extColorDict: Record<string, string> = {
  ".tsx": "#00bcd4",
  ".ts": "#0a84c8",
  ".js": "#f6df1c",
  ".html": "#e44d26",
  ".css": "#50a8ee",
  ".md": "#42a5f5",
  '.json': '#debb7b'
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

export const getColorFromFileExt = (filename: string): string => {
  const lastDotIndex = filename.lastIndexOf(".");
  const ext = lastDotIndex !== -1 ? filename.substring(lastDotIndex) : filename;

  return extColorDict[ext] || "#fff";
};

export const getIconFromFileExt = (filename: string): string => {
  const lastDotIndex = filename.lastIndexOf(".");
  const ext = lastDotIndex !== -1 ? filename.substring(lastDotIndex) : filename;

  return extIconDict[ext] || mdiReact;
};
