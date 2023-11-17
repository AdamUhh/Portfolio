import { Skill, SkillExperience } from "utils/lists";

type ExperienceFilterOptions = SkillExperience | "Show All";

interface SkillItemProps {
  name: string;
  experience: string;
  experienceFilter: ExperienceFilterOptions;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  experienceFilter: ExperienceFilterOptions;
}

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export type {
  ExperienceFilterOptions,
  SkillItemProps,
  SkillCategoryProps,
  FilterButtonProps,
};
