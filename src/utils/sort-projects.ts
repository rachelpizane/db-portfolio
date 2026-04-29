import type { Project } from "../types/common.types";

export function sortProjectsByDate(projects: Project[]) {
    return [...projects].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
