import { I_ProjectExtraList, I_ProjectList } from "utils/lists";

interface ActionButtonsProps {
    isExtra: boolean;
    sourceCodeUrl?: string;
    viewDemoUrl?: string;
    // handleReadMore: () => void;
    // showReadMore: boolean;
}

interface ProjectTemplateProps extends I_ProjectList {
    isActive?: boolean;
}
interface ReadMoreSectionProps {
    extra?: I_ProjectExtraList[];
}

interface ProjectHeaderProps {
    title: string;
    description: string;
}

export type {
    ProjectHeaderProps,
    ActionButtonsProps,
    ProjectTemplateProps,
    ReadMoreSectionProps,
};
