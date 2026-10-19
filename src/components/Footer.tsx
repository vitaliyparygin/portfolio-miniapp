import {portfolio} from "../data/portfolio";

export function Footer() {
    const telegram = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME || portfolio.telegram}`;
    const email = import.meta.env.VITE_EMAIL || portfolio.email;
    return <section id="footer" className=" footer">
        <footer>© {new Date().getFullYear()} {portfolio.name}<span>•</span>
            AI Systems Engineer <span>•</span>
            AI Agents <span>•</span>
            Business Automation <span>•</span>
            Odoo <span>•</span> Full-Stack Development
            <br/>
            <a href="/business-automation" >Business Automation</a><span>→</span>
            <a href="/investment" > Investment </a><span>→</span>
            <a href="/technical-partner" > Technical Partner </a>
        </footer>
    </section>
}