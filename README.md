<h1 align="center">
  Spin 🍭
</h1>

<p align="center">
  <strong>Beautifully animated backgrounds</strong>
</p>

- 🤩 Easy to use and fully customizable
- 🐛 Tiny (<1kb min+gzip) footprint with no runtime dependencies

## Installation

From a CDN:

```js
import { SpinBg } from "https://esm.sh/gh/andreasphil/spin@<tag>";
```

With a package manager:

```sh
npm i github:andreasphil/spin#<tag>
```

## Usage

Import the component and define it:

```js
import { SpinBg } from "@andreasphil/spin";

SpinBg.define();
```

After that, the component will be available in HTML:

```html
<!-- Align animation at the bottom of the container, you can also use `top` instead -->
<spin-bg bottom></spin-bg>
```

Spin comes with sensible defaults, but everything can be customized:

```css
spin-bg {
  --spin-height: 50dvh; /* default: 100dvh */

  /* Shared settings for all animated parts */
  &::part(wheel) {
    /* ... */
  }

  /* Left animated part */
  &::part(wheel wheel-1) {
    /* ... */
  }

  /* Right animated part */
  &::part(wheel wheel-2) {
    /* ... */
  }
}
```

For the wheels, the following properties can be configured:

| Property                  | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| `--spin-animation-offset` | Start the animation at the specified percentage (e.g. `0.5` for `50%`)        |
| `--spin-color`            | Color of the wheel. Looks best when using OKLCH!                              |
| `--spin-fade`             | Amount of transparency applied to the color (e.g. `30%`)                      |
| `--spin-radius`           | Radius of the wheel.                                                          |
| `--spin-speed`            | Speed of the animation. Looks best if the values are different for the wheels |
| `--spin-start-pos`        | Starting position of the wheel                                                |
| `--spin-travel`           | Distance of the movement                                                      |

## Development

This library is built with [esbuild](https://esbuild.github.io). Packages are managed by [npm](https://npmjs.org). The following commands are available:

```sh
node --run dev          # Build the library and serve index.html in watch mode
node --run build        # Typecheck, emit declarations and bundle
```

## Credits

This library uses a number of open source packages listed in [package.json](package.json).

Thanks 🙏
