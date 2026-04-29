import { render, screen } from "../../../tests/setup-tests";
import { Footer } from "./Footer";

describe(Footer.name, () => {
    describe("External navigation", () => {
        it("should have correct external href for logo link", async () => {
            render(<Footer />);
            const logoLink = screen.getByTitle(/db/i);
            expect(logoLink).toHaveAttribute("href", expect.stringContaining("db.tec.br"));
        });
    });
});
