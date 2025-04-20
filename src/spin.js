// Utils --------------------------------------------------

/**
 * @param {TemplateStringsArray} strings
 * @param {unknown[]} values
 * @returns {Node}
 */
function html(strings, ...values) {
  const el = document.createElement("template");
  el.innerHTML = String.raw({ raw: strings }, ...values);
  return el.content.cloneNode(true);
}

// Main ---------------------------------------------------

export class SpinBg extends HTMLElement {
  /**
   * Registers the component as a custom element. For compatibility, you can
   * provide a tag name, otherwise the tag name will default to `spin-bg`.
   *
   * @param {string} [tag]
   */
  static define(tag = "spin-bg") {
    if (!tag) throw new Error("Custom element must specify a tag name");

    customElements.define(tag, this);
  }

  constructor() {
    super();

    const root = this.attachShadow({ mode: "closed" });

    const template = html`<style>
        @keyframes spin {
          100% {
            --spin-angle: 360deg;
          }
        }

        :host {
          container: spin-container / inline-size;
          display: block;
          overflow: hidden;
          position: relative;
          height: var(--spin-height, 100dvh);
        }

        :host([top]) spin-wheel {
          top: calc(var(--spin-radius) * -1);
        }

        :host([bottom]) spin-wheel {
          bottom: calc(var(--spin-radius) * -1);
        }

        spin-wheel {
          --spin-radius: calc(100cqh / 2 + 250px);

          animation: var(--spin-speed) spin linear infinite normal;
          animation-delay: calc(var(--spin-speed) * var(--spin-animation-offset, 0) * -1);
          aspect-ratio: 1;
          border-radius: 100%;
          height: calc((var(--spin-radius) * 2));
          left: var(--spin-start-pos);
          position: absolute;
          translate: calc(sin(var(--spin-angle)) * var(--spin-travel, 25cqw)) 0;

          background: radial-gradient(
            circle closest-side,
            color-mix(in oklch, var(--spin-color), transparent var(--spin-fade, 30%)) 0%,
            transparent 100%
          );

          &:nth-of-type(1) {
            --spin-color: oklch(0.82 0.17046 77.4296);
            --spin-speed: 20s;
            --spin-start-pos: calc(40cqw - var(--spin-radius));
          }

          &:nth-of-type(2) {
            --spin-animation-offset: 0.5;
            --spin-color: oklch(0.57 0.2195 11.33);
            --spin-speed: 16s;
            --spin-start-pos: calc(60cqw - var(--spin-radius));
          }
        }
      </style>

      <spin-wheel part="wheel wheel-1"></spin-wheel>
      <spin-wheel part="wheel wheel-2"></spin-wheel>`;

    // Using @property in CSS in shadow DOM doesn't work, so we need to do it
    // manually, see https://stackoverflow.com/a/79037671
    CSS.registerProperty({
      name: "--spin-angle",
      syntax: "<angle>",
      inherits: false,
      initialValue: "0deg",
    });

    root.appendChild(template);
  }
}
