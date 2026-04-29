export type CompanyLink = {
    url: string;
    src: string;
    name: string;
};

export type SocialLink = {
    name: string;
    icon: string;
    url: string;
};

export type SkillItem = {
    label: string;
    level: number;
};

export type SkillGroup = {
    type: string;
    items: SkillItem[];
};

export type Profile = {
    name: string;
    position: string;
    src: string;
    about: string;
    skills: SkillGroup[];
};

export type Project = {
    name: string;
    description: string;
    linkGithub: string;
    linkDeploy: string | null;
    src: string;
    createdAt: string;
    technologies: string[];
};
