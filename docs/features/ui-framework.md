# Editor UI 框架选择与配置

## 🎯 框架选择

### 主框架：Ant Design (antd)
- **版本**: 5.x (最新稳定版)
- **理由**: 企业级组件库，适合复杂编辑器场景
- **包大小**: ~2MB (gzipped)

### 辅助框架：UnoCSS
- **用途**: 原子化 CSS，快速样式开发
- **模式**: 属性模式 (Attribute Mode)
- **前缀**: `un-` (自定义前缀)
- **优势**: 与 antd 互补，提供灵活的样式控制

## 📦 依赖配置

### 核心依赖
```json
{
  "dependencies": {
    "antd": "^5.15.0",
    "@ant-design/icons": "^5.3.0",
    "@ant-design/pro-components": "^2.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "unocss": "^0.58.0"
  }
}
```

### 可选依赖
```json
{
  "dependencies": {
    "@ant-design/colors": "^7.0.0",
    "antd-style": "^3.7.0"
  }
}
```

## 🎨 主题配置

### 1. 基础主题配置
```typescript
// theme/antd-theme.ts
import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    // 主色调
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',

    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,

    // 圆角
    borderRadius: 6,

    // 间距
    padding: 16,
    margin: 16,
  },

  components: {
    // 按钮
    Button: {
      borderRadius: 6,
      controlHeight: 32,
    },

    // 输入框
    Input: {
      borderRadius: 6,
      controlHeight: 32,
    },

    // 选择器
    Select: {
      borderRadius: 6,
      controlHeight: 32,
    },

    // 表格
    Table: {
      borderRadius: 6,
      headerBg: '#fafafa',
    },

    // 卡片
    Card: {
      borderRadius: 8,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
  },
};
```

### 2. 编辑器专用主题
```typescript
// theme/editor-theme.ts
export const editorTheme: ThemeConfig = {
  token: {
    // 编辑器专用颜色
    colorPrimary: '#1677ff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f5f5',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',

    // 编辑器专用尺寸
    controlHeight: 28,
    controlHeightLG: 36,
    controlHeightSM: 24,
  },

  components: {
    // 侧边栏
    Layout: {
      siderBg: '#ffffff',
      headerBg: '#ffffff',
      bodyBg: '#f5f5f5',
    },

    // 面板
    Panel: {
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    },

    // 画布
    Canvas: {
      bgColor: '#ffffff',
      borderColor: '#e8e8e8',
      gridColor: '#f0f0f0',
    },
  },
};
```

## 🔧 组件使用规范

### 1. 基础组件
```typescript
// 统一导入 antd 组件
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  List,
  Menu,
  Message,
  Modal,
  Notification,
  Popconfirm,
  Row,
  Select,
  Slider,
  Switch,
  Table,
  Tabs,
  Tag,
  Tree
} from 'antd';

// 图标按需导入
import { EyeOutlined, SaveOutlined } from '@ant-design/icons';
```

### 2. 编辑器专用组件
```typescript
// 组件库
import { ComponentLibrary } from '@/components/editor/ComponentLibrary';

// 画布
import { Canvas } from '@/components/editor/Canvas';

// 配置面板
import { Inspector } from '@/components/editor/Inspector';

// 工具栏
import { Toolbar } from '@/components/editor/Toolbar';
```

## 🎨 UnoCSS 配置

### 1. UnoCSS 配置文件
```typescript
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  // 启用属性模式
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      // 相似样式聚合
      strict: false,
      // 支持布尔值
      boolean: true,
    }),
  ],

  // 自定义规则
  rules: [
    // 编辑器专用样式
    ['un-editor-container', { height: '100vh', display: 'flex', 'flex-direction': 'column' }],
    ['un-editor-header', { height: '64px', 'background-color': '#ffffff', 'border-bottom': '1px solid #e5e7eb' }],
    ['un-editor-main', { flex: '1', display: 'flex', overflow: 'hidden' }],
    ['un-editor-left-panel', { width: '320px', 'background-color': '#ffffff', 'border-right': '1px solid #e5e7eb' }],
    ['un-editor-canvas', { flex: '1', 'background-color': '#f9fafb', overflow: 'auto' }],
    ['un-editor-right-panel', { width: '320px', 'background-color': '#ffffff', 'border-left': '1px solid #e5e7eb' }],
  ],

  // 快捷方式
  shortcuts: {
    // 布局快捷方式
    'un-flex-center': 'un-flex un-items-center un-justify-center',
    'un-flex-between': 'un-flex un-items-center un-justify-between',
    'un-flex-col-center': 'un-flex un-flex-col un-items-center un-justify-center',

    // 间距快捷方式
    'un-space-x-2': 'un-space-x-2',
    'un-space-y-2': 'un-space-y-2',
    'un-space-x-4': 'un-space-x-4',
    'un-space-y-4': 'un-space-y-4',

    // 边框快捷方式
    'un-border-light': 'un-border un-border-gray-200',
    'un-border-dark': 'un-border un-border-gray-300',

    // 阴影快捷方式
    'un-shadow-sm': 'un-shadow-sm',
    'un-shadow-md': 'un-shadow-md',
    'un-shadow-lg': 'un-shadow-lg',
  },

  // 主题配置
  theme: {
    colors: {
      primary: '#1890ff',
      success: '#52c41a',
      warning: '#faad14',
      error: '#ff4d4f',
      info: '#1890ff',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
  },
});
```

### 2. 属性模式使用示例
```typescript
// 使用属性模式进行样式设置
const EditorToolbar = () => (
  <div un-flex="~" un-items-center un-justify-between un-p-4 un-bg-white un-border-b="~ gray-200">
    <Button type="primary" un-mr-2>
      保存
    </Button>
    <Button un-ml-2>
      取消
    </Button>
  </div>
);

// 编辑器布局
const EditorLayout = () => (
  <div un-editor-container>
    <header un-editor-header un-flex="~" un-items-center un-justify-between un-px-4>
      <h1 un-text-lg un-font-bold>页面编辑器</h1>
      <div un-flex="~" un-items-center un-space-x-2>
        <Button type="primary" un-flex="~" un-items-center un-space-x-1>
          <SaveOutlined />
          <span>保存</span>
        </Button>
        <Button un-flex="~" un-items-center un-space-x-1>
          <EyeOutlined />
          <span>预览</span>
        </Button>
      </div>
    </header>

    <main un-editor-main>
      <aside un-editor-left-panel un-flex="~" un-flex-col>
        <ComponentLibrary />
      </aside>

      <section un-editor-canvas>
        <Canvas />
      </section>

      <aside un-editor-right-panel un-flex="~" un-flex-col>
        <Inspector />
      </aside>
    </main>
  </div>
);
```

### 3. 相似样式聚合示例
```typescript
// 布局相关属性聚合
<div
  un-flex="~"           // display: flex
  un-flex-col          // flex-direction: column
  un-items-center      // align-items: center
  un-justify-center    // justify-content: center
  un-gap-4             // gap: 1rem
  un-p-4               // padding: 1rem
  un-m-2               // margin: 0.5rem
  un-w-full            // width: 100%
  un-h-screen          // height: 100vh
  un-bg-white          // background-color: white
  un-border="~"        // border: 1px solid
  un-border-gray-200   // border-color: gray-200
  un-rounded-lg        // border-radius: 0.5rem
  un-shadow-md         // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
  un-text-center       // text-align: center
  un-font-bold         // font-weight: bold
  un-text-lg           // font-size: 1.125rem
  un-text-gray-700     // color: gray-700
>
  内容
</div>

// 响应式属性聚合
<div
  un-w-full un-md-w-1/2 un-lg-w-1/3     // 响应式宽度
  un-p-2 un-md-p-4 un-lg-p-6            // 响应式内边距
  un-text-sm un-md-text-base un-lg-text-lg // 响应式字体大小
  un-hidden un-md-block                 // 响应式显示
>
  响应式内容
</div>

// 状态属性聚合
<button
  un-bg-blue-500 un-hover-bg-blue-600 un-active-bg-blue-700  // 状态背景色
  un-text-white                                             // 文字颜色
  un-px-4                                                   // 水平内边距
  un-py-2                                                   // 垂直内边距
  un-rounded-md                                             // 圆角
  un-transition-all                                         // 过渡效果
  un-duration-200                                           // 过渡时长
  un-cursor-pointer                                         // 鼠标样式
  un-disabled-opacity-50 un-disabled-cursor-not-allowed     // 禁用状态
>
  按钮
</button>
```

## 📱 响应式设计

### 1. 断点配置
```typescript
// 响应式断点
const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};
```

### 2. 响应式组件
```typescript
// 使用 Ant Design 的响应式组件
import { Row, Col } from 'antd';

const ResponsiveLayout = () => (
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card>组件 1</Card>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card>组件 2</Card>
    </Col>
  </Row>
);
```

## 🔧 配置集成

### 1. Next.js 配置
```typescript
// next.config.js
const nextConfig = {
  transpilePackages: ['antd', '@ant-design/icons'],
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

### 2. UnoCSS 集成
```typescript
// app/layout.tsx
import 'uno.css'; // 引入 UnoCSS 样式

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 3. 主题提供者
```typescript
// app/providers.tsx
'use client';

import { ConfigProvider } from 'antd';
import { antdTheme } from '@/theme/antd-theme';

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={antdTheme}>
      {children}
    </ConfigProvider>
  );
}
```

### 4. 根布局
```typescript
// app/layout.tsx
import { AntdProvider } from './providers';
import 'uno.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <AntdProvider>
          {children}
        </AntdProvider>
      </body>
    </html>
  );
}
```

## 🚀 性能优化

### 1. 按需加载
```typescript
// 使用动态导入减少包体积
import dynamic from 'next/dynamic';

const DynamicTable = dynamic(() => import('antd').then(mod => ({ default: mod.Table })), {
  ssr: false,
});
```

### 2. 图标优化
```typescript
// 按需导入图标
import { EyeOutlined, SaveOutlined, SettingOutlined } from '@ant-design/icons';

// 或者使用动态导入
const SaveIcon = dynamic(() => import('@ant-design/icons/SaveOutlined'), {
  ssr: false,
});
```

### 3. UnoCSS 优化
```typescript
// 使用属性模式减少类名数量
const OptimizedComponent = () => (
  <div
    un-flex="~"
    un-items-center
    un-justify-between
    un-p-4
    un-bg-white
    un-shadow-sm
    un-rounded-lg
  >
    优化后的组件
  </div>
);
```

## 📋 开发规范

### 1. 组件命名
- 使用 PascalCase 命名组件
- 文件名与组件名保持一致
- 使用有意义的描述性名称

### 2. 样式优先级
1. UnoCSS 属性模式 (最高优先级)
2. CSS Modules 或 styled-components
3. Ant Design 默认样式 (最低优先级)

### 3. UnoCSS 使用规范

#### 3.1 属性模式 (presetAttributify) 规范

**核心原则**: 所有 UnoCSS 样式必须使用 `un-` 前缀，确保样式隔离和可维护性。

##### 3.1.1 前缀规范
- **强制要求**: 所有 UnoCSS 类名必须以 `un-` 开头
- **属性模式**: 使用 `un-属性名="值"` 的格式
- **多值支持**: 支持空格分隔的多个值，如 `un-bg="blue-400 hover:blue-500"`

##### 3.1.2 常用属性分类

**布局属性**:
```html
<!-- 容器布局 -->
<div un-flex="~" un-items-center un-justify-between>
<div un-grid="~ cols-3 gap-4">
<div un-block un-w-full un-h-screen>

<!-- 定位 -->
<div un-relative un-top-0 un-left-0>
<div un-absolute un-inset-0>
<div un-fixed un-top-4 un-right-4>
```

**间距属性**:
```html
<!-- 内边距 -->
<div un-p="4">
<div un-px="4" un-py="2">
<div un-pt="4" un-pr="6" un-pb="4" un-pl="6">

<!-- 外边距 -->
<div un-m="4">
<div un-mx="auto" un-my="2">
<div un-mt="4" un-mb="6">

<!-- 子元素间距 (推荐使用) -->
<div un-space-x="4">
<div un-space-y="2">
<div un-space="4">
```

**尺寸属性**:
```html
<!-- 宽度 -->
<div un-w="full">
<div un-w="1/2">
<div un-w="max-content">
<div un-min-w="200px">

<!-- 高度 -->
<div un-h="screen">
<div un-h="32">
<div un-min-h="400px">
<div un-max-h="600px">
```

**背景属性**:
```html
<!-- 背景色 -->
<div un-bg="blue-400">
<div un-bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600">
<div un-bg="gradient-to-r from-blue-500 to-purple-600">

<!-- 背景图片 -->
<div un-bg="url('/image.jpg')">
<div un-bg="cover center">
```

**文字属性**:
```html
<!-- 文字样式 -->
<div un-text="sm white">
<div un-text="lg blue-600 font-bold">
<div un-text="center">

<!-- 字体 -->
<div un-font="mono light">
<div un-font="sans medium">
<div un-font="serif">
```

**边框属性**:
```html
<!-- 边框样式 -->
<div un-border="2 rounded blue-200">
<div un-border="t-2 b-1 gray-300">
<div un-border="l-4 border-blue-500">

<!-- 圆角 -->
<div un-rounded="lg">
<div un-rounded="full">
<div un-rounded="t-lg b-none">
```

**阴影属性**:
```html
<!-- 阴影 -->
<div un-shadow="lg">
<div un-shadow="xl hover:2xl">
<div un-shadow="inner">
```

**过渡属性**:
```html
<!-- 过渡效果 -->
<div un-transition="all duration-300 ease-in-out">
<div un-transform="hover:scale-105">
<div un-opacity="0 hover:100">
```

##### 3.1.3 响应式设计
```html
<!-- 断点前缀 -->
<div un-w="full md:1/2 lg:1/3">
<div un-text="sm md:base lg:lg">
<div un-p="2 md:4 lg:6">
<div un-hidden md:block>
```

##### 3.1.4 状态变体
```html
<!-- 悬停状态 -->
<div un-bg="blue-400 hover:blue-500">
<div un-text="gray-600 hover:blue-600">
<div un-shadow="md hover:lg">

<!-- 焦点状态 -->
<div un-ring="2 focus:ring-blue-500">
<div un-border="focus:border-blue-500">

<!-- 激活状态 -->
<div un-bg="blue-400 active:blue-600">
```

##### 3.1.5 暗色模式
```html
<!-- 暗色模式适配 -->
<div un-bg="white dark:gray-800">
<div un-text="gray-900 dark:white">
<div un-border="gray-200 dark:gray-700">
```

#### 3.2 最佳实践

##### 3.2.1 样式组织原则
1. **相似样式聚合**: 将相关的样式属性放在一起
2. **逻辑分组**: 按布局、间距、颜色、文字等逻辑分组
3. **可读性优先**: 使用换行和缩进提高可读性

```html
<!-- 推荐的样式组织方式 -->
<button
  un-flex="~"
  un-items-center
  un-justify-center
  un-space-x="2"
  un-p="y-2 x-4"
  un-bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  un-text="sm white"
  un-font="mono light"
  un-border="2 rounded blue-200"
  un-transition="all duration-200"
  un-cursor="pointer"
>
  Button
</button>
```

##### 3.2.2 组件样式规范
```typescript
// React 组件示例
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const baseStyles = "un-flex un-items-center un-justify-center un-font-medium un-rounded un-transition-all un-duration-200 un-cursor-pointer";

  const variantStyles = {
    primary: "un-bg-blue-500 hover:un-bg-blue-600 un-text-white un-border-blue-500",
    secondary: "un-bg-gray-500 hover:un-bg-gray-600 un-text-white un-border-gray-500",
    outline: "un-bg-transparent un-text-blue-500 un-border-blue-500 hover:un-bg-blue-50"
  };

  const sizeStyles = {
    sm: "un-px-3 un-py-1 un-text-sm",
    md: "un-px-4 un-py-2 un-text-base",
    lg: "un-px-6 un-py-3 un-text-lg"
  };

  const disabledStyles = disabled ? "un-opacity-50 un-cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

##### 3.2.3 Vue 组件示例
```vue
<template>
  <button
    :un-flex="'~'"
    :un-items-center="true"
    :un-justify-center="true"
    :un-space-x="2"
    :un-p="'y-2 x-4'"
    :un-bg="buttonBg"
    :un-text="'sm white'"
    :un-font="'mono light'"
    :un-border="'2 rounded blue-200'"
    :un-transition="'all duration-200'"
    :un-cursor="disabled ? 'not-allowed' : 'pointer'"
    :un-opacity="disabled ? 50 : 100"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonBg = computed(() => {
  const base = props.variant === 'outline' ? 'transparent' : 'blue-400';
  const hover = props.variant === 'outline' ? 'blue-50' : 'blue-500';
  return `${base} hover:${hover}`;
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>
```

#### 3.3 常见错误和注意事项

##### 3.3.1 避免的错误
```html
<!-- ❌ 错误：没有使用 un- 前缀 -->
<div class="flex items-center p-4 bg-blue-500">

<!-- ❌ 错误：混合使用 class 和属性模式 -->
<div class="un-flex un-items-center" un-p="4">

<!-- ❌ 错误：属性值格式不正确 -->
<div un-bg="blue-400, hover:blue-500">

<!-- ✅ 正确：统一使用属性模式 -->
<div un-flex="~" un-items-center un-p="4" un-bg="blue-400 hover:blue-500">
```

##### 3.3.2 性能优化
1. **避免过度使用**: 不要为每个元素都添加大量样式属性
2. **复用样式**: 将常用样式组合提取为组件或工具类
3. **按需加载**: UnoCSS 会自动按需生成样式，无需手动优化

##### 3.3.3 调试技巧
1. **浏览器开发者工具**: 检查生成的 CSS 类名
2. **UnoCSS 调试模式**: 启用调试模式查看样式生成过程
3. **样式优先级**: 注意 UnoCSS 样式与其他 CSS 的优先级关系

### 4. 主题定制
- 优先使用 Ant Design 的 token 系统
- 避免直接覆盖 CSS 类
- 使用 CSS 变量进行主题切换

### 5. 响应式设计
- 移动优先的设计原则
- 使用 Ant Design 的栅格系统
- 测试不同屏幕尺寸

## 🎯 最佳实践

### 1. 组件组合
```typescript
// 组合 Ant Design 组件创建编辑器组件
const EditorToolbar = () => (
  <div un-flex="~" un-items-center un-space-x-2 un-p-2 un-bg-white un-border-b="~ gray-200">
    <Button type="primary" un-flex="~" un-items-center un-space-x-1>
      <SaveOutlined />
      <span>保存</span>
    </Button>
    <Button un-flex="~" un-items-center un-space-x-1>
      <EyeOutlined />
      <span>预览</span>
    </Button>
    <Divider type="vertical" />
    <Select defaultValue="desktop" style={{ width: 120 }}>
      <Select.Option value="desktop">桌面</Select.Option>
      <Select.Option value="tablet">平板</Select.Option>
      <Select.Option value="mobile">手机</Select.Option>
    </Select>
  </div>
);
```

### 2. 状态管理
```typescript
// 结合 Zustand 和 Ant Design
import { useEditorStore } from '@/stores/editor';
import { message } from 'antd';

const handleSave = async () => {
  try {
    await saveProject();
    message.success('保存成功');
  } catch (error) {
    message.error('保存失败');
  }
};
```

### 3. 编辑器布局示例
```typescript
const Editor = () => (
  <div un-editor-container>
    {/* 顶部工具栏 */}
    <header un-editor-header>
      <EditorToolbar />
    </header>

    {/* 主要内容区域 */}
    <main un-editor-main>
      {/* 左侧面板 */}
      <aside un-editor-left-panel>
        <ComponentLibrary />
      </aside>

      {/* 中间画布 */}
      <section un-editor-canvas>
        <Canvas />
      </section>

      {/* 右侧配置面板 */}
      <aside un-editor-right-panel>
        <Inspector />
      </aside>
    </main>
  </div>
);
```

---

**文档版本**: v1.0
**最后更新**: 2024年12月
**维护者**: Eleven <master@eleven.net.cn>
