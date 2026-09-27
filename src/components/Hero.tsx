import {motion} from 'framer-motion'
import {ArrowDownToLine, ArrowUpRight, Bot, Github, Send} from 'lucide-react'
import {portfolio} from '../data/portfolio'
import React, { useState } from 'react';

const terminalSlides = [
    {
        command: "expertise --web",
        title: "WEB_SYSTEMS_ENGINEER",
        command2: "experience",
        title2: "EXTENSIVE WEB DEVELOPMENT",
        command3: "stack",
        title3: "BROAD TECHNOLOGY STACK",
    },
    {
        command: "expertise --odoo",
        title: "ODOO_ENGINEER",
        command2: "experience",
        title2: "BUSINESS PROCESS AUTOMATION",
        command3: "capability",
        title3: "BUSINESS → ODOO",
    },
    {
        command: "expertise --ai",
        title: "AI_SYSTEMS_ENGINEER",
        command2: "projects",
        title2: "CORPORATE AI AGENTS",
        command3: "systems",
        title3: "PRIVATE AI SYSTEMS",
    },
]

export function Hero({
         onAsk = () => {
         }
     }: { onAsk?: () => void }) {
    const [activeSlide, setActiveSlide] = useState(0)
    const slide = terminalSlides[activeSlide]
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
            <div className="terminal-top">
                <button
                    className={activeSlide === 0 ? "terminal-dot active" : "terminal-dot"}
                    onClick={() => setActiveSlide(0)}
                    aria-label="Open terminal screen 1"
                />
                <button
                    className={activeSlide === 1 ? "terminal-dot active" : "terminal-dot"}
                    onClick={() => setActiveSlide(1)}
                    aria-label="Open terminal screen 2"
                />
                <button
                    className={activeSlide === 2 ? "terminal-dot active" : "terminal-dot"}
                    onClick={() => setActiveSlide(2)}
                    aria-label="Open terminal screen 3"
                />

                <b>{portfolio.bash_user}</b>
            </div>
            <div className="terminal-body">
                <p><i>$</i> {slide.command}</p>

                <strong>{slide.title}</strong>

                <p><i>$</i> {slide.command2}</p>

                <span className="online">{slide.title2}</span>

                <p><i>$</i> {slide.command3}</p>

                <span className="online">{slide.title3}</span>

                <div className="terminal-bars">
                    <b/>
                    <b/>
                    <b/>
                    <b/>
                    <b/>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Hero
