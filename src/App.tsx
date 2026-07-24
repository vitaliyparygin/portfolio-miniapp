import {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Bot, ChevronRight, Send, X} from 'lucide-react'
import {Hero} from './components/Hero'
import {About} from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {CVButton} from './components/CVButton'
import {Contact} from './components/Contact'
import {initTelegram} from './components/TelegramInit'

const knowledge = [
    {
        q: 'Who is Vitaliy?',
        a: 'Vitaliy Parygin is an AI Backend Engineer focused on designing dependable AI products, APIs and automation platforms.'
    },
    {
        q: 'What projects has he built?',
        a: 'His featured work includes:' +
            ' ERP AI Assistens,' +
            ' AI Home OS,' +
            ' a personal AI automation platform j.a.r.d.i.s;' +
            ' RAG Benchmark,' +
            ' an evaluation framework; and an AI Support Bot for customer service.'
    },
    {
        q: 'What technologies does he use?',
        a: 'His core toolkit includes Python, FastAPI, PostgreSQL, Docker, Linux, LLMs, Ollama and vector databases.'
    },
    {
      q: 'What is his long-term engineering goal?',
      a: 'My long-term goal is to build production AI systems that help people solve real problems.' +
          ' I am particularly interested in AI agents, enterprise automation, intelligent assistants,' +
          ' and developer platforms. I enjoy creating software that combines reliable backend engineering with practical ' +
          'applications of Generative AI.'
    },
    {
        q: 'What are his salary expectations?',
        a: 'My long-term target compensation is around USD 7,000 per month.' +
            ' I am deeply passionate about AI and dedicate a significant amount of my personal time to building AI products,' +
            ' experimenting with LLMs, multi-agent systems, and automation platforms.' +
            ' I understand that my current spoken English is still improving, so I am open to starting at a lower' +
            ' compensation level if there is a clear growth path based on performance, technical contribution,' +
            ' and increasing responsibilities. My goal is to become a long-term, high-impact engineer rather' +
            ' than simply negotiate the highest possible starting salary.'
    },
    {
        q: 'What is his English level?',
        a: 'I consider my English to be between B1 and B2.' +
            ' I can comfortably read technical documentation, communicate in writing, discuss software architecture,' +
            ' and participate in technical interviews. Spoken communication is the area I continue to improve.' +
            ' Throughout my career I have primarily worked as a hands-on software engineer, where deep technical' +
            ' expertise and delivering production systems have been the primary focus.' +
            ' I actively invest time in improving my spoken English and become more confident with every interview ' +
            'and daily practice.'
    },
    {
        q: 'What type of role is he looking for?',
        a: 'I am looking for Senior Python Backend Engineer or AI/LLM Engineer positions where I can combine' +
            ' my backend engineering experience with modern AI technologies. I enjoy designing scalable backend systems,' +
            ' AI agents, Retrieval-Augmented Generation (RAG) pipelines, automation platforms, and enterprise integrations.'
    },
    {
        q: 'Why is he moving into AI?',
        a: 'AI is a natural evolution of my backend engineering career rather than a career change.' +
            ' For many years I have built enterprise systems, APIs, integrations, and automation platforms.' +
            ' Large Language Models and AI agents extend those skills by enabling intelligent automation and decision' +
            ' support. My goal is to build production-grade AI systems, not experimental demos.'
    },
    {
        q: 'What are his biggest strengths?',
        a: 'My strongest skill is designing reliable backend systems that solve real business problems.' +
            ' I combine strong software engineering practices with practical business understanding,' +
            ' allowing me to build solutions that are scalable, maintainable, and valuable for end users.'
    },
    {
        q: 'What are his biggest strengths?',
        a: 'My strongest skill is designing reliable backend systems that solve real business problems.' +
            ' I combine strong software engineering practices with practical business understanding,' +
            ' allowing me to build solutions that are scalable, maintainable, and valuable for end users.'
    },
    {
      q: 'Does he enjoy software architecture?',
      a: 'Yes. One of my favorite parts of software engineering is designing system architecture.' +
          ' I enjoy breaking complex business requirements into maintainable services, defining APIs,' +
          ' designing data models, and improving scalability, reliability, and developer experience.'
    },
    {
      q: 'What kind of projects motivate him?',
      a: 'I enjoy technically challenging projects where software has a measurable impact on users or businesses.' +
          ' AI platforms, enterprise automation, developer tools, observability, document intelligence, workflow' +
          ' automation, and distributed backend systems are particularly interesting to me.'
    },
    {
      q: 'Does he work on personal projects?',
      a: 'Yes. I regularly build personal projects to learn new technologies and improve my engineering skills.' +
          ' My current focus includes AI agents, LangGraph, Retrieval-Augmented Generation (RAG),' +
          ' AI automation platforms, benchmarking frameworks, and developer tools.'
    },
    {
      q: 'How does he learn new technologies?',
      a: 'I learn by building real projects rather than only reading documentation. When exploring a new technology,' +
          ' I prefer creating production-like applications with proper architecture, testing, documentation, Docker,' +
          ' CI/CD, and observability.'
    },
    {
      q: 'What type of team does he enjoy working with?',
      a: 'I enjoy collaborative engineering teams that value clean architecture, knowledge sharing, code reviews,' +
          ' ownership, and continuous improvement. I appreciate environments where engineers are trusted to make' +
          ' technical decisions and contribute to long-term product quality.'
    },
    {
      q: 'What kind of projects motivate him?',
      a: 'I enjoy technically challenging projects where software has a measurable impact on users or businesses.' +
          ' AI platforms, enterprise automation, developer tools, observability, document intelligence,' +
          ' workflow automation, and distributed backend systems are particularly interesting to me.'
    }
]

const normalizeQuestion = (value: string) =>
    value.toLocaleLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim()

const getAnswer = (question: string) => {
    const normalizedQuestion = normalizeQuestion(question)

    // Clicking a suggested question always returns its paired answer.
    const exactMatch = knowledge.find(({q}) => normalizeQuestion(q) === normalizedQuestion)
    if (exactMatch) return exactMatch.a

    // For typed questions, choose the dictionary entry with the most shared words.
    const questionWords = new Set(normalizedQuestion.split(' ').filter(word => word.length > 2))
    const bestMatch = knowledge
        .map(entry => ({
            entry,
            score: normalizeQuestion(entry.q)
                .split(' ')
                .filter(word => questionWords.has(word)).length,
        }))
        .sort((a, b) => b.score - a.score)[0]

    return bestMatch?.score
        ? bestMatch.entry.a
        : 'I don’t have that information yet. Try one of the suggested questions.'
}

function AskAI({close}: { close: () => void }) {
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([{
        role: 'ai',
        text: 'Hi — I’m Vitaliy’s portfolio assistant. What would you like to know?'
    }]);
    const [input, setInput] = useState('');
    const submit = (question = input) => {
        if (!question.trim()) return;
        setMessages(m => [...m, {role: 'user', text: question}, {role: 'ai', text: getAnswer(question)}]);
        setInput('')
    }
    return <motion.div className="ai-overlay" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                       onClick={close}>
        <motion.div className="ai-dialog" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}}
                    exit={{y: 50, opacity: 0}} onClick={e => e.stopPropagation()}>
            <div className="ai-head"><span><Bot/> Ask my AI <i>beta</i></span>
                <button onClick={close}><X/></button>
            </div>
            <div className="ai-messages">{messages.map((m, i) => <div className={`message ${m.role}`}
                                                                      key={i}>{m.text}</div>)}</div>
            <div className="suggestions">{knowledge.map(k => <button key={k.q}
                                                                     onClick={() => submit(k.q)}>{k.q}<ChevronRight
                size={14}/></button>)}</div>
            <form onSubmit={e => {
                e.preventDefault();
                submit()
            }}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about Vitaliy..."/>
                <button aria-label="Send"><Send size={17}/></button>
            </form>
        </motion.div>
    </motion.div>
}

export default function App() {
    const [askOpen, setAskOpen] = useState(false);
    const [name, setName] = useState('');
    useEffect(() => setName(initTelegram().firstName), []);
    return <>
        <main>
            <nav><a className="brand" href="#top"><span>V</span> VITALIY<span className="brand-dim">.AI</span></a><a
                className="nav-status" href="#contact"><i/> {name ? `Hi, ${name}` : 'Open to work'}</a></nav>
            <div id="top"/>
            <Hero onAsk={() => setAskOpen(true)}/><About/><Skills/><Projects/>
            <section className="section github-strip">
                <div><p className="eyebrow"><span/> OPEN SOURCE</p><h2>Building in public.</h2></div>
                <div className="github-side">
                    <div className="github-stats">
                        <span><b>AI</b> agents</span><span><b>RAG</b> systems</span><span><b>OSS</b> projects</span>
                    </div>
                    <a className="github-profile" href="https://github.com/vitaliyparygin" target="_blank"
                       rel="noreferrer"><b>github.com/vitaliyparygin</b><small>Repositories & contributions
                        →</small></a></div>
            </section>
            <CVButton/><Contact/></main>
        <AnimatePresence>{askOpen && <AskAI close={() => setAskOpen(false)}/>}</AnimatePresence></>
}
