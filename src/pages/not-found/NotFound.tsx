import { Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../datas/routes";

export function NotFound() {
    return (
        <div className="flex flex-col items-center gap-8">
            <h1>Página não encontrada</h1>
            <Frown size={56} strokeWidth={2.5} className="text-primary" />
            <p className="text-center">A página que você tentou acessar não existe.</p>
            <Link
                className="font-tt-bold text-accent hover:text-accent-hover cursor-pointer underline duration-200"
                to={ROUTES.HOME}
            >
                Voltar para página inicial
            </Link>
        </div>
    );
}

export default NotFound;
