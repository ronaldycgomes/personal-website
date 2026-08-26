import React from "react";
import htm from "htm";
import { LogoBadge } from "./ui/LogoBadge.js";

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
                  <h3 className="text-[1.08rem]">${school.name}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">${school.course}</p>
                  <span className="mt-2 block text-slate-500 dark:text-slate-300">${school.period}</span>
                </div>
              </article>
            `
          )}
        </div>
      </article>

      <article data-reveal="" data-reveal-delay="110" className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="max-w-[54rem]">
          <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.certs.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.certs.title}</h2>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          ${locale.certsList.map(
            (item) => html`
              <li
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                key=${item}
              >
                ${item}
              </li>
            `
          )}
        </ul>
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
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
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
