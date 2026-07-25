import {SectionHeading} from './SectionHeading'
import {skills} from "../data/skils";

export function Skills() {
    return <section className="section skills-section">
        <SectionHeading eyebrow="TOOLKIT" title="Built for the backend of tomorrow."/>
        <div className="skills-cloud">{skills.map((skill, index) => <span
            className={index < 7 ? 'skill strong' : 'skill'} key={skill}>{skill}</span>)}</div>
    </section>
}
