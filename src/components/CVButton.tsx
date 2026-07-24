import {FileDown} from 'lucide-react'

export function CVButton() {
    return <section className="section cv-section">
        <div className="cv-card">
            <div><p className="eyebrow"><span/> CURRICULUM VITAE</p><h2>Want the full picture?</h2><p>Download my CV for
                experience, projects and technical details.</p></div>
            <a className="button button-primary" href="/cv/Vitaliy_Parygin_CV.pdf" download><FileDown
                size={18}/> Download CV PDF</a></div>
    </section>
}
