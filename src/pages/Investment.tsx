import { useEffect } from "react";
import { ArrowUpRight, Github, Send, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { projects } from "../data/projects";
import {Projects} from '../components/Projects'

const siteUrl = "https://vitaliy-parygin-portfolio.vercel.app";

function SeoHead() {
  useEffect(() => {
    const title = "AI & Software Projects | Investment & Strategic Partnership";
    const description =
      "Explore AI and software projects built by Vitalii Parygin with commercial potential. Selected projects are open to investment and strategic partnerships.";

    document.title = title;

    const setMeta = (
      selector: string,
      attribute: "name" | "property",
      value: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attribute);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[name="robots"]', "name", "index, follow");

    setMeta('meta[property="og:type"]', "property", "website");
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", `${siteUrl}/investment`);
    setMeta('meta[property="og:site_name"]', "property", "Vitalii Parygin");

    let canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${siteUrl}/investment`;

    return () => {
      document.title = "Vitaliy AI Portfolio";

      setMeta(
        'meta[name="description"]',
        "name",
        "Vitaliy Parygin — AI Backend Engineer",
      );

      if (canonical) {
        canonical.href = `${siteUrl}/`;
      }
    };
  }, []);

  return null;
}

const commercialProjects = projects.filter(
  (project) => project.allowed === "commercial",
);

export default function Investment() {
  const telegram =
    import.meta.env.VITE_TELEGRAM_USERNAME || portfolio.telegram;
  const email = import.meta.env.VITE_EMAIL || portfolio.email;
  return (
    <>
      <SeoHead />

      <div className="min-h-screen bg-[#050806] text-white">
        <header className="border-b border-white/10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a
              href="/"
              className="font-mono text-sm text-white/70 transition hover:text-white"
            >
              ← {portfolio.firstName}.AI
            </a>

          </nav>
        </header>

        <main>
          {/* Hero */}
          <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                AI · Software · Commercial Projects
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                AI & software projects
                <br />
                <span className="text-white/55">
                  open for investment & partnership.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-white/65">
                I build AI products, automation systems and software
                infrastructure focused on practical business applications.
                Selected projects are being developed with commercial
                potential and are open to investment or strategic partnership.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
                >
                  View commercial projects
                  <ArrowUpRight size={16} />
                </a>

                 <a href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  Discuss investment
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* Commercial projects */}

          <section className="section">
              <SectionHeading
                  eyebrow="COMMERCIAL PORTFOLIO"
                  title="Projects with commercial potential."
                  text="AI products and software systems being developed for real-world applications."
              />

              <Projects
                  allowed="commercial"
                  eyebrow="COMMERCIAL PORTFOLIO"
                  title="Projects with commercial potential."
                  text="AI products and software systems being developed for real-world applications."
              />
          </section>

          {/* Opportunity */}
          <section className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading
              eyebrow="The opportunity"
              title="The focus is on products and systems, not just code."
              text="The projects combine AI, automation and backend infrastructure to solve practical problems that can be turned into commercial products."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                title="AI products"
                text="LLM applications, RAG, AI assistants and agent-based systems designed around real workflows."
              />

              <InfoCard
                title="Business automation"
                text="Software that reduces manual work and connects AI with existing company processes and systems."
              />

              <InfoCard
                title="Reusable infrastructure"
                text="Backend, knowledge, evaluation and orchestration components that can support multiple products."
              />
            </div>
          </section>

          {/* Partnership */}
          <section className="border-y border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <SectionHeading
                eyebrow="Partnership"
                title="What I am looking for"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard
                  title="Investment"
                  text="Capital to accelerate development, productization, infrastructure, market validation and go-to-market activities for selected projects."
                />

                <InfoCard
                  title="Strategic partnership"
                  text="A partner who can bring market access, business development, industry expertise, customers or other resources needed to commercialize a project."
                />
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading
              eyebrow="Builder"
              title="About the technical side"
              text="I focus on building practical AI systems from backend infrastructure to LLM applications and multi-agent workflows."
            />

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "LLM",
                "RAG",
                "AI Agents",
                "Automation",
                "PostgreSQL",
                "Docker",
                "Ollama",
                "Backend Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="max-w-3xl">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                  Investors & partners
                </p>

                <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                  Interested in one of these projects?
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/55">
                  Tell me which project interests you, what you can bring to
                  the partnership and what kind of investment or collaboration
                  you are considering.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
                  >
                    Discuss investment
                    <Mail size={16} />
                  </a>

                  <a
                    href={portfolio.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white/75 transition hover:border-white/30 hover:text-white"
                  >
                    GitHub
                    <Github size={16} />
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/40">
            © {new Date().getFullYear()} {portfolio.name} · AI & Software
            Engineering
          </div>
        </footer>
      </div>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 text-lg leading-8 text-white/60">
          {text}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-lg font-medium">{title}</h3>

      <p className="mt-3 leading-7 text-white/55">
        {text}
      </p>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof commercialProjects)[number];
}) {
  const Icon = project.icon;

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          {Icon && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <Icon
                size={21}
                className="text-emerald-400"
              />
            </div>
          )}

          <div className="min-w-0">
            <h3 className="text-xl font-semibold">
              {project.name}
            </h3>

            <p className="mt-2 leading-7 text-white/55">
              {project.desc}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-emerald-400/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
          Commercial
        </span>
      </div>

      {project.features?.length > 0 && (
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wider text-white/35">
            Core capabilities
          </p>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature: string) => (
              <li
                key={feature}
                className="text-sm leading-6 text-white/60"
              >
                <span className="mr-2 text-emerald-400">
                  •
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
        >
          View project
          <ArrowUpRight size={14} />
        </a>
      )}
    </article>
  );
}
