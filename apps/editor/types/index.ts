import type { CSSProperties } from 'react';

// 组件节点类型
export interface ComponentNode {
  id: string;
  type: string;
  name: string;
  props: {
    title?: string;
    content?: string;
    text?: string;
    type?: string;
    src?: string;
    alt?: string;
    [key: string]: unknown;
  };
  style: CSSProperties;
  children?: ComponentNode[];
  parentId?: string;
  position: Position;
  size: Size;
  layoutMode: LayoutMode;
  zIndex: number;
  locked: boolean;
  visible: boolean;
}

// 位置信息
export interface Position {
  x: number;
  y: number;
}

// 尺寸信息
export interface Size {
  width: number;
  height: number;
}

// 布局模式
export type LayoutMode = 'flow' | 'position' | 'fixed' | 'sticky';

// 编辑器模式
export type EditorMode = 'edit' | 'preview' | 'code';

// 组件配置
export interface ComponentConfig {
  type: string;
  name: string;
  icon: string;
  category: string;
  props: PropSchema[];
  style: StyleSchema[];
  events: EventSchema[];
  defaultProps: Record<string, unknown>;
  defaultStyle: CSSProperties;
}

// 属性配置
export interface PropSchema {
  key: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'textarea' | 'color' | 'image';
  required?: boolean;
  defaultValue?: unknown;
  options?: Array<{ label: string; value: unknown }>;
  validator?: (value: unknown) => boolean | string;
}

// 样式配置
export interface StyleSchema {
  key: string;
  label: string;
  type: 'string' | 'number' | 'color' | 'select';
  defaultValue?: unknown;
  options?: Array<{ label: string; value: unknown }>;
}

// 事件配置
export interface EventSchema {
  key: string;
  label: string;
  type: 'click' | 'hover' | 'change' | 'submit' | 'custom';
  handler: string;
}

// 编辑器状态
export interface EditorState {
  // 项目信息
  project: {
    id: string;
    name: string;
    currentPage: string;
  };

  // 组件数据
  components: ComponentNode[];
  selectedIds: string[];

  // 画布状态
  canvas: {
    zoom: number;
    layoutMode: LayoutMode;
    gridEnabled: boolean;
    rulersEnabled: boolean;
  };

  // 编辑器状态
  editor: {
    mode: EditorMode;
    history: HistoryState;
    clipboard: ComponentNode[];
  };

  // UI 状态
  ui: {
    leftPanelWidth: number;
    rightPanelWidth: number;
    leftPanelTab: string;
    rightPanelTab: string;
  };
}

// 历史状态
export interface HistoryState {
  past: ComponentNode[][];
  present: ComponentNode[];
  future: ComponentNode[][];
}

// 拖拽状态
export interface DragState {
  isDragging: boolean;
  draggedComponent: ComponentNode | null;
  dropTarget: string | null;
}

// 选择状态
export interface SelectionState {
  selectedIds: string[];
  selectionBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
} 