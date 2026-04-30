import { Link } from "react-router-dom";
import { ROUTES } from "../../../datas/routes";
import { cvLink } from "../../../datas/externalLinks";

export function HeaderNavLinks() {
    const cv = "Currículo";
    const navLinkClassName =
        "font-tt-bold text-accent hover:bg-primary-hover cursor-pointer rounded-3xl px-6 py-2 text-lg duration-400";

    const navLinks = [
        { to: ROUTES.ABOUT, label: "Sobre" },
        { to: cvLink, label: cv },
        { to: ROUTES.PROJECTS, label: "Projetos" },
    ];

    return (
        <>
            {navLinks.map((link) =>
                link.label === cv ? (
                    <a
                        key={link.label}
                        href={link.to}
                        className={navLinkClassName}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label}
                    </a>
                ) : (
                    <Link key={link.label} to={link.to} className={navLinkClassName}>
                        {link.label}
                    </Link>
                )
            )}
        </>
    );
}
