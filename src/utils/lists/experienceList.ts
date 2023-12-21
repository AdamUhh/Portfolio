const skillList = {
  Level_1: "Novice",
  Level_2: "Advanced Beginner",
  Level_3: "Competent",
  Level_4: "Proficient",
  Level_5: "Expert",
} as const;

type SkillExperience = (typeof skillList)[keyof typeof skillList];

interface Skill {
  name: string;
  experience: SkillExperience;
}

interface SkillDict<T extends Skill[]> {
  [key: string]: T;
}

const skillDict: SkillDict<Skill[]> = {
  languages: [
    { name: "HTML5", experience: skillList.Level_4 },
    { name: "CSS3", experience: skillList.Level_3 },
    { name: "Sass", experience: skillList.Level_2 },
    { name: "TypeScript", experience: skillList.Level_3 },
    { name: "CSharp", experience: skillList.Level_2 },
    { name: "Autohotkey", experience: skillList.Level_2 },
  ],
  frontend: [
    { name: "React", experience: skillList.Level_4 },
    { name: "NextJS", experience: skillList.Level_4 },
    { name: "Redux", experience: skillList.Level_3 },
    { name: "Astro", experience: skillList.Level_3 },
    { name: "SvelteKit", experience: skillList.Level_2 },
  ],
  backend: [
    { name: "Node.js", experience: skillList.Level_2 },
    { name: "Express", experience: skillList.Level_2 },
    { name: "GraphQL", experience: skillList.Level_2 },
    { name: "Prisma", experience: skillList.Level_2 },
    { name: "DrizzleOrm", experience: skillList.Level_2 },
    { name: "Docker", experience: skillList.Level_1 },
  ],
  databases: [
    { name: "SQLite", experience: skillList.Level_3 },
    { name: "MySQL", experience: skillList.Level_2 },
    { name: "PostgreSQL", experience: skillList.Level_2 },
    { name: "MongoDB", experience: skillList.Level_2 },
    { name: "Firebase", experience: skillList.Level_2 },
    { name: "Supabase", experience: skillList.Level_2 },
    { name: "Turso", experience: skillList.Level_2 },
  ],
  "desktop-applications": [
    { name: "Electron", experience: skillList.Level_3 },
    { name: "AvaloniaUI", experience: skillList.Level_2 },
  ],
  cloud: [
    { name: "AWS", experience: skillList.Level_2 },
    { name: "Shopify API", experience: skillList.Level_3 },
  ],
  design: [
    { name: "Photoshop", experience: skillList.Level_2 },
    { name: "Figma", experience: skillList.Level_2 },
    { name: "Blender", experience: skillList.Level_1 },
  ],
  "game-development": [
    { name: "Unity", experience: skillList.Level_2 },
    { name: "Unreal Engine 4", experience: skillList.Level_1 },
  ],
};

export { skillDict, skillList };

  export type { Skill, SkillExperience };

