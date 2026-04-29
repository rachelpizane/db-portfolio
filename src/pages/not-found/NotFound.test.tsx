import { render, screen } from "../../tests/setup-tests";
import NotFound from "./NotFound";

describe(NotFound.name, () => {
    it("should render the not found title", () => {
        render(<NotFound />);

        expect(screen.getByRole("heading", { name: /página não encontrada/i })).toBeInTheDocument();
    });

    it("should render a link to return to the home page", () => {
        render(<NotFound />);

        const link = screen.getByRole("link", { name: /voltar para página inicial/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
    });
});
