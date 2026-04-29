import type { Project } from "../../../types/common.types";
import { LinkButton } from "../../buttons/link-button/LinkButton";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="bg-card-background flex flex-col overflow-hidden rounded-lg border border-mauve-200 shadow-lg">
            <div className="aspect-4/3 overflow-hidden">
                <img
                    src={project.src}
                    alt={project.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="flex h-5/6 flex-col justify-between p-3">
                <div className="flex flex-col gap-2">
                    <div className="flex min-h-30 flex-col gap-2">
                        <h2 className="flex items-center leading-tight">{project.name}</h2>
                        <span className="font-tt-bold text-highlight text-sm tracking-wide">
                            {project.technologies.join(", ")}.
                        </span>
                    </div>

                    <p className="min-h-50 font-light">{project.description}</p>
                </div>

                <div className="flex gap-3">
                    <LinkButton href={project.linkGithub} className="flex-1">
                        Acessar
                    </LinkButton>
                    {project.linkDeploy && (
                        <LinkButton href={project.linkDeploy} className="flex-1">
                            Deploy
                        </LinkButton>
                    )}
                </div>
            </div>
        </article>
    );
}
