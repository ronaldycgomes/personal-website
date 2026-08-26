import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function Metrics({ metrics }) {
  return html`
    <section className="grid gap-6 py-7 md:grid-cols-3">
      ${metrics.map(
        (metric, i) => html`
          <article
            data-reveal=""
            data-reveal-delay=${i * 80}
            className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px]"
            key=${metric.label}
          >
            <span className="mb-2 block text-sm text-slate-500 dark:text-slate-300">${metric.label}</span>
            <strong className="block text-[1.08rem] leading-7">${metric.value}</strong>
          </article>
        `
      )}
    </section>
  `;
}
