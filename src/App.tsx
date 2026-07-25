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
import WebApp from "@twa-dev/sdk";
import {knowledge} from "./data/faq";
import {portfolio} from "./data/portfolio";

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
        text: `Hi — I’m '{portfolio.firstName}’s portfolio assistant. What would you like to know?`
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
            <div className="ai-messages">
                {messages.map((m, i) => <div className={`message ${m.role}`}
                    key={i}>{m.text}</div>)}</div>
            <div className="suggestions">
                {knowledge.map(k => <button key={k.q}
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
      useEffect(() => {
        setName(initTelegram().firstName)
        WebApp.ready();
        WebApp.expand();

        WebApp.setHeaderColor("#000000");
        WebApp.setBackgroundColor("#000000");
      }, []);
    return <>
        <main>
            <nav><a className="brand" href="#top"><span>V</span> {portfolio.firstName}<span className="brand-dim">.AI</span></a>
                <a className="nav-status" href="#contact"><i/> {name ? `Hi, ${name}` : 'Open to work'}</a></nav>
            <div id="top"/>
            <Hero onAsk={() => setAskOpen(true)}/><About/><Skills/><Projects/>
            <section className="section github-strip">
                <div><p className="eyebrow"><span/> OPEN SOURCE</p><h2>Building in public.</h2></div>
                <div className="github-side">
                    <div className="github-stats">
                        <span><b>AI</b> agents</span><span><b>RAG</b> systems</span><span><b>OSS</b> projects</span>
                    </div>
                    <a className="github-profile" href={portfolio.github.url} target="_blank"
                       rel="noreferrer"><b>{portfolio.github.label}</b><small>Repositories & contributions
                        →</small></a></div>
            </section>
            <CVButton/><Contact/></main>
        <AnimatePresence>{askOpen && <AskAI close={() => setAskOpen(false)}/>}</AnimatePresence></>
}


// export default App;