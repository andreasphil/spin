function t(s,...e){let n=document.createElement("template");return n.innerHTML=String.raw({raw:s},...e),n.content.cloneNode(!0)}var i=class extends HTMLElement{static define(e="spin-bg"){if(!e)throw new Error("Custom element must specify a tag name");customElements.define(e,this)}constructor(){super();let e=this.attachShadow({mode:"closed"}),n=t`<style>
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
      <spin-wheel part="wheel wheel-2"></spin-wheel>`;CSS.registerProperty({name:"--spin-angle",syntax:"<angle>",inherits:!1,initialValue:"0deg"}),e.appendChild(n)}};export{i as SpinBg};
//# sourceMappingURL=spin.js.map
