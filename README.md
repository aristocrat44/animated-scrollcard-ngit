# React + TypeScript + Vite

This is an assignment done by Atish Maharjan for NGIT Solutions

## Installation

- Yarn add or npm i `animated-scrollcard-ngit`.
- Import the <AnimatedScrollCard /> component to your application for normal scrollable component.
- Import the <AnimatedScrollCardCarousel /> component for animated draggable vertical carousel.
- In order to import the tailwind CSS properties of the component you can either:

  1. `import "/node_modules/animated-scrollcard-ngit/dist/index.css"` into your main file;
  2. OR add the link `<link
  rel="stylesheet"
  href="node_modules/animated-scrollcard-ngit/dist/scrollcard.css"
/>` in index.html file.

- For tailwind css properties to be placed inside the dist folder, the only way is to copy it. Building the application AFTER copying the css file to dist folder; removes the css file. So css file must be copied only after successful build. `prepare` script is configured to do so.
- By default 20 numbers of cards are rendered. If you want to change, you can passed the desired number into `numberOfCards` props.
