import {ArrowUpRight, Bot, Boxes, Github, MessageSquareMore, Glasses} from 'lucide-react'

export const projects = [

    {
        name: 'ERP AI Assistant',
        type: 'AI AUTOMATION PLATFORM',
        icon: Bot, desc: 'Corporation AI assistant platform for business automation.',
        tags: [
            'Python',
            'FastAPI',
            'RAG',
            'LLM',
            'Pydantic',
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
            'LangFuse',
            'LangSmith',
            'RAGAS',
            'pytest',
            'Ruff',
            'Black',
            'mypy',
            'uv',
            'CI'

        ],
        features: ['Corporation memory', 'AI Meeting Summary', 'Handling data from document flow'],
        link: 'https://github.com/vitaliyparygin/erp-ai-assistant'
    },
    {
        name: 'AI phone secretary',
        type: 'AUTOMATION PHONE SYSTEM',
        icon: MessageSquareMore, desc: 'An AI phone secretary ' +
            'Filters incoming phone calls, collects and transmits information about' +
            ' the subscriber, reserves calls, answers questions',
        tags: ['Python', 'Telegram Bot', 'FastAPI', 'Docker',  'Uvicorn', 'Pydantic', 'SQLAlchemy', 'Asyncpg',
        'Alembic', 'Greenlet', 'Faster-whisper', 'Asterisk', 'RTP', 'NAT', 'SIP'],
        features: ['recording and analysis of voice messages', 'Filters incoming phone calls', 'FAQ answer', 'Instant answers'],
    },
    {
        name: 'AI Product Manager',
        type: 'AI PM Agent',
        icon: Glasses, desc: 'AI Product manager Agent. Knows everything about projects. Presents and answers questions about projects and more.',
        tags: ['Python', 'FastAPI', 'Docker', 'LLM', 'Ollama', 'Pydantic', 'anyio'],
        features: ['Corporation network', 'Collaboration with team AI agents', 'Knowledge base'],
    },
    {
        name: 'AI Meeting Agent',
        type: 'AI Meeting Agent',
        icon: Glasses, desc: 'Master of meeting. Visit meeting, protocol officer, manages corporate document flow,\n' +
            '    sent short description by meeting, create task and assign this task for user or other agents',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'LLM', 'Ollama'],
        features: ['Corporation network', 'Collaboration with team AI agents', 'Knowledge base', 'Send Emails',
            'Manage Task', 'Assigns Tasks'],
    },
    {
        name: 'AI Home OS',
        type: 'AI AUTOMATION PLATFORM',
        icon: Bot, desc: 'AI assistant platform for home and business automation.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'LLM', 'Ollama'],
        features: ['Personal memory', 'AI agents', 'Telegram integration', 'Knowledge base'],
    },
    {
        name: 'RAG Benchmark',
        type: 'EVALUATION FRAMEWORK',
        icon: Boxes, desc: 'Framework for testing and evaluating Retrieval Augmented Generation systems.',
        tags: [
            'Python',
            'RAG',
            'LLM',
            'Vector Database',
            'CI',
            'AnyIO',
            'Pydantic',
        ],
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