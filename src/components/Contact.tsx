import {Github, Mail, Send} from 'lucide-react'
import {SectionHeading} from './SectionHeading'
import {portfolio} from "../data/portfolio";

export function Contact() {
    const telegram = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME || 'YOUR_USERNAME'}`;
    const email = import.meta.env.VITE_EMAIL || 'your@email.com';
    return <section id="contact" className="section contact">
        <SectionHeading eyebrow="CONTACT"
                     title="Let’s build something intelligent."
                     text="Have a system to ship or an idea to explore? My inbox is open."/>
        <div className="contact-buttons">
            <a href={telegram}><Send/> Telegram</a>
            <a href={portfolio.github.url} target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href={`mailto:${email}`}><Mail/> {email}</a></div>
        <footer>© {new Date().getFullYear()} {portfolio.name} <span>•</span> Built for the Telegram ecosystem</footer>
    </section>
}