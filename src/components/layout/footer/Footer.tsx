import { dbLink } from "../../../datas/externalLinks";

export function Footer() {
    const db = dbLink("/images/layout/logo_db_complete.svg");

    return (
        <footer className="bg-primary flex justify-center py-3">
            <a
                key={db.name}
                href={db.url}
                target="_blank"
                rel="noopener noreferrer"
                title={db.name}
                className="cursor-pointer"
            >
                <img className="w-44 md:w-full" src={db.src} alt={db.name} />
            </a>
        </footer>
    );
}
