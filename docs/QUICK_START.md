# Phoenix 低代码搭建系统 - 快速上手指南

## 🚀 5分钟快速了解

### 项目定位
Phoenix 是一个**全栈低代码搭建系统**，支持用户通过拖拽方式快速构建 Web 应用。

### 核心架构
```
用户操作 → Editor编辑器 → Schema配置 → Generator生成器 → 应用代码 → Builder构建服务 → 部署
```

### 技术栈
- **前端**: React 19 + NextJS 15 (Dashboard/Editor) + Vue 3 + NuxtJS 4 (WWW)
- **后端**: NestJS + TypeScript
- **构建**: pnpm + Turbo + Lerna
- **样式**: UnoCSS (前缀: un-)

## 📁 关键目录结构

```
phoenix/
├── apps/                    # 前端应用
│   ├── dashboard/          # 工作台 (NextJS + React)
│   ├── editor/             # 编辑器 (NextJS + React)
│   └── www/                # 主站 (NuxtJS + Vue)
├── packages/               # 核心类库
│   ├── generator/          # 代码生成器
│   ├── setting-form/       # 表单SDK
│   └── wrapper/            # 组件包裹层
├── servers/                # 后端服务
│   └── builder/            # 构建服务 (NestJS)
├── material/               # 物料组件库
└── shared/                 # 共享配置
```

## 🎯 核心概念

### 1. 物料 (Material)
可复用的组件，包含组件代码、配置表单、文档说明。

### 2. 模板 (Template)
预定义的应用结构，包含页面布局、组件配置、数据模型。

### 3. 应用 (Application)
用户构建的最终产物，通过 Schema 配置描述。

### 4. Schema 配置
JSON 格式的应用结构描述，包含页面信息、组件树、数据模型。

## 🛠️ 开发环境搭建

### 1. 环境要求
- Node.js >= 18
- pnpm >= 10

### 2. 安装依赖
```bash
pnpm install
```

### 3. 启动开发环境
```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm dev --filter=dashboard    # 工作台
pnpm dev --filter=editor       # 编辑器
pnpm dev --filter=www          # 主站
pnpm dev --filter=builder      # 构建服务
```

## 📋 开发规范速查

### TypeScript 规范
- 严格类型定义，避免使用 `any`
- 组件 Props 使用 `interface` 定义
- 工具类型使用 `type` 定义
- 路径别名：`@/` 映射到 `src/`

### Vue 开发规范
- 使用 `<script setup>` 语法
- 优先使用 Composition API
- Hooks 命名：`use` + camelCase
- 文件结构：script/template/style

### React 开发规范
- 函数组件 + Hooks
- 严格 TypeScript 类型
- 单一职责原则

### 样式规范
- 优先使用 UnoCSS
- 自定义前缀：`un-`
- 间距：`un-space-x-` / `un-space-y-`

## 🔧 核心模块开发指南

### 1. 开发 Dashboard (工作台)
```bash
cd apps/dashboard
pnpm dev
```
**功能**: 应用管理、模板管理、物料市场、用户管理

### 2. 开发 Editor (编辑器)
```bash
cd apps/editor
pnpm dev
```
**功能**: 拖拽组件、属性配置、页面布局、构建部署

### 3. 开发 Generator (生成器)
```bash
cd packages/generator
pnpm build
```
**功能**: Schema 解析、代码生成、构建优化

### 4. 开发 Setting-form (表单SDK)
```bash
cd packages/setting-form
pnpm build
```
**功能**: 动态表单渲染、验证规则、数据绑定

### 5. 开发 Wrapper (包裹层)
```bash
cd packages/wrapper
pnpm build
```
**功能**: 事件代理、生命周期管理、能力增强

### 6. 开发 Builder (构建服务)
```bash
cd servers/builder
pnpm dev
```
**功能**: 请求处理、任务调度、结果返回

## 📚 物料组件开发

### 创建新物料
```bash
cd material
mkdir my-component
```

### 物料结构
```
my-component/
├── src/
│   ├── index.tsx          # 组件代码
│   └── setting.tsx        # 配置表单
├── package.json           # 包配置
└── README.md             # 文档说明
```

### 物料配置
- 组件代码：React/Vue 组件
- 配置表单：使用 setting-form SDK
- 文档说明：使用说明和示例

## 🔄 开发流程

### 1. 功能开发流程
```
需求分析 → 技术方案 → 代码实现 → 测试验证 → 文档更新
```

### 2. 代码提交流程
```bash
# 代码检查
pnpm lint

# 代码修复
pnpm lint:fix

# 提交代码
pnpm commit
```

### 3. 构建部署流程
```bash
# 构建所有项目
pnpm build

# 构建特定项目
pnpm build --filter=dashboard
```

## 🐛 常见问题

### 1. 依赖安装问题
```bash
# 清理缓存
pnpm store prune

# 重新安装
pnpm install
```

### 2. 构建失败
```bash
# 清理构建缓存
pnpm clean

# 重新构建
pnpm build
```

### 3. 类型错误
- 检查 TypeScript 配置
- 确保所有依赖类型正确
- 使用 `unknown` 替代 `any`

## 📖 学习资源

### 项目文档
- [项目背景](./PROJECT_BACKGROUND.md) - 详细的项目架构和设计理念
- [README.md](../README.md) - 项目概述和基础信息

### 技术文档
- [TypeScript 规范](../.cursor/rules/typescript.mdc)
- [编码规范](../.cursor/rules/standard.mdc)
- [项目结构](../.cursor/rules/project.mdc)

### 外部资源
- [NextJS 文档](https://nextjs.org/docs)
- [NuxtJS 文档](https://nuxt.com/docs)
- [UnoCSS 文档](https://unocss.dev/)
- [NestJS 文档](https://nestjs.com/)

## 🎯 下一步行动

1. **熟悉项目结构**: 阅读 `PROJECT_BACKGROUND.md`
2. **启动开发环境**: 运行 `pnpm dev`
3. **选择一个模块**: 从 Dashboard 或 Editor 开始
4. **阅读代码**: 理解现有代码结构和实现
5. **开始开发**: 根据需求进行功能开发

---

**提示**: 遇到问题时，先查看项目文档，然后检查相关配置文件，最后寻求帮助。
