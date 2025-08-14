# SCSS Organization Guide

## Overview

This project uses a modular SCSS architecture where each component has its own SCSS file, and common styles are organized into utility files.

## File Structure

```
src/styles/
├── index.scss              # Main entry point - imports all styles
├── globals.scss            # Global styles (CSS variables, base styles, scrollbar)
├── layout.scss             # Layout utilities (spacing, containers, grids)
├── typography.scss         # Typography classes (headings, text styles)
├── utilities.scss          # Utility classes (icons, responsive, animations)
├── animations.scss         # Custom animations and keyframes
└── components/             # Component-specific styles
    ├── sections/           # Section component styles
    │   ├── hero-section.scss
    │   └── contact-section.scss
    ├── ui/                 # UI component styles
    │   ├── button.scss
    │   ├── card.scss
    │   └── input.scss
    └── common/             # Common component styles
        └── header.scss
```

## Usage

### Adding New Component Styles

1. Create a new `.scss` file in the appropriate component directory
2. Import it in the component file: `import './component-name.scss'`
3. Add the import to `src/styles/index.scss`

### Adding New Utility Styles

1. Create or update the appropriate utility file (e.g., `layout.scss`, `typography.scss`)
2. The styles will be automatically available through `index.scss`

### Global Styles

-   Use `globals.scss` only for truly global styles:
    -   CSS custom properties (variables)
    -   Base element styles (body, html)
    -   Scrollbar styles
    -   Print styles

### Component Styles

-   Each component should have its own SCSS file
-   Use descriptive class names that match the component
-   Import the SCSS file directly in the component

## Best Practices

1. **Modularity**: Keep styles scoped to their components
2. **Naming**: Use BEM methodology or similar for class naming
3. **Tailwind**: Leverage Tailwind utilities with `@apply` when possible
4. **Variables**: Use CSS custom properties for theme values
5. **Responsive**: Use Tailwind's responsive prefixes (md:, lg:)

## Example

```scss
// src/components/ui/button.scss
.btn-primary {
    @apply bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg;

    &:hover {
        @apply bg-blue-700;
    }
}
```

```tsx
// src/components/ui/button.tsx
import "./button.scss";

export const Button = ({ children, className }) => <button className={`btn-primary ${className}`}>{children}</button>;
```
