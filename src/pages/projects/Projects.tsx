import { ProjectGallery, ProjectTitle } from "../../components";
import { projects } from "../../datas/projects";
import { sortProjectsByDate } from "../../utils/sort-projects";

export function Projects() {
    const sortedProjects = sortProjectsByDate(projects);

    return (
        <section className="w-11/12">
            <ProjectTitle />
            <ProjectGallery projects={sortedProjects} />
        </section>
    );
}
