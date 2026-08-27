import React from "react";
import htm from "htm";
import { ToggleGroup } from "./ui/ToggleGroup.js?v=29";
import { navLinks } from "../data/navigation.js";

const html = htm.bind(React.createElement);

export function Header({ locale, lang, setLang, themePreference, setThemePreference, activeSection }) {
  return html`
    <header className="sticky top-3 z-30 mb-6 rounded-[24px] border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:top-4 sm:rounded-[28px] sm:px-4 sm:py-3 md:rounded-full">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <a className="inline-flex shrink-0 items-center gap-2 sm:gap-3 no-underline" href="#hero">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-cyan-900 text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
            RG
          </span>
          <span className="hidden sm:inline font-bold tracking-[0.02em]">${locale.brand}</span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          ${navLinks[lang].map(
            (link) => html`
              <a
                key=${link.href}
                href=${link.href}
                className=${`text-sm no-underline transition-colors ${
                  link.href === "#" + activeSection
                    ? "font-semibold text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                ${link.label}
              </a>
            `
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <${ToggleGroup}
            label=${lang === "pt" ? "Selecionar idioma" : "Select language"}
            options=${[
              { label: "\uD83C\uDDE7\uD83C\uDDF7 PT", value: "pt", ariaLabel: "Português" },
              { label: "\uD83C\uDDFA\uD83C\uDDF8 EN", value: "en", ariaLabel: "English" }
            ]}
            value=${lang}
            onChange=${setLang}
          />
          <${ToggleGroup}
            label=${lang === "pt" ? "Selecionar tema" : "Select theme"}
            options=${[
              { label: "Auto", value: "auto", ariaLabel: lang === "pt" ? "Tema Automático" : "Auto Theme" },
              { label: "Light", value: "light", ariaLabel: lang === "pt" ? "Tema Claro" : "Light Theme" },
              { label: "Dark", value: "dark", ariaLabel: lang === "pt" ? "Tema Escuro" : "Dark Theme" }
            ]}
            value=${themePreference}
            onChange=${setThemePreference}
          />
        </div>
      </div>

      <nav className="-mx-1 mt-2 flex overflow-x-auto px-1 pb-0.5 md:hidden" style=${{ scrollbarWidth: "none" }}>
        ${navLinks[lang].map(
          (link) => html`
            <a
              key=${link.href}
              href=${link.href}
              className=${`mr-1 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium no-underline transition-colors sm:px-3 sm:py-1.5 sm:text-sm ${
                link.href === "#" + activeSection
                  ? "bg-slate-900 text-white dark:bg-white/15 dark:text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
              }`}
            >
              ${link.label}
            </a>
          `
        )}
      </nav>
    </header>
  `;
}
