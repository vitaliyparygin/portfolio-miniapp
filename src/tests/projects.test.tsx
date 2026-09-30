import { describe, expect, it } from 'vitest';

import { projects } from '../data/projects';
import { filterProjects } from '../components/filterProjects';

describe('filterProjects', () => {
    it('returns all projects when no filters are provided', () => {
        const result = filterProjects(projects, {});

        expect(result).toEqual(projects);
    });

    it('filters projects by allowed visibility', () => {
        const result = filterProjects(projects, {
            allowed: 'commercial',
        });

        expect(result.length).toBeGreaterThan(0);
        expect(
            result.every((project) => project.allowed === 'commercial')
        ).toBe(true);
    });

    it('filters projects by technology', () => {
        const result = filterProjects(projects, {
            technologyFilter: ['Python'],
        });

        expect(result.length).toBeGreaterThan(0);
        expect(
            result.every((project) => project.tags.includes('Python'))
        ).toBe(true);
    });

    it('requires all selected technologies to match', () => {
        const result = filterProjects(projects, {
            technologyFilter: ['Python', 'RAG'],
        });

        expect(
            result.every(
                (project) =>
                    project.tags.includes('Python') &&
                    project.tags.includes('RAG')
            )
        ).toBe(true);
    });

    it('combines allowed and technology filters', () => {
        const result = filterProjects(projects, {
            allowed: 'commercial',
            technologyFilter: ['Python'],
        });

        expect(result.length).toBeGreaterThan(0);
        expect(
            result.every(
                (project) =>
                    project.allowed === 'commercial' &&
                    project.tags.includes('Python')
            )
        ).toBe(true);
    });

    it('returns no projects when technology does not match', () => {
        const result = filterProjects(projects, {
            technologyFilter: ['__nonexistent_technology__'],
        });

        expect(result).toHaveLength(0);
    });

    it('returns no projects when allowed value does not match any project', () => {
        const result = filterProjects(projects, {
            allowed: 'commercial',
            technologyFilter: ['__nonexistent_technology__'],
        });

        expect(result).toHaveLength(0);
    });
});