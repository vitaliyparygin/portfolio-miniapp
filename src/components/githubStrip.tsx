import {FileDown} from 'lucide-react'
import {portfolio} from "../data/portfolio";

export function GithubStrip() {
    return <section className="section github-strip">
                <div><p className="eyebrow"><span/> OPEN SOURCE</p><h2>Building in public.</h2></div>
                <div className="github-side">
                    <div className="github-stats">
                        <span><b>AI</b> agents</span><span><b>RAG</b> systems</span><span><b>OSS</b> projects</span>
                    </div>
                    <a className="github-profile" href={portfolio.github.url} target="_blank"
                       rel="noreferrer"><b>{portfolio.github.label}</b><small>Repositories & contributions
                        →</small></a></div>
            </section>
}