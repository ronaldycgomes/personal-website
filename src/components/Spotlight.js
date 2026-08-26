import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function Spotlight({ overview }) {
  return html`
    <section className="py-7">
      <article data-reveal="" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-8">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${overview.eyebrow}</p>
        <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${overview.title}</h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">${overview.body}</p>
      </article>
    </section>
  `;
}
