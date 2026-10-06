import {motion} from 'framer-motion'
import {ArrowDownToLine, ArrowUpRight, Bot, Github, Send} from 'lucide-react'
import {portfolio} from '../data/portfolio'
import {heroSlides} from '../data/slider'
import React, { useEffect, useState } from 'react';


export function Hero({
         onAsk = () => {
         }
     }: { onAsk?: () => void }) {
    const [activeSlide, setActiveSlide] = useState(0)
    useEffect(() => {
        const timer = window.setTimeout(() => {
            setActiveSlide((current) =>
                (current + 1) % heroSlides.length
            )
        }, 5000)

        return () => window.clearTimeout(timer)
    }, [activeSlide])
    const slide = heroSlides[activeSlide]
    const telegram = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME || portfolio.telegram}`
    return <section className="hero">
        <div className="hero-orb orb-one"/>
            <div className="hero-orb orb-two"/>
                <motion.div initial={{opacity: 0, y: 24}} animate={{opacity: 1, y: 0}} transition={{duration: .7}}
                            className="hero-content">
                    <div className="availability"><i/> Available for select projects</div>
                    <p className="hero-kicker">{slide.kicker}</p>
                    <h1>{portfolio.name}</h1>
                    <p className="hero-lead">{slide.description}</p>
                    <div className="hero-actions">
                        <a className="button button-primary" href={portfolio.cv.download} download>
                            <ArrowDownToLine size={17}/> Download CV</a>
                        <a className="button button-ghost" href={portfolio.github.url} target="_blank"
                           rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
                        <a
                          href={portfolio.telegram_version_site}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white/75"
                        >
                          Explore via Telegram
                          <ArrowUpRight size={16} />
                        </a>
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
                <p>
                    <i>$</i> {slide.command}
                </p>

                <strong>{slide.title}</strong>

                <p>
                    <i>$</i> {slide.statusLabel}
                </p>

                <span className="online">● {slide.status}</span>

                <div className="terminal-bars">
                    {slide.bars.map((height, index) => (
                        <b
                            key={`${activeSlide}-${index}`}
                            style={{ height: `${height * 10}px` }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    </section>
}

export default Hero
