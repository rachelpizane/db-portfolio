import { Link } from "react-router-dom";
import { dbLink, socialLinks } from "../../../datas/externalLinks";
import { ROUTES } from "../../../datas/routes";

export function Header() {
    const db = dbLink();
    const navLinks = [
        { to: ROUTES.ABOUT, label: "Sobre" },
        { to: "#", label: "Currículo" }, //TODO: ATUALIZAR ROTA
        { to: ROUTES.PROJECTS, label: "Projetos" },
    ];

    return (
        <header className="bg-primary flex justify-center md:px-6">
            <div className="flex w-full flex-col items-center gap-4 py-3 md:max-w-7xl md:flex-row md:justify-between">
                <div className="flex flex-col items-center md:flex-row md:gap-15">
                    <a
                        key={db.name}
                        href={db.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={db.name}
                        className="cursor-pointer"
                    >
                        <img src={db.src} alt={db.name} />
                    </a>

                    <div className="flex flex-col items-center gap-3 md:w-md md:flex-row md:justify-around md:gap-5">
                        {navLinks.map((link) => (
                            <Link
                                className="font-tt-bold text-accent hover:bg-primary-hover cursor-pointer rounded-3xl px-6 py-2 text-lg duration-400"
                                key={link.label}
                                to={link.to}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-2 flex items-center gap-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            className="cursor-pointer"
                        >
                            <img src={link.icon} alt={link.name} className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
