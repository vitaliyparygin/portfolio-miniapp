import {motion} from 'framer-motion'
import {ArrowUpRight, Bot, Boxes, Github, MessageSquareMore} from 'lucide-react'
import {SectionHeading} from './SectionHeading'

const projects = [
    {
        name: 'AI Home OS',
        type: 'AI AUTOMATION PLATFORM',
        icon: Bot, desc: 'Personal AI assistant platform for home and business automation.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'LLM', 'Ollama'],
        features: ['Personal memory', 'AI agents', 'Telegram integration', 'Knowledge base'],
    },
    {
        name: 'ERP AI Assistant',
        type: 'AI AUTOMATION PLATFORM',
        icon: Bot, desc: 'Corporation AI assistant platform for business automation.',
        tags: [
            'Python',
            'RAG',
            'LLM',
            'Docker',
            'Vector Database',
            'Qdrant',
            'LangGraph',
            'LangChain',
            'AI Agents',
            'Multi-agent orchestration',
            'Prompt Engineering',
            'SQLAlchemy',
            'Ollama'
        ],
        features: ['Corporation memory', 'AI Meeting Summary', 'Handling data from document flow'],
        link: 'https://github.com/vitaliyparygin/erp-ai-assistant'
    },
    {
        name: 'RAG Benchmark',
        type: 'EVALUATION FRAMEWORK',
        icon: Boxes, desc: 'Framework for testing and evaluating Retrieval Augmented Generation systems.',
        tags: ['Python', 'RAG', 'LLM', 'Vector Database'],
        features: ['Retrieval tests', 'Quality metrics', 'Model comparison'],
        link: 'https://github.com/vitaliyparygin/rag-benchmark'
    },
    {
        name: 'AI Support Bot',
        type: 'CUSTOMER EXPERIENCE',
        icon: MessageSquareMore, desc: 'AI customer support assistant with FAQ search and order automation.',
        tags: ['Python', 'Telegram Bot', 'FastAPI', 'Docker'],
        features: ['FAQ search', 'Order automation', 'Instant answers'],

    },
]

export function Projects() {
    return <section id="projects" className="section projects"><SectionHeading eyebrow="SELECTED WORK"
                                                                               title="Systems with a point of view."
                                                                               text="A selection of AI-powered platforms and developer tools."/>
        <div className="projects-grid">{projects.map((project, index) => {
            const Icon = project.icon;
            return <motion.article className={index === 0 ? 'project-card featured' : 'project-card'} key={project.name}
                                   initial={{opacity: 0, y: 22}} whileInView={{opacity: 1, y: 0}}
                                   viewport={{once: true}} transition={{delay: index * .1}} whileHover={{y: -6}}>
                <div className="project-top">
                    <div className="project-icon"><Icon size={24}/></div>
                    {project.link ?
                    <a href="https://github.com/vitaliyparygin" target="_blank" rel="noreferrer"
                       aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={19}/></a>
                        : ''}
                </div>
                <p className="project-type">{project.type}</p><h3>{project.name}</h3><p
                className="project-desc">{project.desc}</p>
                <ul>{project.features.map(f => <li key={f}>{f}</li>)}</ul>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.link ?
                    <a href={project.link} target="_blank" rel="noreferrer"
                   className="project-link"><Github size={15}/> View on GitHub</a>
                    : ''}


            </motion.article>
        })}</div>
    </section>
}
