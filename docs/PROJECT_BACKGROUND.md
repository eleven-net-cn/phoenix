# Phoenix 低代码搭建系统 - 项目背景

## 🎯 项目概述

Phoenix 是一个全栈低代码搭建系统，采用 TypeScript 开发，支持 React/NextJS 和 Vue3/NuxtJS 双技术栈。项目采用 monorepo 架构，通过 pnpm workspace + turbo + lerna 进行统一管理。

## 🏗️ 核心架构设计

### 整体架构理念

```
用户界面层 (UI Layer)
├── Dashboard (工作台) - 应用管理、模板管理、物料市场、用户管理
├── Editor (编辑器) - 拖拽组件搭建页面和应用，构建和部署应用
└── WWW (主站) - 基本的功能介绍、引导工作台

业务逻辑层 (Business Layer)
├── Generator (生成器) - 从 JSON Schema 配置生成应用
├── Setting-form (表单SDK) - 物料组件的表单 SDK，最小化表单代码开发
└── Wrapper (包裹层) - 物料组件包裹层，高阶组件，代理所有组件的公共能力

服务层 (Service Layer)
└── Builder (构建服务) - Node 应用，接收请求后使用 generator 打包生成应用

物料层 (Material Layer)
└── Material (物料库) - 可复用的组件库，包含容器、表单、展示等组件
```

### 目录结构详解

```
phoenix/
├── apps/                    # 前端应用层
│   ├── dashboard/          # 低代码系统工作台
│   │   ├── 应用管理        # 创建、编辑、删除应用
│   │   ├── 模板管理        # 模板的创建、编辑、发布
│   │   ├── 物料市场        # 物料的浏览、安装、管理
│   │   └── 用户管理        # 用户权限、角色管理
│   ├── editor/             # 低代码搭建编辑器
│   │   ├── 组件拖拽        # 可视化组件拖拽
│   │   ├── 属性配置        # 组件属性编辑
│   │   ├── 页面布局        # 页面结构设计
│   │   └── 构建部署        # 应用构建和发布
│   └── www/                # 低代码系统主站
│       ├── 功能介绍        # 系统功能展示
│       ├── 使用指南        # 用户操作手册
│       └── 引导工作台      # 新用户引导流程
├── packages/               # 核心公共类库
│   ├── generator/          # 应用构建生成器
│   │   ├── Schema解析      # JSON Schema 配置解析
│   │   ├── 代码生成        # 根据配置生成应用代码
│   │   └── 构建优化        # 代码优化和压缩
│   ├── setting-form/       # 物料组件表单 SDK
│   │   ├── 表单渲染        # 动态表单渲染引擎
│   │   ├── 验证规则        # 表单验证规则系统
│   │   └── 数据绑定        # 表单数据双向绑定
│   └── wrapper/            # 物料组件包裹层
│       ├── 事件代理        # 组件事件统一处理
│       ├── 生命周期        # 组件生命周期管理
│       └── 能力增强        # 组件能力扩展
├── servers/                # 后端应用层
│   └── builder/            # 构建服务
│       ├── 请求处理        # 构建请求接收和处理
│       ├── 任务调度        # 构建任务队列管理
│       └── 结果返回        # 构建结果返回和缓存
├── material/               # 物料组件库
│   ├── container/          # 容器类组件
│   ├── form/               # 表单类组件
│   ├── display/            # 展示类组件
│   └── layout/             # 布局类组件
└── shared/                 # 共享配置
    ├── eslint/             # 代码规范配置
    ├── typescript/         # TypeScript 配置
    └── build/              # 构建配置
```

## 🎨 技术栈选择

### 前端技术栈
- **React 19 + NextJS 15**: 用于 Dashboard 和 Editor 应用
- **Vue 3 + NuxtJS 4**: 用于 WWW 主站应用
- **TypeScript**: 全栈统一使用，确保类型安全
- **UnoCSS**: 原子化 CSS 框架，自定义前缀 `un-`

### 后端技术栈
- **Node.js**: 运行时环境
- **NestJS**: 后端框架（用于 builder 服务）
- **TypeScript**: 类型安全的 JavaScript

### 开发工具链
- **pnpm**: 包管理器，支持 monorepo
- **Turbo**: 构建系统，支持增量构建
- **Lerna**: 版本管理和发布
- **ESLint**: 代码规范和格式化
- **Husky**: Git hooks 管理

## 📋 开发规范

### 编码规范
- **TypeScript 优先**: 所有代码必须使用 TypeScript
- **严格类型定义**: 避免使用 `any`，优先使用 `unknown`
- **组件命名**: 组件使用 PascalCase，文件使用 camelCase
- **路径别名**: 使用 `@/` 映射到 `src/` 目录

### Vue 开发规范
- **Setup Script**: 使用 `<script setup>` 语法
- **Composition API**: 优先使用 Composition API
- **文件结构**: script/template/style 顺序排列
- **Hooks 命名**: 以 `use` 开头，使用 camelCase

### React 开发规范
- **函数组件**: 优先使用函数组件和 Hooks
- **TypeScript**: 严格类型定义
- **组件拆分**: 单一职责原则

### 样式规范
- **UnoCSS 优先**: 优先使用 UnoCSS 原子类
- **自定义前缀**: 所有 UnoCSS 样式使用 `un-` 前缀
- **间距处理**: 使用 `un-space-x-` 和 `un-space-y-` 设置间距

## 🔧 核心功能模块

### 1. Dashboard (工作台)
**技术栈**: NextJS 15 + React 19 + TypeScript

**核心功能**:
- 应用管理：创建、编辑、删除、发布应用
- 模板管理：模板的创建、编辑、发布、分享
- 物料市场：物料的浏览、安装、更新、管理
- 用户管理：用户权限、角色管理、团队协作

### 2. Editor (编辑器)
**技术栈**: NextJS 15 + React 19 + TypeScript

**核心功能**:
- 可视化编辑：拖拽组件、调整布局
- 属性配置：组件属性实时编辑
- 页面管理：多页面应用支持
- 预览调试：实时预览和调试功能
- 构建部署：一键构建和部署应用

### 3. Generator (生成器)
**技术栈**: TypeScript + Node.js

**核心功能**:
- Schema 解析：解析 JSON Schema 配置
- 代码生成：根据配置生成应用代码
- 模板引擎：支持多种模板引擎
- 构建优化：代码压缩和优化

### 4. Setting-form (表单SDK)
**技术栈**: TypeScript + React/Vue

**核心功能**:
- 动态表单：根据配置动态渲染表单
- 验证规则：支持多种验证规则
- 数据绑定：表单数据双向绑定
- 扩展性：支持自定义组件和验证器

### 5. Wrapper (包裹层)
**技术栈**: TypeScript + React/Vue

**核心功能**:
- 事件代理：统一处理组件事件
- 生命周期：管理组件生命周期
- 能力增强：扩展组件能力
- 跨框架：支持 React 和 Vue 组件

### 6. Builder (构建服务)
**技术栈**: NestJS + TypeScript

**核心功能**:
- 请求处理：接收构建请求
- 任务调度：管理构建任务队列
- 结果返回：返回构建结果
- 缓存机制：构建结果缓存

## 🚀 开发流程

### 1. 项目初始化
```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev
```

### 2. 开发模式
```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm dev --filter=dashboard
pnpm dev --filter=editor
pnpm dev --filter=www

# 启动特定服务
pnpm dev --filter=builder
```

### 3. 构建部署
```bash
# 构建所有项目
pnpm build

# 构建特定项目
pnpm build --filter=dashboard
pnpm build --filter=editor
```

## 📚 关键概念

### 1. 物料 (Material)
可复用的组件，包含：
- 组件代码
- 配置表单
- 文档说明
- 示例代码

### 2. 模板 (Template)
预定义的应用结构，包含：
- 页面布局
- 组件配置
- 数据模型
- 业务逻辑

### 3. 应用 (Application)
用户构建的最终产物，包含：
- 页面结构
- 组件配置
- 数据绑定
- 业务逻辑

### 4. Schema 配置
描述应用结构的 JSON 配置，包含：
- 页面信息
- 组件树
- 数据模型
- 业务配置

## 🎯 设计原则

### 1. 模块化设计
- 每个模块职责单一
- 模块间低耦合
- 支持独立开发和测试

### 2. 可扩展性
- 支持自定义组件
- 支持自定义模板
- 支持自定义主题

### 3. 易用性
- 可视化操作
- 实时预览
- 一键部署

### 4. 高性能
- 增量构建
- 代码分割
- 缓存优化

## 🔄 数据流

```
用户操作 → Editor → Schema配置 → Generator → 应用代码 → Builder → 部署
    ↓
Dashboard管理 → 模板/物料 → Editor使用 → 生成应用
```

## 📝 注意事项

1. **类型安全**: 所有代码必须通过 TypeScript 类型检查
2. **代码规范**: 遵循 ESLint 规范，不允许有警告
3. **向下兼容**: 避免 breaking change，保持 API 稳定性
4. **性能优化**: 关注打包体积和运行时性能
5. **浏览器兼容**: 支持 Chrome 80+ 浏览器

---

**最后更新**: 2024年12月
**维护者**: Eleven <master@eleven.net.cn>
