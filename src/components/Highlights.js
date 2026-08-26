import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function Highlights({ highlights }) {
  return html`
    <section className="py-7">
      <div className="max-w-[54rem]">
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${highlights.eyebrow}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${highlights.title}</h2>
      </div>
      <div className="mt-6 grid gap-[18px] lg:grid-cols-4">
        ${highlights.items.map(
          (item, i) => html`
            <article
              data-reveal=""
              data-reveal-delay=${i * 90}
              className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-[22px]"
              key=${item.title}
            >
              <div className="mb-3 text-2xl">${item.icon}</div>
              <h3 className="text-[1.08rem]">${item.title}</h3>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">${item.body}</p>
            </article>
          `
        )}
      </div>
    </section>
  `;
}
