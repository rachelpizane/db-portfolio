import type { CompanyLink, SocialLink } from "../types/common.types";

export const dbLink = (src?: string): CompanyLink => {
    return {
        url: "https://db.tec.br/",
        src: src || "/images/layout/logo_db.svg",
        name: "DB",
    };
};

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: "/images/social/icon_github.svg",
        url: "https://github.com/rachelpizane",
    },
    {
        name: "LinkedIn",
        icon: "/images/social/icon_linkedin.svg",
        url: "https://www.linkedin.com/in/rachel-pizane/",
    },
    {
        name: "Email",
        icon: "/images/social/icon_email.svg",
        url: "mailto:rachel.maia@dbserver.com.br",
    },
];
