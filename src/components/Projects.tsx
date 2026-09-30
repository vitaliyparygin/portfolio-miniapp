import {motion} from 'framer-motion'
import {ArrowUpRight, Github} from 'lucide-react'
import {SectionHeading} from './SectionHeading'
import {projects} from '../data/projects'
type ProjectVisibility = "commercial" | "private" | "public";
export function Projects({
    allowed,
    eyebrow = "SELECTED WORK",
    title = "Systems with a point of view.",
    text = "A selection of AI-powered platforms and developer tools.",
    featuredFirst = true,
}: {
    allowed?: ProjectVisibility;
    eyebrow?: string;
    title?: string;
    text?: string;
    featuredFirst?: boolean;
}) {
    const filteredProjects = allowed
        ? projects.filter(project => project.allowed === allowed)
        : projects;

    return (
        <section id="projects" className="section projects">
            <SectionHeading
                eyebrow="SELECTED WORK"
                title="Systems with a point of view."
                text="A selection of AI-powered platforms and developer tools."
            />

            <div className="projects-grid">
                {filteredProjects.map((project, index) => {
                    const Icon = project.icon;

                    return (
                        <motion.article
                            className={
                                featuredFirst && index === 0
                                    ? "project-card featured"
                                    : "project-card"
                            }
                            key={project.name}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="project-top">
                                <div className="project-icon">
                                    <Icon size={24} />
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.name} on GitHub`}
                                    >
                                        <ArrowUpRight size={19} />
                                    </a>
                                )}
                            </div>

                            <p className="project-type">
                                {project.type}
                            </p>

                            <h3>{project.name}</h3>

                            <p className="project-desc">
                                {project.desc}
                            </p>

                            <ul>
                                {project.features.map(feature => (
                                    <li key={feature}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    <Github size={15} />
                                    View on GitHub
                                </a>
                            )}
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
