import React from "react";
import htm from "htm";
import { LogoBadge } from "./ui/LogoBadge.js";
import { TechPill } from "./ui/TechPill.js?v=20";

const html = htm.bind(React.createElement);

export function Education({ locale }) {
  return html`
    <section className="grid gap-6 py-7 lg:grid-cols-2" id="education">
      <article data-reveal="" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="max-w-[54rem]">
          <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.education.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.education.title}</h2>
        </div>

        <div className="mt-5 grid gap-3.5">
          ${locale.schools.map(
            (school) => html`
              <article
                className="grid gap-4 rounded-[20px] border border-slate-200/90 bg-slate-50/95 p-4 dark:border-white/10 dark:bg-white/5 sm:grid-cols-[58px_minmax(0,1fr)] sm:items-center sm:rounded-[22px] sm:p-[18px]"
                key=${school.name}
              >
                <${LogoBadge} logo=${school.logo} logoBg=${school.logoBg} fallback=${school.fallback} alt=${school.name} />
                <div>
                  <h3 className="text-[1.08rem] font-medium">${school.name}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">${school.course}</p>
                  <span className="mt-2 block text-slate-500 dark:text-slate-400 text-sm">${school.period}</span>
                </div>
              </article>
            `
          )}
        </div>
      </article>

      <article data-reveal="" data-reveal-delay="110" className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-amber-200/50 blur-2xl dark:bg-[#ff9464]/10"></div>
        
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.featuredProject.eyebrow}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/15 dark:text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse"></span>
              ${locale.featuredProject.statusBadge}
            </span>
          </div>

          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.featuredProject.title}</h2>
        </div>

        <div className="my-auto py-4">
          <div className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-4 leading-relaxed text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:p-5 sm:text-[0.96rem]">
            ${locale.featuredProject.description}
          </div>
        </div>

        <div className="border-t border-slate-200/70 pt-4 dark:border-white/10">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">Tech Stack & Pipelines</span>
          <ul className="flex flex-wrap gap-2">
            ${locale.featuredProject.stack.map((item) => html`<${TechPill} key=${item} name=${item} />`)}
          </ul>
        </div>
      </article>
    </section>

    <section className="grid gap-6 py-7 lg:grid-cols-2">
      <article data-reveal="" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="max-w-[54rem]">
          <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.skills.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.skills.title}</h2>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          ${locale.skillsList.map(
            (item) => html`
              <li
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                key=${item}
              >
                ${item}
              </li>
            `
          )}
        </ul>
      </article>

      <article data-reveal="" data-reveal-delay="110" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-sky-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.personal.eyebrow}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.personal.title}</h2>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">${locale.personal.body}</p>
      </article>
    </section>
  `;
}
