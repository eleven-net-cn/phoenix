# @phoenix/shared-unocss

Phoenix UnoCSS design system and configuration package.

## Installation

```bash
pnpm add @phoenix/shared-unocss
```

## Usage

### Basic Configuration

```typescript
import { defineConfig } from 'unocss';
import { baseUnoConfig } from '@phoenix/shared-unocss';

export default defineConfig({
  ...baseUnoConfig,
  // Your app-specific configuration
});
```

### Design Tokens

```typescript
import { defineConfig } from 'unocss';
import { designTokens } from '@phoenix/shared-unocss';

export default defineConfig({
  theme: {
    colors: designTokens.colors,
    spacing: designTokens.spacing,
    borderRadius: designTokens.borderRadius,
    fontSize: designTokens.fontSize,
    fontWeight: designTokens.fontWeight,
    lineHeight: designTokens.lineHeight,
    boxShadow: designTokens.boxShadow,
  },
});
```

### Subpath Exports

```typescript
// Import only configuration
import { baseUnoConfig } from '@phoenix/shared-unocss/config';

// Import only design tokens
import { designTokens } from '@phoenix/shared-unocss/tokens';
```

### In Components

```typescript
// React/Next.js
import { designTokens } from '@phoenix/shared-unocss';

const MyComponent = () => {
  const primaryColor = designTokens.colors.primary[500];
  const spacing = designTokens.spacing.md;

  return (
    <div
      className="un-px-4 un-py-2 un-bg-primary-500 un-text-white un-rounded-md un-shadow-sm"
      style={{
        backgroundColor: primaryColor,
        padding: `${spacing} ${spacing * 2}px`
      }}
    >
      Click me
    </div>
  );
};
```

```vue
<!-- Vue/Nuxt.js -->
<script setup lang="ts">
import { designTokens } from '@phoenix/shared-unocss';

const primaryColor = designTokens.colors.primary[500];
const spacing = designTokens.spacing.md;
</script>

<template>
  <button
    class="un-px-4 un-py-2 un-bg-primary-500 un-text-white un-rounded-md un-shadow-sm"
    :style="{
      backgroundColor: primaryColor,
      padding: `${spacing} ${spacing * 2}px`
    }"
  >
    Click me
  </button>
</template>
```

### Mixed Configuration

```typescript
import { defineConfig } from 'unocss';
import { baseUnoConfig, designTokens } from '@phoenix/shared-unocss';

export default defineConfig({
  ...baseUnoConfig,
  theme: {
    ...baseUnoConfig.theme,
    // Extend or override design tokens
    colors: {
      ...designTokens.colors,
      custom: {
        100: '#f0f9ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
    },
  },
  // Add app-specific rules
  rules: [
    ...baseUnoConfig.rules,
    ['custom-rule', { color: 'red' }],
  ],
});
```

## Design Tokens

### Colors

- **Primary**: Blue-based color system (50-900)
- **Success**: Green (#52c41a)
- **Warning**: Yellow (#faad14)
- **Error**: Red (#ff4d4f)
- **Info**: Blue (#1890ff)
- **Gray**: Neutral colors (50-900)

### Spacing

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **xxl**: 48px

### Typography

- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Font Weights**: light, normal, medium, semibold, bold
- **Font Families**: sans, mono

## Shortcuts

The package includes many useful shortcuts:

### Layout Shortcuts
- `un-flex-center` - Center alignment
- `un-flex-between` - Space between alignment
- `un-flex-col-center` - Vertical center alignment
- `un-flex-col-between` - Vertical space between alignment

### Spacing Shortcuts
- `un-space-x-xs/sm/md/lg/xl/xxl` - Horizontal spacing
- `un-space-y-xs/sm/md/lg/xl/xxl` - Vertical spacing

### Form Shortcuts
- `un-form-group` - Form group
- `un-form-label` - Form label
- `un-form-input` - Form input
- `un-form-textarea` - Form textarea
- `un-form-select` - Form select

### State Shortcuts
- `un-state-hover` - Hover state
- `un-state-active` - Active state
- `un-state-disabled` - Disabled state
- `un-state-focus` - Focus state

### Text Shortcuts
- `un-text-primary` - Primary text
- `un-text-success` - Success text
- `un-text-warning` - Warning text
- `un-text-error` - Error text
- `un-text-muted` - Muted text

### Background Shortcuts
- `un-bg-primary` - Primary background
- `un-bg-success` - Success background
- `un-bg-warning` - Warning background
- `un-bg-error` - Error background
- `un-bg-muted` - Muted background

### Animation Shortcuts
- `un-transition-fast` - Fast transition
- `un-transition-normal` - Normal transition
- `un-transition-slow` - Slow transition

### Shadow Shortcuts
- `un-shadow-sm` - Small shadow
- `un-shadow-md` - Medium shadow
- `un-shadow-lg` - Large shadow
- `un-shadow-xl` - Extra large shadow

## Component Examples

### React/Next.js Components

```tsx
import React from 'react';

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="un-card">
      <div className="un-card-header">
        <h3 className="un-text-lg un-font-semibold un-text-gray-900">{title}</h3>
      </div>
      <div className="un-card-body">
        {children}
      </div>
    </div>
  );
};

const Button = ({ variant = 'primary', children, ...props }: any) => {
  const baseClasses = 'un-btn un-transition-normal';
  const variantClasses = {
    primary: 'un-btn-primary',
    secondary: 'un-btn-secondary',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="un-layout-container">
      <div className="un-space-y-md">
        {children}
      </div>
    </div>
  );
};
```

### Vue/Nuxt.js Components

```vue
<template>
  <div class="un-layout-container">
    <div class="un-space-y-md">
      <Card title="Welcome">
        <p class="un-text-muted">This is a sample card using Phoenix UnoCSS.</p>
        <div class="un-space-x-sm">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { designTokens } from '@phoenix/shared-unocss';

const primaryColor = designTokens.colors.primary[500];
</script>
```

## Best Practices

1. **Use Shortcuts**: Prefer predefined shortcuts like `un-flex-center`, `un-space-x-md`, etc.
2. **Follow Design System**: Use semantic color names like `un-bg-primary-500`, `un-text-success`, etc.
3. **Responsive Design**: Use responsive prefixes like `md:un-text-lg`, `lg:un-grid-cols-3`, etc.
4. **State Management**: Use state shortcuts like `un-state-hover`, `un-state-active`, etc.
5. **Consistent Spacing**: Use standardized spacing ratios like `un-space-x-md`, `un-p-lg`, etc.

## Development

```bash
# Build the package
pnpm build

# Watch for changes
pnpm dev

# Clean build artifacts
pnpm clean
```
