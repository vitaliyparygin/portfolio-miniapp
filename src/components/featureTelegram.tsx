import {ArrowUpRight} from 'lucide-react'
import {portfolio} from '../data/portfolio'
import React from 'react';
import {SectionHeading} from "./SectionHeading";
import {skills} from "../data/skils";

export function FeatureTelegram() {
    return <section className="border-y border-white/10">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <div className="max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
        AI-powered portfolio
      </p>

      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
        Explore my portfolio through Telegram
      </h2>

      <p className="mt-4 text-lg leading-8 text-white/60">
        This portfolio is also available through my Telegram AI assistant.
        You can explore my background, projects and technical capabilities
        directly through Telegram.
      </p>

      <a
        href={portfolio.telegram_version_site}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black"
      >
        Open Telegram portfolio
        <ArrowUpRight size={16} />
      </a>
    </div>
  </div>
</section>
}

