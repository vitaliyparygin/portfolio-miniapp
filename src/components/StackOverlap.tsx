import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import {SectionHeading} from "./SectionHeading";

type StackOverlapProps = {
    onFilterChange: (technologies: string[]) => void;
};

export function StackOverlap({ onFilterChange }: StackOverlapProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const technologies = useMemo(() => {
        const counts = new Map<string, number>();

        projects.forEach((project) => {
            project.tags.forEach((tag) => {
                counts.set(tag, (counts.get(tag) ?? 0) + 1);
            });
        });

        return [...counts.entries()].sort(
            (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
        );
    }, []);

    const toggleTechnology = (technology: string) => {
        const next = selected.includes(technology)
            ? selected.filter((item) => item !== technology)
            : [...selected, technology];

        setSelected(next);
        onFilterChange(next);
    };

    const clearSelection = () => {
        setSelected([]);
        onFilterChange([]);
    };

    return (
        <section className="section skills-section">
            <SectionHeading eyebrow="Stack Overlap"
                            title="Built for the backend of tomorrow."
                            text="Choose technologies to find projects built with them."/>
            <div className="skills-cloud">
                {technologies.map(([technology, count]) => {
                    const active = selected.includes(technology);

                    return (
                        <button
                            key={technology}
                            type="button"
                            onClick={() => toggleTechnology(technology)}
                            aria-pressed={active}
                            className={[
                                'skill',
                                active
                                    ? 'skill strong'
                                    : 'skill',
                            ].join(' ')}
                        >
                            <span>{technology}</span>

                            <span className="font-mono text-xs opacity-50 counter">
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {selected.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-sm text-white/40">
                        Selected:
                    </span>

                    {selected.map((technology) => (
                        <button
                            key={technology}
                            type="button"
                            onClick={() => toggleTechnology(technology)}
                            className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/15"
                        >
                            {technology} ×
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={clearSelection}
                        className="ml-1 text-xs text-white/40 transition hover:text-white"
                    >
                        Clear
                    </button>
                </div>
            )}
        </section>
    );
}