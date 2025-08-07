# UnoCSS 使用指南

## 概述

Phoenix 项目使用 UnoCSS 作为主要的样式解决方案，提供统一的设计 token 系统和灵活的样式编写方式。项目采用 `presetAttributify` 属性模式，所有样式类名以 `un-` 前缀开头，确保样式隔离和可维护性。

## 包架构

### @phoenix/shared-unocss 包

Phoenix 项目将 UnoCSS 配置抽象为独立的包 `@phoenix/shared-unocss`，位于 `shared/unocss/` 目录下。

#### 包结构

```
packages/unocss/
├── src/
│   ├── index.ts          # 主入口文件
│   ├── config.ts         # 基础配置
│   └── tokens.ts         # 设计 token
├── dist/                 # 构建输出
├── package.json          # 包配置
├── tsconfig.json         # TypeScript 配置
├── tsup.config.ts        # 构建配置
└── README.md             # 包文档
```

#### 导出内容

- **主入口** (`@phoenix/shared-unocss`)：导出所有内容
- **配置** (`@phoenix/shared-unocss/config`)：仅导出配置
- **Token** (`@phoenix/shared-unocss/tokens`)：仅导出设计 token

### 应用使用

各个应用通过 pnpm workspace 引用 `@phoenix/shared-unocss` 包：

```json
{
  "dependencies": {
    "@phoenix/shared-unocss": "workspace:*"
  }
}
```

## pnpm Workspace 支持

### 本地包引用

在 pnpm workspace 中，`@phoenix/shared-unocss` 包可以不 publish 而被 apps 下的应用导入使用。pnpm 支持以下引用方式：

1. **workspace 协议**：`"@phoenix/shared-unocss": "workspace:*"`
2. **相对路径**：`"@phoenix/shared-unocss": "file:../shared/unocss"`
3. **自动链接**：pnpm 会自动将 workspace 内的包链接到 `node_modules`

### 优势

- **无需发布**：本地开发时无需发布到 npm
- **实时更新**：修改包内容后立即生效
- **版本同步**：所有应用使用相同版本的包
- **类型安全**：完整的 TypeScript 支持

## 配置架构

### 基础配置 (`@phoenix/shared-unocss`)

包含通用的设计 token 系统和基础样式规则：

- 颜色系统（主色调、功能色、中性色）
- 间距系统（xs, sm, md, lg, xl, xxl）
- 字体系统（大小、粗细、字族）
- 圆角和阴影系统
- 通用快捷方式

### 应用特定配置

每个应用继承基础配置，并添加应用特定的样式：

- **Editor 应用**：编辑器布局、组件库、画布、面板等样式
- **Dashboard 应用**：仪表板布局、卡片、表格、导航等样式
- **WWW 应用**：网站布局、导航、按钮、卡片、营销等样式

## 使用规范

### 1. 属性模式（推荐）

在 `className` 或 `class` 属性中使用 UnoCSS 时，**必须使用 `un-` 前缀**：

```tsx
// React/Next.js
<div className="un-flex un-items-center un-justify-center un-p-4 un-bg-white un-rounded-lg un-shadow-md">
  <span className="un-text-lg un-font-semibold un-text-gray-800">Content</span>
</div>

// Vue/Nuxt.js
<template>
  <div class="un-flex un-items-center un-justify-center un-p-4 un-bg-white un-rounded-lg un-shadow-md">
    <span className="un-text-lg un-font-semibold un-text-gray-800">Content</span>
  </div>
</template>
```

### 2. 快捷方式使用

优先使用预定义的快捷方式，提高开发效率和一致性：

```tsx
// 布局快捷方式
<div className="un-flex-center">居中对齐</div>
<div className="un-flex-between">两端对齐</div>
<div className="un-flex-col-center">垂直居中</div>

// 间距快捷方式
<div className="un-space-x-md">水平间距</div>
<div className="un-space-y-lg">垂直间距</div>

// 表单快捷方式
<div className="un-form-group">
  <label className="un-form-label">标签</label>
  <input className="un-form-input" />
</div>

// 状态快捷方式
<button className="un-state-hover">悬停状态</button>
<button className="un-state-active">激活状态</button>
<button className="un-state-disabled">禁用状态</button>
```

## 设计 Token 系统

### 颜色系统

```typescript
// 主色调
un - bg - primary - 50; // #e6f7ff
un - bg - primary - 100; // #bae7ff
un - bg - primary - 200; // #91d5ff
un - bg - primary - 300; // #69c0ff
un - bg - primary - 400; // #40a9ff
un - bg - primary - 500; // #1890ff (Ant Design 主色)
un - bg - primary - 600; // #096dd9
un - bg - primary - 700; // #0050b3
un - bg - primary - 800; // #003a8c
un - bg - primary - 900; // #002766

// 功能色
un - bg - success; // #52c41a
un - bg - warning; // #faad14
un - bg - error; // #ff4d4f
un - bg - info; // #1890ff

// 中性色
un - bg - gray - 50; // #fafafa
un - bg - gray - 100; // #f5f5f5
un - bg - gray - 200; // #f0f0f0
un - bg - gray - 300; // #d9d9d9
un - bg - gray - 400; // #bfbfbf
un - bg - gray - 500; // #8c8c8c
un - bg - gray - 600; // #595959
un - bg - gray - 700; // #434343
un - bg - gray - 800; // #262626
un - bg - gray - 900; // #1f1f1f
```

### 间距系统

```typescript
un - p - xs; // 4px
un - p - sm; // 8px
un - p - md; // 16px
un - p - lg; // 24px
un - p - xl; // 32px
un - p - xxl; // 48px

// 快捷方式
un - space - x - xs; // space-x-1
un - space - x - sm; // space-x-2
un - space - x - md; // space-x-4
un - space - x - lg; // space-x-6
un - space - x - xl; // space-x-8
un - space - x - xxl; // space-x-12
```

### 圆角系统

```typescript
un - rounded - none; // 0px
un - rounded - sm; // 2px
un - rounded - md; // 6px
un - rounded - lg; // 8px
un - rounded - xl; // 12px
un - rounded - full; // 9999px
```

### 字体系统

```typescript
// 字体大小
un-text-xs         // 12px
un-text-sm         // 14px
un-text-base       // 16px
un-text-lg         // 18px
un-text-xl         // 20px
un-text-2xl        // 24px
un-text-3xl        // 30px
un-text-4xl        // 36px
un-text-5xl        // 48px

// 字体粗细
un-font-light      // 300
un-font-normal     // 400
un-font-medium     // 500
un-font-semibold   // 600
un-font-bold       // 700
```

## 应用特定样式

### Editor 应用

编辑器应用包含特定的组件样式：

```typescript
// 编辑器布局
un - editor - container; // 编辑器容器
un - editor - header; // 编辑器头部
un - editor - main; // 编辑器主体
un - editor - left - panel; // 左侧面板
un - editor - canvas; // 画布区域
un - editor - right - panel; // 右侧面板

// 组件库
un - component - library; // 组件库容器
un - component - item; // 组件项
un - component - card; // 组件卡片

// 画布
un - canvas - wrapper; // 画布包装器
un - canvas - content; // 画布内容
un - canvas - empty; // 空状态

// 面板
un - panel - header; // 面板头部
un - panel - body; // 面板主体
un - panel - footer; // 面板底部

// 配置面板
un - inspector; // 检查器
un - inspector - section; // 检查器区块
un - inspector - title; // 检查器标题

// 工具栏
un - toolbar; // 工具栏
un - toolbar - group; // 工具栏组

// 状态
un - drag - over; // 拖拽悬停状态
un - selected; // 选中状态
```

### Dashboard 应用

仪表板应用包含特定的管理界面样式：

```typescript
// 仪表板布局
un - dashboard - layout; // 仪表板布局
un - dashboard - sidebar; // 侧边栏
un - dashboard - main; // 主内容区
un - dashboard - header; // 头部
un - dashboard - content; // 内容区

// 卡片
un - dashboard - card; // 仪表板卡片
un - stat - card; // 统计卡片
un - stat - card - primary; // 主要统计卡片
un - stat - card - success; // 成功统计卡片
un - stat - card - warning; // 警告统计卡片
un - stat - card - error; // 错误统计卡片

// 表格
un - dashboard - table; // 仪表板表格
un - dashboard - table - header; // 表格头部
un - table - header; // 表格头部样式
un - table - cell; // 表格单元格样式
un - table - row; // 表格行样式

// 导航
un - sidebar - nav; // 侧边栏导航
un - sidebar - nav - item; // 导航项
un - sidebar - nav - item - active; // 激活的导航项
un - sidebar - item; // 侧边栏项
un - sidebar - item - active; // 激活的侧边栏项

// 页面
un - page - header; // 页面头部
un - page - title; // 页面标题
un - page - subtitle; // 页面副标题
```

### WWW 应用

网站应用包含特定的营销页面样式：

```typescript
// 网站布局
un - website - container; // 网站容器
un - website - header; // 网站头部
un - website - hero; // 英雄区域
un - website - section; // 内容区块
un - website - footer; // 网站底部

// 导航
un - nav - container; // 导航容器
un - nav - logo; // 导航标志
un - nav - menu; // 导航菜单
un - nav - link; // 导航链接

// 按钮
un - btn; // 基础按钮
un - btn - primary; // 主要按钮
un - btn - secondary; // 次要按钮
un - btn - lg; // 大按钮
un - btn - sm; // 小按钮
un - cta - button; // 行动按钮

// 卡片
un - feature - card; // 功能卡片
un - card - hover; // 卡片悬停效果
un - feature - icon; // 功能图标

// 标题
un - hero - title; // 英雄标题
un - hero - subtitle; // 英雄副标题
un - section - title; // 区块标题
un - section - subtitle; // 区块副标题

// 营销
un - hero - cta; // 英雄区域行动按钮
un - text - gradient; // 渐变文本
```

## 最佳实践

### 1. 间距使用

- 使用 UnoCSS 间距工具类 (`un-space-x-`, `un-space-y-`) 设置容器内子元素间距
- 避免使用 margin 设置左右间距
- 优先使用 `un-space-x-md` 而不是 `[&>*+*]:un-ml-4`
- 优先使用 `un-space-y-md` 而不是 `[&>*+*]:un-mt-4`

### 2. 设计系统集成

- 遵循各应用的设计 token 系统
- 使用语义化颜色名称（如 `un-bg-primary-500`, `un-bg-success`, `un-bg-warning`）
- 利用间距比例（`xs`, `sm`, `md`, `lg`, `xl`, `xxl`）保持一致性
- 使用字体比例设置字体大小和粗细

### 3. 响应式设计

```typescript
// 响应式前缀
sm: 640px   // 小屏幕
md: 768px   // 中等屏幕
lg: 1024px  // 大屏幕
xl: 1280px  // 超大屏幕
2xl: 1536px // 2倍超大屏幕

// 示例
<div className="un-responsive-grid">
  <div className="un-responsive-text">响应式文本</div>
</div>
```

### 4. 状态管理

```typescript
// 悬停状态
<div className="un-bg-white hover:un-bg-gray-50 un-transition-colors un-duration-200">
  悬停效果
</div>

// 激活状态
<button className="un-bg-primary-500 active:un-bg-primary-600">
  激活状态
</button>

// 禁用状态
<button className="un-bg-gray-300 un-text-gray-500 un-cursor-not-allowed" disabled>
  禁用状态
</button>
```

### 5. 动画使用

```typescript
// 动画快捷方式
un-transition-fast     // transition-all duration-150
un-transition-normal   // transition-all duration-200
un-transition-slow     // transition-all duration-300

// 示例
<div className="un-transition-normal hover:un-scale-105">
  悬停缩放效果
</div>
```

### 6. 阴影使用

```typescript
// 阴影快捷方式
un-shadow-sm           // shadow-sm
un-shadow-md           // shadow-md
un-shadow-lg           // shadow-lg
un-shadow-xl           // shadow-xl

// 示例
<div className="un-shadow-md hover:un-shadow-lg un-transition-shadow">
  悬停阴影效果
</div>
```

## 开发工具

### VS Code 扩展推荐

- **UnoCSS** - 官方 VS Code 扩展，提供智能提示和自动补全
- **Tailwind CSS IntelliSense** - 兼容 UnoCSS 的智能提示

### 调试工具

- 使用浏览器开发者工具查看生成的 CSS
- 使用 UnoCSS Inspector 查看样式规则
- 使用 `@unocss/inspector` 包进行开发时调试

## 性能优化

### 1. 按需生成

UnoCSS 默认按需生成 CSS，只包含实际使用的样式类。

### 2. 预构建

在生产环境中，UnoCSS 会预构建所有使用的样式类，确保最佳性能。

### 3. 缓存

UnoCSS 支持缓存机制，避免重复生成相同的样式。

## 迁移指南

### 从 Tailwind CSS 迁移

1. 替换类名前缀：`bg-blue-500` → `un-bg-blue-500`
2. 使用快捷方式：`flex items-center justify-center` → `un-flex-center`
3. 更新配置文件：从 `tailwind.config.js` 迁移到 `uno.config.ts`

### 从普通 CSS 迁移

1. 识别重复的样式模式
2. 创建对应的 UnoCSS 快捷方式
3. 逐步替换现有的 CSS 类

## 常见问题

### Q: 为什么使用 `un-` 前缀？

A: 使用前缀可以避免与第三方库的样式冲突，确保样式隔离和可维护性。

### Q: 如何处理复杂的样式组合？

A: 创建自定义快捷方式，将常用的样式组合封装成可复用的类名。

### Q: 如何扩展设计 token？

A: 在 `@phoenix/shared-unocss` 包中添加新的 token，然后在应用特定配置中使用。

### Q: 如何处理响应式设计？

A: 使用 UnoCSS 的响应式前缀（`sm:`, `md:`, `lg:`, `xl:`, `2xl:`）和预定义的响应式快捷方式。

### Q: pnpm workspace 中如何引用本地包？

A: 使用 `"@phoenix/shared-unocss": "workspace:*"` 协议，pnpm 会自动链接本地包，无需发布到 npm。

## 更新总结

### 主要更新内容

#### 1. 包架构重构

- **独立包** (`packages/unocss`)：将 UnoCSS 配置抽象为独立的包
- **pnpm workspace 支持**：通过 `workspace:*` 协议引用本地包
- **模块化导出**：支持按需导入配置、token 或全部内容

#### 2. 设计 Token 系统

- **颜色系统**：基于 Ant Design 的主色调，功能色，中性色
- **间距系统**：标准化的间距比例（xs, sm, md, lg, xl, xxl）
- **字体系统**：完整的字体大小和粗细体系
- **圆角和阴影系统**：统一的视觉规范

#### 3. 快捷方式系统

- **布局快捷方式**：`un-flex-center`, `un-flex-between` 等
- **间距快捷方式**：`un-space-x-md`, `un-space-y-lg` 等
- **表单快捷方式**：`un-form-group`, `un-form-input` 等
- **状态快捷方式**：`un-state-hover`, `un-state-active` 等
- **语义化快捷方式**：`un-text-primary`, `un-bg-success` 等

#### 4. 应用特定样式

- **Editor 应用**：编辑器布局、组件库、画布、面板等样式
- **Dashboard 应用**：仪表板布局、卡片、表格、导航等样式
- **WWW 应用**：网站布局、导航、按钮、卡片、营销等样式

#### 5. 包管理优化

- **本地开发**：无需发布即可在 workspace 内使用
- **版本同步**：所有应用使用相同版本的配置
- **类型安全**：完整的 TypeScript 支持
- **构建优化**：使用 tsup 进行高效构建

### 使用规范

1. **前缀规范**：强制使用 `un-` 前缀
2. **优先使用快捷方式**：提高开发效率和一致性
3. **标准化的间距使用**：使用间距工具类而非 margin
4. **响应式设计支持**：预定义的响应式快捷方式和前缀
5. **包引用规范**：使用 `workspace:*` 协议引用本地包

### 带来的好处

1. **统一的设计系统** - 基于共享 token 的一致性
2. **灵活的样式编写** - 支持属性模式和快捷方式
3. **应用特定优化** - 每个应用都有专门的样式规则
4. **开发效率提升** - 智能提示和自动补全
5. **性能优化** - 按需生成和预构建
6. **包管理简化** - 本地包引用，无需发布
7. **类型安全** - 完整的 TypeScript 支持

遵循这些规范，可以确保项目样式的可维护性和一致性，提高开发效率。
