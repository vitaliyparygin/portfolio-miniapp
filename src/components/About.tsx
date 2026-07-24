import {Cpu, Database, Network, Sparkles, Send, Building2, ChartNoAxesCombined} from 'lucide-react'
import {SectionHeading} from './SectionHeading'

const focuses = [
    ['Artificial Intelligence', Cpu],
    ['LLM applications', Sparkles],
    ['RAG systems', Database],
    ['AI Agents', Network],
    ['Backend architecture', Network],
    ['Automation systems', Cpu],
    ['Telegram SNS', Send],
    ['ERP', Building2],
    ['Highload', ChartNoAxesCombined],
]

export function About() {
    return <section id="about" className="section"><SectionHeading eyebrow="ABOUT ME"
                                                                   title="Engineering intelligence into real products."
                                                                   text="Backend developer focused on reliable AI systems—from the first API call to production-scale automation."/>
        <div className="focus-grid">{focuses.map(([label, Icon]) => {
            const C = Icon as typeof Cpu;
            return <div className="focus-item" key={label as string}><C size={18}/><span>{label as string}</span></div>
        })}</div>
    </section>
}