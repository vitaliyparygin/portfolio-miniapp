import type { Project, ProjectVisibility } from '../types/project';

export function filterProjects(
    projects: Project[],
    {
        allowed,
        technologyFilter = [],
    }: {
        allowed?: ProjectVisibility;
        technologyFilter?: string[];
    }
) {
    return projects.filter((project) => {
        if (allowed && project.allowed !== allowed) {
            return false;
        }

        if (
            technologyFilter.length > 0 &&
            !technologyFilter.every((technology) =>
                project.tags.includes(technology)
            )
        ) {
            return false;
        }

        return true;
    });
}