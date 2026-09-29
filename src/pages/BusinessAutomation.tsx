import { useEffect } from "react";
import {ArrowUpRight, Mail, Send} from "lucide-react";
import { portfolio } from "../data/portfolio";

const siteUrl = "https://vitaliy-parygin-portfolio.vercel.app";

function SeoHead() {
  useEffect(() => {
    const title = "AI & Business Automation | Vitalii Parygin";
    const description =
      "Automate business processes with AI and software. I build AI assistants, AI agents, integrations, ERP automation and custom business systems.";

    document.title = title;

    const setMeta = (
      selector: string,
      attribute: "name" | "property",
      value: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[name="robots"]', "name", "index, follow");
    setMeta('meta[property="og:type"]', "property", "website");
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta(
      'meta[property="og:url"]',
      "property",
      `${siteUrl}/business-automation`,
    );
    setMeta('meta[property="og:site_name"]', "property", "Vitalii Parygin");

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${siteUrl}/business-automation`;

    return () => {
      document.title = "Vitaliy AI Portfolio";
      setMeta(
        'meta[name="description"]',
        "name",
        "Vitaliy Parygin — AI Backend Engineer",
      );
      setMeta('meta[name="robots"]', "name", "index, follow");
      if (canonical) canonical.href = `${siteUrl}/`;
    };
  }, []);

  return null;
}

const services = [
  {
    title: "Business Process Automation",
    text: "Analyze repetitive work and turn manual workflows into software-driven processes.",
  },
  {
    title: "AI Assistants",
    text: "Build internal assistants that work with company knowledge, documents, systems and business data.",
  },
  {
    title: "AI Agents",
    text: "Create agents that can use tools, perform tasks and coordinate several steps of a business process.",
  },
  {
    title: "RAG & Company Knowledge",
    text: "Connect AI to internal documents and knowledge bases so employees can work with company information through natural language.",
  },
  {
    title: "ERP & Odoo Automation",
    text: "Extend ERP workflows, integrate external services and automate operational processes around Odoo and other systems.",
  },
  {
    title: "Custom AI Systems",
    text: "Design larger systems combining backend services, AI models, agents, databases and integrations.",
  },
];

const process = [
  "Understand the current business process",
  "Find repetitive and automatable operations",
  "Design the target workflow and system architecture",
  "Build a prototype or production solution",
  "Integrate it with existing systems",
  "Measure, improve and expand the automation",
];

export default function BusinessAutomation() {
  const telegram =
    import.meta.env.VITE_TELEGRAM_USERNAME || portfolio.telegram;
  const email = import.meta.env.VITE_EMAIL || portfolio.email;
  return (
    <>
      <SeoHead />

      <div className="min-h-screen bg-[#050806] text-white">
        <header className="border-b border-white/10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="/" className="font-mono text-sm text-white/70 hover:text-white">
              ← Vitalii.AI
            </a>

          </nav>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                For businesses
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                Automate your business
                <br />
                <span className="text-white/55">with AI & software.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-white/65">
                If your company relies on repetitive manual work, disconnected
                systems or complex workflows, I can design and build software
                and AI automation around your actual business process.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black"
                >
                  Discuss your business process <Mail/>
                </a>

                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white/75 hover:border-white/30 hover:text-white"
                >
                  View portfolio <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <SectionHeading
                eyebrow="What can be automated?"
                title="Start with the process, not the technology."
                text="The goal is not to add AI just because it is available. The goal is to remove unnecessary manual work and make the business process more effective."
              />

              <div className="grid gap-5 md:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <h3 className="text-xl font-medium">{service.title}</h3>
                    <p className="mt-3 leading-7 text-white/55">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading
              eyebrow="How it works"
              title="From business problem to working automation"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl border border-white/10 p-5"
                >
                  <span className="font-mono text-sm text-emerald-400">
                    0{index + 1}
                  </span>
                  <span className="text-white/70">{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <SectionHeading
                eyebrow="Complex systems"
                title="When one automation is not enough"
                text="Some business processes require several connected systems rather than a single AI feature."
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-10">
                <div className="grid gap-5 md:grid-cols-4">
                  {[
                    "Company data",
                    "AI / LLM",
                    "Specialized agents",
                    "Business systems",
                  ].map((item, index) => (
                    <div key={item} className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/15 font-mono text-sm text-emerald-400">
                        {index + 1}
                      </div>
                      <p className="mt-3 text-sm text-white/65">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mx-auto mt-8 max-w-2xl text-center leading-7 text-white/50">
                  The result can be a network of AI agents and software
                  services working together around a real business process.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading
              eyebrow="Who this is for"
              title="Companies that want to change how work gets done"
            />

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                title="Too much manual work"
                text="Employees spend time copying data, preparing documents, answering repetitive questions or moving information between systems."
              />
              <InfoCard
                title="Disconnected systems"
                text="Important information lives across ERP, documents, databases, APIs and communication tools."
              />
              <InfoCard
                title="Complex workflows"
                text="Your process involves many steps, decisions or roles and could benefit from intelligent orchestration."
              />
            </div>
          </section>

          <section className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="max-w-3xl">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                  Start with your process
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                  Tell me what takes too much time.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/55">
                  Describe the current workflow, what is manual today and
                  where the biggest bottleneck is. We can identify what can be
                  automated and what kind of system is needed.
                </p>

                <a href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black"
                >
                  Please feel free to send over your business proposal.
 <Mail/>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/40">
            © {new Date().getFullYear()} Vitalii Parygin · AI & Software Engineering
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
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {text && (
        <p className="mt-4 text-lg leading-8 text-white/60">{text}</p>
      )}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 leading-7 text-white/55">{text}</p>
    </div>
  );
}
