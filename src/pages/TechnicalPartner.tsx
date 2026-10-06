import { useEffect } from "react";
import {ArrowUpRight, Mail} from "lucide-react";
import { portfolio } from "../data/portfolio";

const siteUrl = "https://vitaliy-parygin-portfolio.vercel.app";

function SeoHead() {
  useEffect(() => {
    const title =
      "AI Technical Partner | AI Product & MVP Development | Vitalii Parygin";

    const description =
      "Looking for an AI technical partner? I design and build AI products, LLM applications, AI agents, backend systems and business automation from idea to working MVP.";

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
      `${siteUrl}/technical-partner`,
    );
    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "Vitalii Parygin",
    );

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${siteUrl}/technical-partner`;

    return () => {
      document.title = "Vitalii Parygin — AI Systems Engineer";

      if (canonical) {
        canonical.href = `${siteUrl}/`;
      }
    };
  }, []);

  return null;
}

const capabilities = [
  {
    title: "Validate the idea",
    text: "Turn a product idea into a realistic technical concept, architecture and development plan.",
  },
  {
    title: "Build the MVP",
    text: "Design and implement the backend, APIs, database, integrations and AI functionality needed to test the product.",
  },
  {
    title: "AI products",
    text: "LLM applications, RAG, AI assistants, AI agents, multi-agent systems and AI-powered business tools.",
  },
  {
    title: "Grow the product",
    text: "Continue from MVP to a production system with better architecture, automation, observability and integrations.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "LLM",
  "RAG",
  "AI Agents",
  "LangGraph",
  "Qdrant",
  "Odoo",
];

export default function TechnicalPartner() {
  const email = import.meta.env.VITE_EMAIL || portfolio.email;
  return (
    <>
      <SeoHead />

      <div className="min-h-screen bg-[#050806] text-white">
        <header className="border-b border-white/10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="/" className="font-mono text-sm text-white/70 hover:text-white">
              ← {portfolio.firstName}.AI
            </a>

          </nav>
        </header>

        <main>
          <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
            <div className="max-w-4xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                For founders
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                AI technical partner
                <br />
                <span className="text-white/55">
                  for building real products.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-white/65">
                I help founders and companies turn AI product ideas into working systems.
                I design the architecture and build LLM applications, AI agents,
                backend services, integrations and business automation.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black"
                >
                  Tell me about your idea <Mail size={16} />
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
                eyebrow="Technical partnership"
                title="From idea to working AI product"
                text="I can take responsibility for the technical side of an AI product, from architecture and MVP development to integrations and production systems."
              />

              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard
                  title="AI Product Architecture"
                  text="Design the architecture for LLM applications, AI agents, APIs, databases and external integrations."
                />

                <InfoCard
                  title="MVP Development"
                  text="Build a focused working MVP that validates the product idea before investing in a larger system."
                />

                <InfoCard
                  title="Long-Term Engineering"
                  text="Evolve the MVP into a reliable production system with integrations, automation and scalable backend infrastructure."
                />
              </div>
            </div>
          </section>


        </main>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/40">
            © {new Date().getFullYear()} {portfolio.name} · AI Systems Engineer ·
            AI Agents · Business Automation · Odoo · Full-Stack Development
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
