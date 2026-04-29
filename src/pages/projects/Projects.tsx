import { ProjectGallery, ProjectTitle } from "../../components";
import { projects } from "../../datas/projects";

export function Projects() {
    const projectsSorted = projects
        .slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <section className="w-11/12">
            <ProjectTitle />
            <ProjectGallery projects={projectsSorted} />
        </section>
    );
}
