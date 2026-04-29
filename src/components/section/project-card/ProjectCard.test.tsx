import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../../../types/common.types";

const baseProject: Project = {
    name: "Test Project",
    description: "A test project description.",
    linkGithub: "https://github.com/test-project",
    linkDeploy: null,
    src: "/images/projects/test-project.png",
    createdAt: "2026-01-01",
    technologies: ["React", "TypeScript"],
};

describe(ProjectCard.name, () => {
    it("should render the title, image, technologies, and description", () => {
        render(<ProjectCard project={baseProject} />);

        expect(screen.getByText(baseProject.name)).toBeInTheDocument();
        expect(screen.getByAltText(baseProject.name)).toHaveAttribute("src", baseProject.src);
        expect(screen.getByText(/React, TypeScript\./i)).toBeInTheDocument();
        expect(screen.getByText(baseProject.description)).toBeInTheDocument();
    });

    it("should render only the GitHub button when there is no deploy link", () => {
        render(<ProjectCard project={baseProject} />);

        expect(screen.getByRole("link", { name: /acessar/i })).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: /deploy/i })).not.toBeInTheDocument();
    });

    it("should render both GitHub and Deploy buttons when deploy link exists", () => {
        const projectWithDeploy = { ...baseProject, linkDeploy: "https://deploy.com" };
        render(<ProjectCard project={projectWithDeploy} />);

        expect(screen.getByRole("link", { name: /acessar/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /deploy/i })).toBeInTheDocument();
    });
});
