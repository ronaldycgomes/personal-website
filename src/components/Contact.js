import React from "react";
import htm from "htm";
import { ContactIcon } from "./ui/ContactIcon.js";

const html = htm.bind(React.createElement);

export function Contact({ contacts }) {
  return html`
    <section className="py-7" id="contact">
      <article data-reveal="" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${contacts.eyebrow}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${contacts.ctaTitle}</h2>
        <div className="mt-5 grid gap-3">
          ${contacts.items.map(
            (item) => html`
              <div
                className="flex items-center gap-3 border-b border-slate-200/70 py-3 last:border-b-0 last:pb-0 dark:border-white/10"
                key=${item.label}
              >
                <${ContactIcon} icon=${item.icon} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-300">${item.label}</span>
                  <a
                    className="truncate text-sm"
                    href=${item.href}
                    target=${item.href.startsWith("http") ? "_blank" : null}
                    rel=${item.href.startsWith("http") ? "noopener noreferrer" : null}
                  >
                    ${item.value}
                  </a>
                </div>
              </div>
            `
          )}
        </div>
      </article>
    </section>
  `;
}
