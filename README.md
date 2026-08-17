# Niom Parts

Niom Parts is a lightweight React component library for building Niom-style interfaces with reusable atoms, molecules, and organisms.

## Features

- **React Components**: Reusable atoms, molecules, and organisms.
- **Table Organism**: Flexible table variants, color schemes, selection, pagination, sticky columns, and custom stripe colors.
- **Bundled Styles**: Component imports load the compiled styles automatically.

## Installation

To install the package, run:

```bash
npm install niom-parts
```

## Usage

Import and use the package in your project:

```javascript
import { Button } from "niom-parts";

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
```

The stylesheet entry is optional and remains available for CSS-only tooling or custom build pipelines:

```css
@import "niom-parts/style.css";
```

## Scripts

- `npm run dev`: Start the Docusaurus documentation website.
- `npm run playground`: Start the Vite component playground.
- `npm run test`: Run the component test suites.
- `npm run build`: Build the documentation website.
- `npm run build:package`: Test and build the npm package.

## License

This project is licensed under the MIT License.
