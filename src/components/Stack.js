import React from "react";
import htm from "htm";
import { TechPill } from "./ui/TechPill.js";

const html = htm.bind(React.createElement);

export function Stack({ locale }) {
  return html`
    <section className="grid gap-6 py-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]" id="stack">
      <div data-reveal="">
        <div className="max-w-[54rem]">
          <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.stack.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${locale.stack.title}</h2>
        </div>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">${locale.stack.intro}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        ${locale.stackGroups.map(
          (group, i) => html`
            <article
              data-reveal=""
              data-reveal-delay=${i * 80}
              className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7"
              key=${group.title}
            >
              <h3 className="text-[1.08rem]">${group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                ${group.items.map((item) => html`<${TechPill} key=${item} name=${item} />`)}
              </ul>
            </article>
          `
        )}
      </div>
    </section>
  `;
}
