import { cvLink } from "../../../datas/externalLinks";
import { render, screen } from "../../../tests/setup-tests";
import { HeaderNavLinks } from "./HeaderNavLinks";

describe(HeaderNavLinks.name, () => {
    describe("Internal navigation", () => {
        it("should have correct href for About link", async () => {
            render(<HeaderNavLinks />);
            const link = screen.getByRole("link", { name: /sobre/i });

            expect(link).toHaveAttribute("href", "/sobre");
            expect(link).not.toHaveAttribute("target", "_blank");
        });

        it("should have correct href for Projects link", async () => {
            render(<HeaderNavLinks />);
            const link = screen.getByRole("link", { name: /projetos/i });

            expect(link).toHaveAttribute("href", "/projetos");
            expect(link).not.toHaveAttribute("target", "_blank");
        });
    });

    describe("CV link", () => {
        it("should have correct href for CV link", () => {
            render(<HeaderNavLinks />);
            const link = screen.getByRole("link", { name: /currículo/i });
            expect(link).toHaveAttribute("href", cvLink);
            expect(link).toHaveAttribute("target", "_blank");
        });
    });
});
