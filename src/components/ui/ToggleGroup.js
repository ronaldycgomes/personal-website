import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function ToggleGroup({ options, value, onChange, label }) {
  return html`
    <div
      role="group"
      aria-label=${label || "Opções"}
      className="inline-flex w-auto shrink-0 rounded-full border border-slate-200/90 bg-white/95 p-0.5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-1"
    >
      ${options.map(
        (option) => html`
          <button
            key=${option.value}
            aria-pressed=${value === option.value ? "true" : "false"}
            aria-label=${option.ariaLabel || (typeof option.label === "string" ? option.label : option.value)}
            className=${`rounded-full px-2 py-1 text-xs font-medium transition sm:px-3 sm:py-1.5 sm:text-sm ${
              value === option.value
                ? "bg-slate-900 text-white shadow-xs dark:bg-white/15 dark:text-white"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
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
