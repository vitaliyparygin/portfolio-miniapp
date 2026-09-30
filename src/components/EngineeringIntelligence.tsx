import { useState } from 'react';

type Stage = {
    id: string;
    label: string;
    eyebrow: string;
    description: string;
};

const stages: Stage[] = [
    {
        id: 'build',
        label: 'BUILD',
        eyebrow: 'BUILD / SYSTEM DESIGN',
        description:
            'Design AI systems, backend services, agent workflows and the infrastructure around them.',
    },
    {
        id: 'test',
        label: 'TEST',
        eyebrow: 'TEST / VALIDATION',
        description:
            'Evaluate behavior, reliability, retrieval quality and system boundaries before shipping.',
    },
    {
        id: 'deploy',
        label: 'DEPLOY',
        eyebrow: 'DEPLOY / PRODUCTION',
        description:
            'Turn working components into observable, maintainable systems that can operate in production.',
    },
    {
        id: 'iterate',
        label: 'ITERATE',
        eyebrow: 'ITERATE / IMPROVEMENT',
        description:
            'Measure real usage, find bottlenecks and continuously improve the system.',
    },
];

export default function EngineeringIntelligence() {
    const [activeStage, setActiveStage] = useState('build');

    const active = stages.find((stage) => stage.id === activeStage) ?? stages[0];

    return (
        <section className="engineering-intelligence">
            <div className="engineering-intelligence__header">
                <div className="engineering-intelligence__eyebrow">
                    ENGINEERING INTELLIGENCE
                </div>

                <h2 className="engineering-intelligence__title">
                    From intelligence to infrastructure.
                </h2>

                <p className="engineering-intelligence__text">
                    Building systems where AI, software, and automation become
                    useful infrastructure.
                </p>
            </div>

            <div
                className="engineering-intelligence__pipeline"
                role="tablist"
                aria-label="Engineering process"
            >
                {stages.map((stage, index) => (
                    <div
                        className="engineering-intelligence__stage-wrapper"
                        key={stage.id}
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeStage === stage.id}
                            className={`engineering-intelligence__stage ${
                                activeStage === stage.id
                                    ? 'engineering-intelligence__stage--active'
                                    : ''
                            }`}
                            onClick={() => setActiveStage(stage.id)}
                        >
                            {stage.label}
                        </button>

                        {index < stages.length - 1 && (
                            <span
                                className="engineering-intelligence__arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="engineering-intelligence__content">
                <div className="engineering-intelligence__content-eyebrow">
                    {active.eyebrow}
                </div>

                <p className="engineering-intelligence__description">
                    {active.description}
                </p>
            </div>

            <div className="engineering-intelligence__tags">
                <span>[ AI SYSTEMS ]</span>
                <span>[ BACKEND ]</span>
                <span>[ AUTOMATION ]</span>
                <span>[ AGENTS ]</span>
            </div>
        </section>
    );
}