import { contactInfo } from "components/ContactMe/constants";
import { aboutMeList, projectList, skillDict } from "utils/lists";

function handleProjectsCommand(): string {
  const projectDetails: string[] = projectList.map((project) => {
    const languagesUsedString = project.languagesUsed
      .map((language) => `• ${language.name}`)
      .join("\n");

    const extraDetailsString = project.extra
      ? project.extra
          .map((extra) => `\n${extra.title}:\n${extra.description.join("\n")}`)
          .join("\n")
      : "";

    return `
    ---------------------------------------
    Title: ${project.title}
    ---------------------------------------\n
    Description:\n${project.description}\n
    Languages Used:\n${languagesUsedString}
    ${extraDetailsString}
    `;
  });

  return projectDetails.join("");
}

function handleSkillsCommand(): string {
  const skillCategories: string[] = Object.keys(skillDict);

  const skillsDetails: string[] = skillCategories.map((category) => {
    const capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    const skillsList = skillDict[category];
    const skillsString = skillsList
      .map((skill) => `• ${skill.name} - ${skill.experience}`)
      .join("\n");

    return `${capitalizedCategory.replace(
      /-/g,
      " ",
    )} Skills:\n${skillsString}\n`;
  });

  return skillsDetails.join("\n");
}

function handleAboutCommand(): string {
  const aboutMeDetails: string[] = aboutMeList.map((aboutMe) => {
    return `
     ${aboutMe.title}\n
     ${aboutMe.text.join("\n")}
    `;
  });

  return aboutMeDetails.join("\n");
}

function handleContactCommand(): string {
  const contactInfoDetails: string[] = Object.entries(contactInfo).map(
    ([key, value]) => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      return `• ${capitalizedKey}: ${value.text}`;
    },
  );

  return contactInfoDetails.join("\n");
}

const commands = {
  about: handleAboutCommand,
  projects: handleProjectsCommand,
  skills: handleSkillsCommand,
  contact: handleContactCommand,
};

export { commands };
