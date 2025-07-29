# Phoenix - Low-Code Building System

**⚠️ Under development, not available yet.**

Try to implement low-code using AI (Full-Stack)

## 🚀 Project Structure

```
phoenix/
├── apps/                    # Applications directory
│   └── editor/             # Low-code editor frontend application
├── packages/               # Packages directory
│   ├── generator/          # Code generator
│   ├── setting-form/       # Setting form component
│   └── wrapper/            # Wrapper component
├── servers/                # Backend services directory
│   ├── builder/            # Low-code builder backend service
│   └── material/           # Material management backend service
├── .husky/                 # Git hooks configuration
├── .vscode/               # VS Code configuration
├── package.json           # Root package configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── turbo.json             # Turbo build configuration
└── lerna.json             # Lerna configuration
```

## 📦 Core Packages

### Apps

- **editor**: Frontend editor application for the low-code building system, built with Next.js

### Packages

- **@e.fe/phoenix-generator**: Code generator responsible for generating code based on configurations
- **@e.fe/phoenix-setting-form**: Setting form component providing unified form configuration interface
- **@e.fe/phoenix-wrapper**: Wrapper component providing component wrapping and enhancement functionality

### Servers

- **builder**: Backend service for the low-code building system, built with NestJS
- **material**: Material management service for component and asset management, built with NestJS

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15
- **Backend Framework**: NestJS
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Build Tool**: Turbo
- **Code Linting**: ESLint
- **Git Hooks**: Husky

## 🚀 Quick Start

### Requirements

- Node.js >= 18
- pnpm >= 8

### Install Dependencies

```bash
pnpm install
```

### Development Mode

```bash
# Start all applications and services
pnpm dev

# Start specific application
pnpm dev --filter=editor

# Start specific service
pnpm dev --filter=builder
pnpm dev --filter=material
```

### Build

```bash
# Build all packages, applications and services
pnpm build

# Build specific package
pnpm build --filter=@e.fe/phoenix-generator

# Build specific service
pnpm build --filter=builder
pnpm build --filter=material
```

## 📝 Development Guide

### Adding New Applications

Create new Next.js applications in the `apps` directory:

```bash
npx create-next-app@latest apps/your-app-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

### Adding New Packages

Create new packages in the `packages` directory, following the existing package format:

```bash
mkdir -p packages/your-package-name/src
```

### Adding New Services

Create new NestJS services in the `servers` directory:

```bash
npx @nestjs/cli@latest new servers/your-service-name --package-manager pnpm --skip-git --skip-install
```

### Package Naming Convention

- Application packages: Use application name directly
- Feature packages: Use `@e.fe/phoenix-{package-name}` format
- Service packages: Use service name directly

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
