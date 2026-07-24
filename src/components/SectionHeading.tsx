import {motion} from 'framer-motion'

export function SectionHeading({eyebrow, title, text}: { eyebrow: string; title: string; text?: string }) {
    return <motion.header initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true, amount: .4}} className="section-head">
        <p className="eyebrow"><span/> {eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}
    </motion.header>
}