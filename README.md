# Phoenix - Low-Code Building System

**⚠️ Under development, not available yet.**

Try to implement low-code using AI (Full-Stack)

## 📚 快速开始

如果你是第一次接触这个项目，建议按以下顺序阅读文档：

1. **[快速上手指南](./docs/QUICK_START.md)** - 5分钟了解项目架构和开发流程
2. **[项目背景](./docs/PROJECT_BACKGROUND.md)** - 详细的项目架构设计和开发规范
3. **[开发规范](./.cursor/rules/)** - 编码规范和技术标准

## 🚀 Project Structure

```
phoenix/
├── apps/                    # Applications directory
│   ├── dashboard/          # Dashboard application (Next.js)
│   ├── editor/             # Low-code editor application (Next.js)
│   └── www/                # Public website application (Nuxt.js)
├── packages/               # Packages directory
│   ├── generator/          # Code generator
│   ├── setting-form/       # Setting form component
│   └── wrapper/            # Wrapper component
├── servers/                # Backend services directory
│   └── builder/            # Low-code builder backend service
├── .husky/                 # Git hooks configuration
├── .vscode/               # VS Code configuration
├── package.json           # Root package configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── turbo.json             # Turbo build configuration
└── lerna.json             # Lerna configuration
```

## 📦 Core Packages

### Apps

#### Frontend Applications

- **dashboard** (`phoenix-dashboard`): Dashboard application built with Next.js 15 and React 19, providing administrative interface for the low-code platform
- **editor** (`phoenix-editor`): Low-code editor application built with Next.js 15 and React 19, the core visual editor for building applications
- **www** (`phoenix-www`): Public website application built with Nuxt.js 4 and Vue 3, serving as the main landing page and documentation site

#### Technology Stack by Application

| Application | Framework | Language | UI Library | Purpose |
|-------------|-----------|----------|------------|---------|
| dashboard | Next.js 15 | TypeScript | React 19 | Admin Dashboard |
| editor | Next.js 15 | TypeScript | React 19 | Low-Code Editor |
| www | Nuxt.js 4 | TypeScript | Vue 3 | Public Website |

### Packages

- **@e.fe/phoenix-generator**: Code generator responsible for generating code based on configurations
- **@e.fe/phoenix-setting-form**: Setting form component providing unified form configuration interface
- **@e.fe/phoenix-wrapper**: Wrapper component providing component wrapping and enhancement functionality

### Servers

- **builder**: Backend service for the low-code building system, built with NestJS

## 🛠️ Tech Stack

### Frontend Technologies
- **Next.js 15**: React framework for production
- **Nuxt.js 4**: Vue framework for production
- **React 19**: UI library for Next.js applications
- **Vue 3**: UI library for Nuxt.js applications
- **TypeScript**: Programming language
- **Tailwind CSS**: Utility-first CSS framework

### Backend Technologies
- **NestJS**: Progressive Node.js framework
- **TypeScript**: Programming language

### Development Tools
- **pnpm**: Fast, disk space efficient package manager
- **Turbo**: High-performance build system
- **ESLint**: Code linting

## 🚀 Quick Start

### Requirements

- Node.js >= 18
- pnpm >= 10

### Install Dependencies

```bash
pnpm install
```

### Development Mode

```bash
# Start all applications and services
pnpm dev

# Start specific applications
pnpm dev --filter=dashboard
pnpm dev --filter=editor
pnpm dev --filter=www

# Start specific services
pnpm dev --filter=builder
```

### Build

```bash
# Build all packages, applications and services
pnpm build

# Build specific applications
pnpm build --filter=dashboard
pnpm build --filter=editor
pnpm build --filter=www

# Build specific packages
pnpm build --filter=@e.fe/phoenix-generator

# Build specific services
pnpm build --filter=builder
```

## 📝 Development Guide

### Adding New Applications

#### Next.js Applications
Create new Next.js applications in the `apps` directory:

```bash
npx create-next-app@latest apps/your-app-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

#### Nuxt.js Applications
Create new Nuxt.js applications in the `apps` directory:

```bash
npx nuxi@latest init apps/your-app-name
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

- Application packages: Use application name directly (e.g., `phoenix-dashboard`)
- Feature packages: Use `@e.fe/phoenix-{package-name}` format
- Service packages: Use service name directly
