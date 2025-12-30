# Development Guide

Complete guide for developing and maintaining Sri Padmavati Venkateswara Swami Temple website.

## Table of Contents

- [Setup](#setup)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Component Development](#component-development)
- [State Management](#state-management)
- [Styling Guide](#styling-guide)
- [Testing](#testing)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## Setup

### Initial Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd padmavativenkateswara

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Start development server
npm run dev
```

### IDE Configuration

Recommended: **Visual Studio Code**

**Extensions:**
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier
- Thunder Client (for API testing)

## Development Workflow

### Starting Development

```bash
# Start dev server (runs on http://localhost:8080)
npm run dev

# In another terminal, run type checking
npm run type-check:watch
```

### Code Quality Checks

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Building

```bash
# Development build with sourcemaps
npm run build:dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/              # Layout components (Navigation, Footer)
│   ├── home/               # Homepage-specific components
│   └── ui/                 # shadcn/ui components
├── pages/                  # Page components (routed)
├── hooks/                  # Custom React hooks
├── lib/
│   └── utils.ts           # Utility functions
├── config/                # Configuration
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
├── assets/                # Static assets
├── App.tsx               # Root component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Coding Standards

### TypeScript

- Enable all strict checks
- Avoid `any` type - use proper types
- Export interfaces for component props
- Use meaningful type names

```typescript
// ✅ Good
interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  // ...
};

// ❌ Avoid
export const Navigation = (props: any) => {
  // ...
};
```

### React

- Use functional components with hooks
- Extract complex logic into custom hooks
- Avoid inline function definitions in render
- Use proper dependency arrays in useEffect

```typescript
// ✅ Good
export const Component = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect logic
  }, [state]); // Proper dependency array

  const handleClick = useCallback(() => {
    setState(true);
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};
```

### Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`)
- **Functions**: camelCase (`formatDate()`)
- **Constants**: UPPER_SNAKE_CASE (`NAV_LINKS`)
- **CSS classes**: kebab-case (Tailwind utilities)
- **Event handlers**: `on` prefix (`onClose`, `onClick`)

### Comments

```typescript
/**
 * Component description
 * @param prop1 - Description of prop1
 * @returns Description of return value
 */
export const MyComponent: React.FC<Props> = ({ prop1 }) => {
  // Implementation
};
```

## Component Development

### Creating a New Component

1. **Create component file** in appropriate directory
2. **Define TypeScript interface** for props
3. **Implement component** with proper typing
4. **Export component** as named export

```typescript
// src/components/MyComponent.tsx

import { ReactNode } from "react";

interface MyComponentProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
```

### Component Organization

- Keep components focused and single-responsibility
- Extract smaller sub-components when needed
- Use composition over inheritance
- Prop drilling: limit to 2-3 levels, use context for deeper nesting

## State Management

### Local State

Use `useState` for local component state:

```typescript
const [isOpen, setIsOpen] = useState(false);
```

### Side Effects

Use `useEffect` with proper cleanup:

```typescript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### API Queries

Use React Query for server state:

```typescript
import { useQuery } from "@tanstack/react-query";

export const MyComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: () => fetch("/api/events").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return <div>{/* Render data */}</div>;
};
```

## Styling Guide

### Tailwind CSS

- Use utility classes for styling
- Create custom components in `@layer components`
- Avoid inline styles
- Use CSS variables for custom colors

```tsx
// ✅ Good
<button className="px-4 py-2 bg-maroon text-gold rounded-lg hover:bg-maroon-dark transition-colors">
  Click me
</button>

// ❌ Avoid
<button style={{ padding: "8px 16px", backgroundColor: "#4a1a2a" }}>
  Click me
</button>
```

### Custom CSS

Add custom styles in `index.css`:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-maroon text-gold rounded-lg hover:bg-maroon-dark transition-colors;
  }
}
```

### Dark Mode

Styles update automatically in dark mode:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

## Testing

### Types of Tests

- **Unit Tests**: Component logic
- **Integration Tests**: Component interactions
- **E2E Tests**: User workflows

### Running Tests

```bash
# Run tests (when testing is configured)
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Performance

### Best Practices

1. **Code Splitting**: Use React.lazy() for routes
2. **Image Optimization**: Use appropriate formats and sizes
3. **Memoization**: Use React.memo() for expensive components
4. **Bundle Analysis**: Monitor bundle size

```bash
# Build and preview
npm run build
npm run preview
```

### Performance Checklist

- [ ] Images optimized and lazy-loaded
- [ ] No unnecessary re-renders
- [ ] Event listeners cleaned up
- [ ] API requests debounced/throttled
- [ ] Large lists virtualized
- [ ] Unused code removed

## Troubleshooting

### Development Server Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### TypeScript Errors

```bash
# Type check
npm run type-check

# Fix errors in IDE or use eslint
npm run lint:fix
```

### Build Errors

```bash
# Check for linting issues
npm run lint

# Type check
npm run type-check

# Clear build cache
rm -rf dist
npm run build
```

### Port Already in Use

The dev server will automatically use the next available port. Or specify a port:

```bash
# Use port 3000 instead
npm run dev -- --port 3000
```

## Git Workflow

### Branch Naming

```
feature/component-name
fix/bug-description
docs/documentation-update
```

### Commit Messages

```
feat: Add new Hero section component
fix: Resolve navigation logo alignment issue
docs: Update README with setup instructions
style: Format code with prettier
refactor: Extract common utilities
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Query Docs](https://tanstack.com/query/latest)
- [Framer Motion Docs](https://www.framer.com/motion)

---

**Last Updated**: December 2025
