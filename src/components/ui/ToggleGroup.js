import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function ToggleGroup({ options, value, onChange, label }) {
  return html`
    <div
      role="group"
      aria-label=${label || "Opções"}
      className="inline-flex w-auto rounded-full border border-slate-200/90 bg-white/95 p-1 shadow-sm dark:border-white/10 dark:bg-white/5"
    >
      ${options.map(
        (option) => html`
          <button
            key=${option.value}
            aria-pressed=${value === option.value ? "true" : "false"}
            aria-label=${option.ariaLabel || option.label}
            className=${`rounded-full px-3 py-2 text-sm transition ${
              value === option.value
                ? "bg-slate-900 text-white dark:bg-[#ff9464]/15 dark:text-white"
                : "text-slate-600 dark:text-slate-300"
            }`}
            type="button"
            onClick=${() => onChange(option.value)}
          >
            ${option.label}
          </button>
        `
      )}
    </div>
  `;
}
