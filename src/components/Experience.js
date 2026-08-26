import React from "react";
import htm from "htm";
import { LogoBadge } from "./ui/LogoBadge.js";

const html = htm.bind(React.createElement);

export function Experience({ locale }) {
  return html`
    <section className="py-7" id="experience">
      <div className="max-w-[54rem]">
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.experience.eyebrow}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.experience.title}</h2>
      </div>

      <div className="mt-6 grid gap-[18px]">
        ${locale.jobs.map(
          (job, i) => html`
            <article
              data-reveal=""
              data-reveal-delay=${i * 70}
              className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7"
              key=${job.company}
            >
              <div className="grid gap-[18px] sm:flex sm:items-start">
                <${LogoBadge} logo=${job.logo} logoBg=${job.logoBg} fallback=${job.fallback} alt=${job.company} />
                <div>
                  <h3 className="text-[1.08rem]">${job.role} · ${job.company}</h3>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      ${job.period}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      ${job.location}
                    </span>
                  </div>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">${job.summary}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-[18px] leading-7 text-slate-600 dark:text-slate-300">
                ${job.bullets.map((bullet) => html`<li key=${bullet}>${bullet}</li>`)}
              </ul>
            </article>
          `
        )}
      </div>
    </section>
  `;
}
