import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { ComponentNode, EditorState, Position, Size, LayoutMode, EditorMode } from '../types';

// 初始状态
const initialState: EditorState = {
  project: {
    id: 'default-project',
    name: '默认项目',
    currentPage: 'index',
  },
  components: [],
  selectedIds: [],
  canvas: {
    zoom: 1,
    layoutMode: 'flow',
    gridEnabled: true,
    rulersEnabled: false,
  },
  editor: {
    mode: 'edit',
    history: {
      past: [],
      present: [],
      future: [],
    },
    clipboard: [],
  },
  ui: {
    leftPanelWidth: 280,
    rightPanelWidth: 320,
    leftPanelTab: 'components',
    rightPanelTab: 'properties',
  },
};

// 创建store
export const useEditorStore = create<EditorState & {
  // 组件操作
  addComponent: (component: ComponentNode) => void;
  updateComponent: (id: string, updates: Partial<ComponentNode>) => void;
  removeComponent: (id: string) => void;
  duplicateComponent: (id: string) => void;
  
  // 选择操作
  selectComponent: (id: string) => void;
  selectMultipleComponents: (ids: string[]) => void;
  clearSelection: () => void;
  
  // 画布操作
  setZoom: (zoom: number) => void;
  setLayoutMode: (mode: LayoutMode) => void;
  toggleGrid: () => void;
  toggleRulers: () => void;
  
  // 编辑器操作
  setEditorMode: (mode: EditorMode) => void;
  undo: () => void;
  redo: () => void;
  
  // UI操作
  setLeftPanelWidth: (width: number) => void;
  setRightPanelWidth: (width: number) => void;
  setLeftPanelTab: (tab: string) => void;
  setRightPanelTab: (tab: string) => void;
  
  // 工具函数
  getComponentById: (id: string) => ComponentNode | undefined;
  getSelectedComponents: () => ComponentNode[];
  saveToHistory: () => void;
}>()(
  immer((set, get) => ({
    ...initialState,

    // 组件操作
    addComponent: (component: ComponentNode) =>
      set((state: EditorState) => {
        state.components.push(component);
        state.selectedIds = [component.id];
        get().saveToHistory();
      }),

    updateComponent: (id: string, updates: Partial<ComponentNode>) =>
      set((state: EditorState) => {
        const component = state.components.find((c: ComponentNode) => c.id === id);
        if (component) {
          Object.assign(component, updates);
          get().saveToHistory();
        }
      }),

    removeComponent: (id: string) =>
      set((state: EditorState) => {
        state.components = state.components.filter((c: ComponentNode) => c.id !== id);
        state.selectedIds = state.selectedIds.filter((selectedId: string) => selectedId !== id);
        get().saveToHistory();
      }),

    duplicateComponent: (id: string) =>
      set((state: EditorState) => {
        const component = state.components.find((c: ComponentNode) => c.id === id);
        if (component) {
          const duplicated: ComponentNode = {
            ...component,
            id: `${component.id}_copy_${Date.now()}`,
            position: {
              x: component.position.x + 20,
              y: component.position.y + 20,
            },
          };
          state.components.push(duplicated);
          state.selectedIds = [duplicated.id];
          get().saveToHistory();
        }
      }),

    // 选择操作
    selectComponent: (id: string) =>
      set((state: EditorState) => {
        state.selectedIds = [id];
      }),

    selectMultipleComponents: (ids: string[]) =>
      set((state: EditorState) => {
        state.selectedIds = ids;
      }),

    clearSelection: () =>
      set((state: EditorState) => {
        state.selectedIds = [];
      }),

    // 画布操作
    setZoom: (zoom: number) =>
      set((state: EditorState) => {
        state.canvas.zoom = Math.max(0.25, Math.min(2, zoom));
      }),

    setLayoutMode: (mode: LayoutMode) =>
      set((state: EditorState) => {
        state.canvas.layoutMode = mode;
      }),

    toggleGrid: () =>
      set((state: EditorState) => {
        state.canvas.gridEnabled = !state.canvas.gridEnabled;
      }),

    toggleRulers: () =>
      set((state: EditorState) => {
        state.canvas.rulersEnabled = !state.canvas.rulersEnabled;
      }),

    // 编辑器操作
    setEditorMode: (mode: EditorMode) =>
      set((state: EditorState) => {
        state.editor.mode = mode;
      }),

    undo: () =>
      set((state: EditorState) => {
        const { past, present, future } = state.editor.history;
        if (past.length > 0) {
          const previous = past[past.length - 1];
          const newPast = past.slice(0, past.length - 1);
          
          state.editor.history.past = newPast;
          state.editor.history.future = [present, ...future];
          state.editor.history.present = previous;
          state.components = previous;
        }
      }),

    redo: () =>
      set((state: EditorState) => {
        const { past, present, future } = state.editor.history;
        if (future.length > 0) {
          const next = future[0];
          const newFuture = future.slice(1);
          
          state.editor.history.past = [...past, present];
          state.editor.history.future = newFuture;
          state.editor.history.present = next;
          state.components = next;
        }
      }),

    // UI操作
    setLeftPanelWidth: (width: number) =>
      set((state: EditorState) => {
        state.ui.leftPanelWidth = Math.max(200, Math.min(400, width));
      }),

    setRightPanelWidth: (width: number) =>
      set((state: EditorState) => {
        state.ui.rightPanelWidth = Math.max(250, Math.min(500, width));
      }),

    setLeftPanelTab: (tab: string) =>
      set((state: EditorState) => {
        state.ui.leftPanelTab = tab;
      }),

    setRightPanelTab: (tab: string) =>
      set((state: EditorState) => {
        state.ui.rightPanelTab = tab;
      }),

    // 工具函数
    getComponentById: (id: string) => {
      const state = get();
      return state.components.find((c: ComponentNode) => c.id === id);
    },

    getSelectedComponents: () => {
      const state = get();
      return state.components.filter((c: ComponentNode) => state.selectedIds.includes(c.id));
    },

    saveToHistory: () =>
      set((state: EditorState) => {
        const { past, present } = state.editor.history;
        state.editor.history.past = [...past, present];
        state.editor.history.present = [...state.components];
        state.editor.history.future = [];
      }),
  }))
); 