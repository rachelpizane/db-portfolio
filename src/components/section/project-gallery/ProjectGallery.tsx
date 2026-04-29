import type { Project } from "../../../types/common.types";
import { ProjectCard } from "../project-card/ProjectCard";

interface ProjectGalleryProps {
    projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
    return (
        <div className="my-15 grid grid-cols-1 justify-items-center gap-x-10 gap-y-15 md:grid-cols-2 md:justify-items-normal xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    );
}
