import {motion} from 'framer-motion'
import {ArrowDownToLine, ArrowUpRight, Bot, Github, Send} from 'lucide-react'
import {portfolio} from '../data/portfolio'

export function Hero({
         onAsk = () => {
         }
     }: { onAsk?: () => void }) {
    const telegram = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME || portfolio.telegram}`
    return <section className="hero">
        <div className="hero-orb orb-one"/>
        <div className="hero-orb orb-two"/>
        <motion.div initial={{opacity: 0, y: 24}} animate={{opacity: 1, y: 0}} transition={{duration: .7}}
                    className="hero-content">
            <div className="availability"><i/> Available for select projects</div>
            <p className="hero-kicker">{portfolio.role}</p>
            <h1>{portfolio.name}</h1>
            <p className="hero-lead">{portfolio.desc}</p>
            <div className="hero-actions">
                <a className="button button-primary" href={portfolio.cv.download} download><ArrowDownToLine
                    size={17}/> Download CV</a>
                <a className="button button-ghost" href={portfolio.github.url} target="_blank"
                   rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
            </div>
            <div className="hero-links"><a href={telegram}><Send size={15}/> Contact Telegram</a>
                <button onClick={onAsk}><Bot size={16}/> Ask my AI</button>
            </div>
        </motion.div>
        <motion.div initial={{opacity: 0, scale: .9}} animate={{opacity: 1, scale: 1}} transition={{delay: .25}}
                    className="terminal-card">
            <div className="terminal-top"><span/><span/><span/><b>{portfolio.bash_user}</b></div>
            <div className="terminal-body">
                <p><i>$</i> whoami</p>
                <strong>{portfolio.bash_role}</strong>
                <p><i>$</i> status</p>
                <span className="online">● SYSTEMS ONLINE</span>
                <div className="terminal-bars"><b/><b/><b/><b/><b/></div>
            </div>
        </motion.div>
    </section>
}

export default Hero
