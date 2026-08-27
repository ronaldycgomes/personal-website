import React, { useState } from "react";
import htm from "htm";
import { ContactIcon } from "./ui/ContactIcon.js";

const html = htm.bind(React.createElement);

const copySvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const externalLinkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

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
        
        <div className="mt-6 grid gap-2">
          ${contacts.items.map(
            (item) => {
              const isCopied = copiedKey === item.label;
              const isCopyable = item.icon === "email" || item.icon === "whatsapp";

              return html`
                <div
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-transparent p-2.5 transition-colors hover:border-slate-200/80 hover:bg-slate-50/60 dark:hover:border-white/10 dark:hover:bg-white/5 sm:p-3"
                  key=${item.label}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <${ContactIcon} icon=${item.icon} />
                    <div className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">${item.label}</span>
                      <a
                        className="truncate text-sm font-medium text-slate-900 no-underline transition-colors hover:text-orange-500 dark:text-slate-100 dark:hover:text-orange-400 sm:text-base"
                        href=${item.href}
                        target=${item.href.startsWith("http") ? "_blank" : null}
                        rel=${item.href.startsWith("http") ? "noopener noreferrer" : null}
                      >
                        ${item.value}
                      </a>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center pl-2">
                    ${isCopyable
                      ? html`
                          <button
                            type="button"
                            onClick=${() => handleCopy(item.label, item.value)}
                            aria-label=${isCopied ? `Copiado: ${item.value}` : `Copiar ${item.label}`}
                            title=${isCopied ? "Copiado!" : `Copiar ${item.label}`}
                            className=${`inline-flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                              isCopied
                                ? "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400 scale-110"
                                : "text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              dangerouslySetInnerHTML=${{ __html: isCopied ? checkSvg : copySvg }}
                            />
                          </button>
                        `
                      : html`
                          <a
                            href=${item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label=${`Acessar ${item.label}`}
                            title=${`Abrir ${item.label}`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-200/70 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200"
                          >
                            <span
                              aria-hidden="true"
                              dangerouslySetInnerHTML=${{ __html: externalLinkSvg }}
                            />
                          </a>
                        `}
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
