import { render, screen } from "../../tests/setup-tests";
import { About } from "./About";

describe(About.name, () => {
    describe("Main content", () => {
        it("should render main page titles", () => {
            render(<About />);
            expect(screen.getByRole("heading", { name: /olá, meu nome é/i })).toBeInTheDocument();
            expect(screen.getByRole("heading", { name: /sobre mim/i })).toBeInTheDocument();
            expect(screen.getByRole("heading", { name: /habilidade/i })).toBeInTheDocument();
        });

        it("should render my name", () => {
            render(<About />);
            expect(screen.getByText(/rachel pizane/i)).toBeInTheDocument();
        });

        it("should render my current position", () => {
            render(<About />);
            expect(screen.getByText(/trainee de desenvolvimento de software/i)).toBeInTheDocument();
        });

        it("should render my profile photo", () => {
            render(<About />);
            expect(screen.getByRole("img", { name: /rachel pizane/i })).toBeInTheDocument();
        });
    });

    describe("About section", () => {
        it("should render about me text", () => {
            render(<About />);
            expect(
                screen.getByText(/desenvolvedora de software em início de carreira/i)
            ).toBeInTheDocument();
        });
    });

    describe("Skills section", () => {
        it("should render backend and frontend sections", () => {
            render(<About />);
            expect(screen.getByText(/backend/i)).toBeInTheDocument();
            expect(screen.getByText(/frontend/i)).toBeInTheDocument();
        });

        it("should render more than one backend skill", () => {
            render(<About />);
            const backendSkills = screen.getAllByTestId(/skill-backend/i);
            expect(backendSkills.length).toBeGreaterThan(1);
        });

        it("should render more than one frontend skill", () => {
            render(<About />);
            const frontendSkills = screen.getAllByTestId(/skill-frontend/i);
            expect(frontendSkills.length).toBeGreaterThan(1);
        });
    });
});
