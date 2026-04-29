import { render, screen } from "../../../tests/setup-tests";
import { Header } from "./Header";

describe(Header.name, () => {
    describe("Internal navigation", () => {
        it("should have correct href for About link", async () => {
            render(<Header />);
            const link = screen.getByRole("link", { name: /sobre/i });

            expect(link).toHaveAttribute("href", "/sobre");
        });
    });

    describe("External navigation", () => {
        it("should have correct external href for logo link", async () => {
            render(<Header />);

            const logoLink = screen.getByTitle(/db/i);
            expect(logoLink).toHaveAttribute("href", expect.stringContaining("db.tec.br"));
        });

        it("should have correct external href for GitHub contact link", async () => {
            render(<Header />);

            const githubLink = screen.getByTitle(/github/i);
            expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
        });

        it("should have correct external href for Linkedin contact link", async () => {
            render(<Header />);

            const linkedinLink = screen.getByTitle(/linkedin/i);
            expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
        });

        it("should have correct external href for Email contact link", async () => {
            render(<Header />);

            const emailLink = screen.getByTitle(/email/i);
            expect(emailLink).toHaveAttribute("href", expect.stringContaining("mailto:"));
        });
    });
});
