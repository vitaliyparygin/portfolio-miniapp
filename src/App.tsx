import {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Bot, ChevronRight, Indent, Send, X} from 'lucide-react'
import WebApp from "@twa-dev/sdk";

import {knowledge} from "./data/faq";
import {portfolio} from "./data/portfolio";

import TechnicalPartner from "./pages/TechnicalPartner";
import BusinessAutomation from "./pages/BusinessAutomation";
import Investment from "./pages/Investment";

import {Footer} from "./components/Footer";
import {Hero} from './components/Hero'
import {About} from './components/About'
import {Projects} from './components/Projects'
import {CVButton} from './components/CVButton'
import {Contact} from './components/Contact'
import {initTelegram} from './components/TelegramInit'
import { StackOverlap } from './components/StackOverlap';
import {FeatureTelegram} from './components/featureTelegram'


const normalizeQuestion = (value: string) =>
    value.toLocaleLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim()



function AskAI({close}: {close: () => void}) {
    const [sessionId] = useState(() => crypto.randomUUID());
    const [messages, setMessages] = useState<{role: string; text: string}[]>([
        {
            role: 'ai',
            text: `Hi — I’m ${portfolio.firstName}’s portfolio assistant. What would you like to know?`,
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async (question = input) => {
        const message = question.trim();

        if (!message || loading) return;

        setInput('');
        setLoading(true);
        setMessages(current => [
            ...current,
            {role: 'user', text: message},
        ]);

        try {
            const apiUrl = import.meta.env.VITE_AI_APM_API_URL
                ?.trim()
                .replace(/\/+$/, '');

            if (!apiUrl || apiUrl.includes('ТВІЙ-ДОМЕН-RAILWAY')) {
                throw new Error('VITE_AI_APM_API_URL is not configured');
            }

            const response = await fetch(`${apiUrl}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error(`AI API returned HTTP ${response.status}`);
            }

            const data: {answer?: string} = await response.json();

            if (!data.answer?.trim()) {
                throw new Error('AI API returned an empty answer');
            }

            setMessages(current => [
                ...current,
                {role: 'ai', text: data.answer!},
            ]);
        } catch (error) {
            console.error('AI assistant request failed:', error);

            setMessages(current => [
                ...current,
                {
                    role: 'ai',
                    text: 'The assistant is temporarily unavailable. Please try again later.',
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="ai-overlay"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={close}
        >
            <motion.div
                className="ai-dialog"
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 50, opacity: 0}}
                onClick={e => e.stopPropagation()}
            >
                <div className="ai-head">
                    <span><Bot/> Ask my AI <i>beta</i></span>
                    <button onClick={close}><X/></button>
                </div>

                <div className="ai-messages">
                    {messages.map((m, i) => (
                        <div className={`message ${m.role}`} key={i}>
                            {m.text}
                        </div>
                    ))}
                    {loading && <div className="message ai">Thinking…</div>}
                </div>

                <div className="suggestions">
                    {knowledge.map(k => (
                        <button
                            key={k.q}
                            disabled={loading}
                            onClick={() => void submit(k.q)}
                        >
                            {k.q}<ChevronRight size={14}/>
                        </button>
                    ))}
                </div>

                <form onSubmit={e => {
                    e.preventDefault();
                    void submit();
                }}>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ask about Vitaliy..."
                        disabled={loading}
                    />
                    <button aria-label="Send" disabled={loading || !input.trim()}>
                        <Send size={17}/>
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default function App() {
    const [askOpen, setAskOpen] = useState(false);
    const [name, setName] = useState('');
    const [technologyFilter, setTechnologyFilter] = useState<string[]>([]);
      useEffect(() => {
        setName(initTelegram().firstName)
        WebApp.ready();
        WebApp.expand();

        WebApp.setHeaderColor("#000000");
        WebApp.setBackgroundColor("#000000");
      }, []);

    if (window.location.pathname === "/technical-partner") {
      return <TechnicalPartner />;
    }

    if (window.location.pathname === "/business-automation") {
      return <BusinessAutomation />;
    }

    if (window.location.pathname === "/investment") {
      return <Investment />;
    }

    return <>
        <main>
            <nav><a className="brand" href="#top"><span>V</span> {portfolio.firstName}<span className="brand-dim">.AI</span></a>
                <a className="nav-status" href="#contact"><i/> {name ? `Hi, ${name}` : 'Open to work'}</a></nav>
            <div id="top"/>
            <Hero onAsk={() => setAskOpen(true)}/>

            <StackOverlap onFilterChange={setTechnologyFilter} />
            <Projects technologyFilter={technologyFilter} />


            <FeatureTelegram/>
            <CVButton/>
            <Contact/>
            <Footer/>
        </main>
        <AnimatePresence>{askOpen && <AskAI close={() => setAskOpen(false)}/>}</AnimatePresence></>
}


// export default App;