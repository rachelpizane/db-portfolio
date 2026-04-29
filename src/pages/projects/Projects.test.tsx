import { projects } from "../../datas/projects";
import { render, screen } from "../../tests/setup-tests";
import { sortProjectsByDate } from "../../utils/sort-projects";
import { Projects } from "./Projects";

const sortedProjects = sortProjectsByDate(projects);

describe(Projects.name, () => {
    describe("Main content", () => {
        it("should render the main section title", () => {
            render(<Projects />);
            expect(screen.getByRole("heading", { name: /projetos/i })).toBeInTheDocument();
        });

        it("should render all project names", () => {
            render(<Projects />);
            projects.forEach((project) => {
                expect(screen.getByText(project.name)).toBeInTheDocument();
            });
        });

        it("should render projects in descending order by creation date", () => {
            render(<Projects />);

            const renderedNames = screen
                .getAllByRole("heading", { level: 2 })
                .map((el) => el.textContent);

            const expectedNames = sortedProjects.map((project) => project.name);
            expect(renderedNames).toEqual(expectedNames);
        });

        it("should render GitHub links for each project", () => {
            render(<Projects />);

            const githubLinkExpected = sortedProjects.map((project) => project.linkGithub);
            const githubLinkElements = screen.getAllByRole("link", { name: /acessar/i });

            const actualLinks = githubLinkElements.map((link) => link.getAttribute("href"));

            expect(actualLinks).toEqual(githubLinkExpected);
        });
    });
});
