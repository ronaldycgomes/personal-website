import React, { useState } from "react";
import htm from "htm";
import { ContactIcon } from "./ui/ContactIcon.js";

const html = htm.bind(React.createElement);

const copySvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

export function Contact({ contacts }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (label, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(label);
        setTimeout(() => setCopiedKey(null), 2000);
      });
    }
  };

  return html`
    <section className="py-7" id="contact">
      <article data-reveal="" className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${contacts.eyebrow}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94]">${contacts.ctaTitle}</h2>
        <div className="mt-5 grid gap-3">
          ${contacts.items.map(
            (item) => {
              const isCopied = copiedKey === item.label;
              const canCopy = item.icon === "email" || item.icon === "phone" || item.icon === "whatsapp";

              return html`
                <div
                  className="flex items-center gap-3 border-b border-slate-200/70 py-3 last:border-b-0 last:pb-0 dark:border-white/10"
                  key=${item.label}
                >
                  <${ContactIcon} icon=${item.icon} />
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-300">${item.label}</span>
                    <div className="flex items-center gap-2">
                      <a
                        className="truncate text-sm no-underline hover:underline text-slate-900 dark:text-slate-100"
                        href=${item.href}
                        target=${item.href.startsWith("http") ? "_blank" : null}
                        rel=${item.href.startsWith("http") ? "noopener noreferrer" : null}
                      >
                        ${item.value}
                      </a>
                      ${canCopy
                        ? html`
                            <button
                              type="button"
                              onClick=${() => handleCopy(item.label, item.value)}
                              aria-label=${`Copiar ${item.label}`}
                              title=${isCopied ? "Copiado!" : `Copiar ${item.label}`}
                              className=${`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-all ${
                                isCopied
                                  ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                  : "text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200"
                              }`}
                            >
                              <span
                                aria-hidden="true"
                                dangerouslySetInnerHTML=${{ __html: isCopied ? checkSvg : copySvg }}
                              />
                              <span className="text-[11px]">${isCopied ? "Copiado!" : "Copiar"}</span>
                            </button>
                          `
                        : null}
                    </div>
                  </div>
                </div>
              `;
            }
          )}
        </div>
      </article>
    </section>
  `;
}
