import { dbLink, socialLinks } from "../../../datas/externalLinks";
import { HeaderNavLinks } from "../header-nav-links/HeaderNavLinks";

export function Header() {
    const db = dbLink();

    return (
        <header className="bg-primary flex justify-center md:px-6">
            <div className="flex w-full flex-col items-center gap-4 py-3 md:max-w-7xl md:flex-row md:justify-between">
                <nav className="flex flex-col items-center md:flex-row md:gap-15">
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
                        <HeaderNavLinks />
                    </div>
                </nav>
                <nav className="mt-2 flex items-center gap-8">
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
                </nav>
            </div>
        </header>
    );
}
