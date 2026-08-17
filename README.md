# Niom Parts

Niom Parts is a lightweight React component library for building Niom-style interfaces with reusable atoms, molecules, and organisms.

## Features

- **React Components**: Reusable atoms, molecules, and organisms.
- **Table Organism**: Flexible table variants, color schemes, selection, pagination, sticky columns, and custom stripe colors.
- **Bundled Styles**: Import the package CSS once and use the components across your app.

## Installation

To install the package, run:

```bash
npm install niom-parts
```

## Usage

Import and use the package in your project:

```javascript
import { Button } from "niom-parts";
import "niom-parts/css/index.css";

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
```

You can also import the styles from CSS:

```css
@import "niom-parts/css/index.css";
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run test`: Run the unit and Storybook test suites.
- `npm run build`: Build the package for production.

## License

This project is licensed under the MIT License.
