import {ArrowUpRight, Bot, Boxes, Github, MessageSquareMore} from 'lucide-react'
export const projects = [
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
            'Ollama',
            'Prometheus',
            'Grafana',
            'Redis',
            'Celery',
            'PostgreSQL',

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