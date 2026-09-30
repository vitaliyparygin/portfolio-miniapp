import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data/projects';
import type { ProjectVisibility } from '../types/project';
import {
    filterProjects,
} from './filterProjects';

type ProjectsProps = {
    allowed?: ProjectVisibility;
    technologyFilter?: string[];

    eyebrow?: string;
    title?: string;
    text?: string;
    featuredFirst?: boolean;
};

export function Projects({
    allowed,
    technologyFilter = [],
    eyebrow = 'SELECTED WORK',
    title = 'Systems with a point of view.',
    text = 'A selection of AI-powered platforms and developer tools.',
    featuredFirst = true,
}: ProjectsProps) {

    const filteredProjects = filterProjects(projects, {
        allowed,
        technologyFilter,
    });

    return (
        <section id="projects" className="section projects">
            <SectionHeading
                eyebrow={eyebrow}
                title={title}
                text={text}
            />

            <div className="projects-grid">
                {filteredProjects.map((project, index) => {
                    const Icon = project.icon;

                    return (
                        <motion.article
                            className={
                                featuredFirst && index === 0
                                    ? 'project-card featured'
                                    : 'project-card'
                            }
                            key={project.name}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.45
                            }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="project-top">
                                <div className="project-icon">
                                    <Icon size={24} />
                                </div>

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Open ${project.name}`}
                                    >
                                        <ArrowUpRight size={19} />
                                    </a>
                                ) : null}
                            </div>

                            <p className="project-type">
                                {project.type}
                            </p>

                            <h3>{project.name}</h3>

                            <p className="project-description">
                                {project.desc}
                            </p>

                            <ul>
                                {project.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>

                            <div className="tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    <Github size={15} />
                                    View on GitHub
                                </a>
                            ) : null}
                        </motion.article>
                    );
                })}
            </div>

            {filteredProjects.length === 0 && (
                <p className="mt-8 text-center text-white/40">
                    No projects match the selected filters.
                </p>
            )}
        </section>
    );
}