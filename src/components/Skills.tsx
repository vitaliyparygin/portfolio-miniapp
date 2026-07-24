import {SectionHeading} from './SectionHeading'

const skills = [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'Linux',
    'REST API',
    'Odoo',
    'LLM',
    'Ollama',
    'Vector Databases',
    'LangGraph',
    'LangChain',
    'Qdrant',
    'RAG',
    'AI Agents',
    'Multi-agent orchestration',
    'Prompt Engineering',
    'PHP',
    'Redis',
    'SQL',
    'Yii2',
    'Flask',
    'Symfony',
    'Zend Framework',
    'git',
    'CI',
    'AsyncIO',
    'SQLAlchemy',
    'Pydantic',
    'ETL',
    'Pytest',
    'Unittest'
]

export function Skills() {
    return <section className="section skills-section"><SectionHeading eyebrow="TOOLKIT"
                                                                       title="Built for the backend of tomorrow."/>
        <div className="skills-cloud">{skills.map((skill, index) => <span
            className={index < 7 ? 'skill strong' : 'skill'} key={skill}>{skill}</span>)}</div>
    </section>
}
