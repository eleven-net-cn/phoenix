# Editor 主题设计系统

## 🎯 设计理念

Phoenix 编辑器采用 **UnoCSS + Ant Design** 的双主题系统：
- **Ant Design**: 提供企业级组件和交互规范
- **UnoCSS**: 提供灵活的原子化样式和自定义主题能力
- **统一设计语言**: 确保视觉一致性和开发效率

## 🎨 主题架构

### 1. 设计 Token 系统

```typescript
// theme/tokens.ts
export const designTokens = {
  // 颜色系统
  colors: {
    // 主色调 - 基于 Ant Design 的蓝色系
    primary: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#1890ff', // Ant Design 主色
      600: '#096dd9',
      700: '#0050b3',
      800: '#003a8c',
      900: '#002766',
    },

    // 功能色
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',

    // 中性色
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#f0f0f0',
      300: '#d9d9d9',
      400: '#bfbfbf',
      500: '#8c8c8c',
      600: '#595959',
      700: '#434343',
      800: '#262626',
      900: '#1f1f1f',
    },

    // 编辑器专用色
    editor: {
      canvas: '#fafafa',
      panel: '#ffffff',
      border: '#e8e8e8',
      shadow: 'rgba(0, 0, 0, 0.06)',
      overlay: 'rgba(0, 0, 0, 0.45)',
      highlight: '#e6f7ff',
      selection: '#bae7ff',
    }
  },

  // 间距系统
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  // 圆角系统
  borderRadius: {
    none: '0px',
    sm: '2px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },

  // 阴影系统
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  // 字体系统
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // 动画系统
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};
```

### 2. UnoCSS 主题配置

```typescript
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import { designTokens } from './theme/tokens';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      strict: false,
      boolean: true,
    }),
  ],

  // 主题配置
  theme: {
    colors: designTokens.colors,
    spacing: designTokens.spacing,
    borderRadius: designTokens.borderRadius,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.fontSize,
    fontWeight: designTokens.typography.fontWeight,
    animation: {
      duration: designTokens.animation.duration,
      easing: designTokens.animation.easing,
    },
  },

  // 自定义规则
  rules: [
    // 编辑器布局规则
    ['un-editor-container', {
      height: '100vh',
      display: 'flex',
      'flex-direction': 'column',
      'background-color': designTokens.colors.editor.canvas,
    }],

    ['un-editor-header', {
      height: '64px',
      'background-color': designTokens.colors.editor.panel,
      'border-bottom': `1px solid ${designTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.sm,
    }],

    ['un-editor-main', {
      flex: '1',
      display: 'flex',
      overflow: 'hidden',
      'background-color': designTokens.colors.editor.canvas,
    }],

    ['un-editor-left-panel', {
      width: '320px',
      'background-color': designTokens.colors.editor.panel,
      'border-right': `1px solid ${designTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.md,
    }],

    ['un-editor-canvas', {
      flex: '1',
      'background-color': designTokens.colors.editor.canvas,
      overflow: 'auto',
      position: 'relative',
    }],

    ['un-editor-right-panel', {
      width: '320px',
      'background-color': designTokens.colors.editor.panel,
      'border-left': `1px solid ${designTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.md,
    }],

    // 组件库规则
    ['un-component-library', {
      padding: designTokens.spacing.md,
    }],

    ['un-component-item', {
      padding: designTokens.spacing.sm,
      'border-radius': designTokens.borderRadius.md,
      border: `1px solid ${designTokens.colors.editor.border}`,
      'background-color': designTokens.colors.editor.panel,
      cursor: 'pointer',
      transition: `all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.ease}`,
    }],

    ['un-component-item:hover', {
      'border-color': designTokens.colors.primary[400],
      'box-shadow': designTokens.shadows.sm,
      transform: 'translateY(-1px)',
    }],

    // 画布规则
    ['un-canvas-container', {
      padding: designTokens.spacing.lg,
      'min-height': '100%',
    }],

    ['un-canvas-grid', {
      'background-image': `radial-gradient(circle, ${designTokens.colors.editor.border} 1px, transparent 1px)`,
      'background-size': '20px 20px',
    }],

    // 配置面板规则
    ['un-inspector', {
      padding: designTokens.spacing.md,
    }],

    ['un-inspector-section', {
      'margin-bottom': designTokens.spacing.lg,
    }],

    ['un-inspector-title', {
      'font-size': designTokens.typography.fontSize.sm,
      'font-weight': designTokens.typography.fontWeight.semibold,
      color: designTokens.colors.gray[700],
      'margin-bottom': designTokens.spacing.sm,
      'text-transform': 'uppercase',
      'letter-spacing': '0.05em',
    }],

    // 工具栏规则
    ['un-toolbar', {
      padding: designTokens.spacing.sm,
      'background-color': designTokens.colors.editor.panel,
      'border-bottom': `1px solid ${designTokens.colors.editor.border}`,
    }],

    ['un-toolbar-group', {
      display: 'flex',
      'align-items': 'center',
      gap: designTokens.spacing.xs,
    }],

    // 拖拽状态规则
    ['un-drag-over', {
      'background-color': designTokens.colors.editor.highlight,
      border: `2px dashed ${designTokens.colors.primary[400]}`,
    }],

    ['un-selected', {
      outline: `2px solid ${designTokens.colors.primary[400]}`,
      'outline-offset': '2px',
    }],
  ],

  // 快捷方式
  shortcuts: {
    // 布局快捷方式
    'un-flex-center': 'un-flex un-items-center un-justify-center',
    'un-flex-between': 'un-flex un-items-center un-justify-between',
    'un-flex-col-center': 'un-flex un-flex-col un-items-center un-justify-center',

    // 编辑器快捷方式
    'un-editor-panel': 'un-bg-white un-border un-border-gray-200 un-rounded-lg un-shadow-md',
    'un-editor-button': 'un-px-3 un-py-1.5 un-text-sm un-font-medium un-rounded-md un-transition-all un-duration-200',
    'un-editor-button-primary': 'un-editor-button un-bg-primary-500 un-text-white hover:un-bg-primary-600',
    'un-editor-button-secondary': 'un-editor-button un-bg-gray-100 un-text-gray-700 hover:un-bg-gray-200',

    // 组件快捷方式
    'un-component-card': 'un-bg-white un-border un-border-gray-200 un-rounded-md un-p-3 un-shadow-sm hover:un-shadow-md un-transition-shadow un-duration-200',
    'un-component-icon': 'un-w-8 un-h-8 un-bg-gray-100 un-rounded-md un-flex un-items-center un-justify-center un-text-gray-600',

    // 表单快捷方式
    'un-form-group': 'un-mb-4',
    'un-form-label': 'un-block un-text-sm un-font-medium un-text-gray-700 un-mb-1',
    'un-form-input': 'un-w-full un-px-3 un-py-2 un-border un-border-gray-300 un-rounded-md un-text-sm focus:un-ring-2 focus:un-ring-primary-500 focus:un-border-primary-500',

    // 状态快捷方式
    'un-state-hover': 'hover:un-bg-gray-50 hover:un-border-primary-300',
    'un-state-active': 'un-bg-primary-50 un-border-primary-400 un-text-primary-700',
    'un-state-disabled': 'un-opacity-50 un-cursor-not-allowed',
  },
});
```

### 3. Ant Design 主题配置

```typescript
// theme/antd-theme.ts
import type { ThemeConfig } from 'antd';
import { designTokens } from './tokens';

export const antdTheme: ThemeConfig = {
  token: {
    // 主色调
    colorPrimary: designTokens.colors.primary[500],
    colorSuccess: designTokens.colors.success,
    colorWarning: designTokens.colors.warning,
    colorError: designTokens.colors.error,
    colorInfo: designTokens.colors.info,

    // 背景色
    colorBgContainer: designTokens.colors.editor.panel,
    colorBgLayout: designTokens.colors.editor.canvas,
    colorBgElevated: designTokens.colors.editor.panel,

    // 边框色
    colorBorder: designTokens.colors.editor.border,
    colorBorderSecondary: designTokens.colors.gray[200],

    // 文字色
    colorText: designTokens.colors.gray[800],
    colorTextSecondary: designTokens.colors.gray[600],
    colorTextTertiary: designTokens.colors.gray[500],

    // 字体
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: Number.parseInt(designTokens.typography.fontSize.base),

    // 圆角
    borderRadius: Number.parseInt(designTokens.borderRadius.md),

    // 间距
    padding: Number.parseInt(designTokens.spacing.md),
    margin: Number.parseInt(designTokens.spacing.md),

    // 控制高度
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },

  components: {
    // 按钮
    Button: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
      paddingInline: 16,
      fontWeight: 500,
    },

    // 输入框
    Input: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
      paddingInline: 12,
    },

    // 选择器
    Select: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
    },

    // 表格
    Table: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
      headerBg: designTokens.colors.gray[50],
      headerColor: designTokens.colors.gray[700],
    },

    // 卡片
    Card: {
      borderRadius: Number.parseInt(designTokens.borderRadius.lg),
      boxShadow: designTokens.shadows.sm,
      headerBg: designTokens.colors.gray[50],
    },

    // 面板
    Collapse: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
      headerBg: designTokens.colors.gray[50],
    },

    // 抽屉
    Drawer: {
      colorBgElevated: designTokens.colors.editor.panel,
    },

    // 模态框
    Modal: {
      borderRadius: Number.parseInt(designTokens.borderRadius.lg),
    },

    // 消息
    Message: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
    },

    // 通知
    Notification: {
      borderRadius: Number.parseInt(designTokens.borderRadius.md),
    },
  },
};
```

## 🎨 编辑器布局主题

### 1. 主布局结构

```typescript
// components/editor/EditorLayout.tsx
import React from 'react';
import { Layout } from 'antd';
import { EditorHeader } from './EditorHeader';
import { ComponentLibrary } from './ComponentLibrary';
import { Canvas } from './Canvas';
import { Inspector } from './Inspector';

const { Header, Sider, Content } = Layout;

export const EditorLayout: React.FC = () => {
  return (
    <div un-editor-container>
      {/* 顶部工具栏 */}
      <header un-editor-header>
        <EditorHeader />
      </header>

      {/* 主要内容区域 */}
      <main un-editor-main>
        {/* 左侧组件库 */}
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
};
```

### 2. 组件库主题

```typescript
// components/editor/ComponentLibrary.tsx
import React from 'react';
import { Card, Input, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const { TabPane } = Tabs;

export const ComponentLibrary: React.FC = () => {
  return (
    <div un-component-library>
      {/* 搜索栏 */}
      <div un-mb-4>
        <Search
          placeholder="搜索组件..."
          prefix={<SearchOutlined />}
          un-w-full
        />
      </div>

      {/* 组件分类 */}
      <Tabs defaultActiveKey="basic" un-w-full>
        <TabPane tab="基础组件" key="basic">
          <div un-grid="~ cols-2 gap-3">
            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📝</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                文本
              </div>
            </div>

            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>🖼️</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                图片
              </div>
            </div>

            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>🔘</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                按钮
              </div>
            </div>

            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📋</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                表单
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tab="容器组件" key="container">
          <div un-grid="~ cols-2 gap-3">
            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📦</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                容器
              </div>
            </div>

            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📊</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                卡片
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tab="布局组件" key="layout">
          <div un-grid="~ cols-2 gap-3">
            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📐</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                栅格
              </div>
            </div>

            <div un-component-card un-component-item>
              <div un-component-icon>
                <i un-text-lg>📋</i>
              </div>
              <div un-mt-2 un-text-center un-text-sm un-text-gray-700>
                列表
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
```

### 3. 画布主题

```typescript
// components/editor/Canvas.tsx
import React from 'react';
import { Button, Space } from 'antd';
import {
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FullscreenOutlined
} from '@ant-design/icons';

export const Canvas: React.FC = () => {
  return (
    <div un-canvas-container>
      {/* 画布工具栏 */}
      <div un-toolbar un-flex-between un-mb-4>
        <div un-toolbar-group>
          <Button.Group>
            <Button icon={<DesktopOutlined />} un-editor-button-secondary>
              桌面
            </Button>
            <Button icon={<TabletOutlined />} un-editor-button-secondary>
              平板
            </Button>
            <Button icon={<MobileOutlined />} un-editor-button-secondary>
              手机
            </Button>
          </Button.Group>
        </div>

        <div un-toolbar-group>
          <Button icon={<ZoomOutOutlined />} un-editor-button-secondary />
          <span un-px-2 un-text-sm un-text-gray-600>100%</span>
          <Button icon={<ZoomInOutlined />} un-editor-button-secondary />
          <Button icon={<FullscreenOutlined />} un-editor-button-secondary />
        </div>
      </div>

      {/* 画布区域 */}
      <div
        un-canvas-grid
        un-bg-white
        un-border
        un-border-gray-200
        un-rounded-lg
        un-shadow-sm
        un-min-h="600px"
        un-p-8
        un-relative
      >
        {/* 画布内容 */}
        <div un-text-center un-text-gray-500 un-mt-20>
          <div un-text-4xl un-mb-4>🎨</div>
          <div un-text-lg un-font-medium un-mb-2>拖拽组件到这里</div>
          <div un-text-sm>从左侧组件库拖拽组件到画布中</div>
        </div>

        {/* 网格背景 */}
        <div
          un-absolute
          un-inset-0
          un-pointer-events-none
          un-opacity-20
          style={{
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    </div>
  );
};
```

### 4. 配置面板主题

```typescript
// components/editor/Inspector.tsx
import React from 'react';
import { Form, Input, Select, Slider, Switch, ColorPicker, Divider } from 'antd';

const { Option } = Select;

export const Inspector: React.FC = () => {
  return (
    <div un-inspector>
      {/* 组件属性 */}
      <div un-inspector-section>
        <div un-inspector-title>组件属性</div>

        <Form layout="vertical" un-space-y-4>
          <div un-form-group>
            <div un-form-label>组件名称</div>
            <Input placeholder="请输入组件名称" un-form-input />
          </div>

          <div un-form-group>
            <div un-form-label>组件类型</div>
            <Select defaultValue="text" un-w-full>
              <Option value="text">文本组件</Option>
              <Option value="image">图片组件</Option>
              <Option value="button">按钮组件</Option>
            </Select>
          </div>

          <div un-form-group>
            <div un-form-label>显示状态</div>
            <Switch defaultChecked />
          </div>
        </Form>
      </div>

      <Divider />

      {/* 样式属性 */}
      <div un-inspector-section>
        <div un-inspector-title>样式属性</div>

        <Form layout="vertical" un-space-y-4>
          <div un-form-group>
            <div un-form-label>背景颜色</div>
            <ColorPicker defaultValue="#ffffff" />
          </div>

          <div un-form-group>
            <div un-form-label>内边距</div>
            <Slider
              min={0}
              max={100}
              defaultValue={16}
              marks={{ 0: '0', 50: '50', 100: '100' }}
            />
          </div>

          <div un-form-group>
            <div un-form-label>圆角</div>
            <Slider
              min={0}
              max={20}
              defaultValue={6}
              marks={{ 0: '0', 10: '10', 20: '20' }}
            />
          </div>

          <div un-form-group>
            <div un-form-label>阴影</div>
            <Select defaultValue="none" un-w-full>
              <Option value="none">无阴影</Option>
              <Option value="sm">小阴影</Option>
              <Option value="md">中等阴影</Option>
              <Option value="lg">大阴影</Option>
            </Select>
          </div>
        </Form>
      </div>

      <Divider />

      {/* 事件属性 */}
      <div un-inspector-section>
        <div un-inspector-title>事件属性</div>

        <Form layout="vertical" un-space-y-4>
          <div un-form-group>
            <div un-form-label>点击事件</div>
            <Select placeholder="选择点击事件" un-w-full>
              <Option value="alert">显示提示</Option>
              <Option value="navigate">页面跳转</Option>
              <Option value="custom">自定义事件</Option>
            </Select>
          </div>

          <div un-form-group>
            <div un-form-label>悬停事件</div>
            <Select placeholder="选择悬停事件" un-w-full>
              <Option value="none">无事件</Option>
              <Option value="tooltip">显示提示</Option>
              <Option value="highlight">高亮效果</Option>
            </Select>
          </div>
        </Form>
      </div>
    </div>
  );
};
```

## 🎭 交互状态主题

### 1. 拖拽状态

```typescript
// hooks/useDragDrop.ts
import { useState } from 'react';

export const useDragDrop = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [dragTarget, setDragTarget] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const componentType = e.dataTransfer.getData('componentType');
    // 处理组件放置逻辑
  };

  return {
    isDragOver,
    dragTarget,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};

// 在画布中使用
<div
  un-canvas-grid
  un-bg-white
  un-border
  un-border-gray-200
  un-rounded-lg
  un-shadow-sm
  un-min-h="600px"
  un-p-8
  un-relative
  className={isDragOver ? 'un-drag-over' : ''}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>
  {/* 画布内容 */}
</div>
```

### 2. 选中状态

```typescript
// hooks/useSelection.ts
import { useState } from 'react';

export const useSelection = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleSelect = (componentId: string) => {
    setSelectedComponent(componentId);
  };

  const handleDeselect = () => {
    setSelectedComponent(null);
  };

  return {
    selectedComponent,
    handleSelect,
    handleDeselect,
  };
};

// 在组件中使用
<div
  un-component-card
  un-component-item
  className={selectedComponent === componentId ? 'un-selected' : ''}
  onClick={() => handleSelect(componentId)}
>
  {/* 组件内容 */}
</div>
```

## 🌙 暗色模式支持

### 1. 暗色主题配置

```typescript
// theme/dark-theme.ts
export const darkTheme: ThemeConfig = {
  token: {
    // 暗色模式颜色
    colorBgContainer: '#1f1f1f',
    colorBgLayout: '#141414',
    colorBgElevated: '#262626',

    colorBorder: '#434343',
    colorBorderSecondary: '#303030',

    colorText: '#ffffff',
    colorTextSecondary: '#a6a6a6',
    colorTextTertiary: '#8c8c8c',
  },

  components: {
    // 暗色模式组件样式
    Card: {
      colorBgContainer: '#262626',
      colorBorderSecondary: '#303030',
    },

    Input: {
      colorBgContainer: '#262626',
      colorBorder: '#434343',
    },
  },
};
```

### 2. 主题切换

```typescript
// hooks/useTheme.ts
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return {
    isDark,
    toggleTheme,
  };
};
```

## 📱 响应式主题

### 1. 响应式布局

```typescript
// components/editor/ResponsiveEditor.tsx
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';

export const ResponsiveEditor: React.FC = () => {
  const [leftPanelVisible, setLeftPanelVisible] = useState(false);
  const [rightPanelVisible, setRightPanelVisible] = useState(false);

  return (
    <div un-editor-container>
      {/* 移动端工具栏 */}
      <div un-toolbar un-flex-between un-p-2 un-md-hidden>
        <Button
          icon={<MenuOutlined />}
          onClick={() => setLeftPanelVisible(true)}
          un-editor-button-secondary
        >
          组件库
        </Button>

        <Button
          icon={<SettingOutlined />}
          onClick={() => setRightPanelVisible(true)}
          un-editor-button-secondary
        >
          配置
        </Button>
      </div>

      {/* 桌面端布局 */}
      <div un-hidden un-md-block>
        <EditorLayout />
      </div>

      {/* 移动端抽屉 */}
      <Drawer
        title="组件库"
        placement="left"
        open={leftPanelVisible}
        onClose={() => setLeftPanelVisible(false)}
        width={280}
      >
        <ComponentLibrary />
      </Drawer>

      <Drawer
        title="配置面板"
        placement="right"
        open={rightPanelVisible}
        onClose={() => setRightPanelVisible(false)}
        width={280}
      >
        <Inspector />
      </Drawer>
    </div>
  );
};
```

## 🎯 主题最佳实践

### 1. 主题一致性

```typescript
// 使用设计 Token 确保一致性
const Button = ({ variant = 'primary', children, ...props }) => {
  const variantStyles = {
    primary: 'un-bg-primary-500 un-text-white hover:un-bg-primary-600',
    secondary: 'un-bg-gray-100 un-text-gray-700 hover:un-bg-gray-200',
    outline: 'un-bg-transparent un-text-primary-500 un-border-primary-500 hover:un-bg-primary-50',
  };

  return (
    <button
      className={`un-editor-button ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### 2. 主题扩展性

```typescript
// 支持自定义主题
interface CustomTheme {
  colors?: Partial<typeof designTokens.colors>;
  spacing?: Partial<typeof designTokens.spacing>;
  borderRadius?: Partial<typeof designTokens.borderRadius>;
}

export const createCustomTheme = (customTheme: CustomTheme) => {
  return {
    ...designTokens,
    ...customTheme,
  };
};
```

### 3. 主题性能优化

```typescript
// 使用 CSS 变量优化性能
const cssVariables = {
  '--color-primary': designTokens.colors.primary[500],
  '--color-success': designTokens.colors.success,
  '--color-warning': designTokens.colors.warning,
  '--color-error': designTokens.colors.error,
  '--spacing-md': designTokens.spacing.md,
  '--border-radius-md': designTokens.borderRadius.md,
};

// 在根元素应用
document.documentElement.style.setProperty('--color-primary', designTokens.colors.primary[500]);
```

---

**文档版本**: v1.0
**最后更新**: 2024年12月
**维护者**: Eleven <master@eleven.net.cn>
