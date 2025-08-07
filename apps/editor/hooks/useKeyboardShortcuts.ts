import { useEffect } from 'react';
import { useEditorStore } from '../store/editorStore';

/**
 * 使用键盘快捷键
 */
export function useKeyboardShortcuts() {
  const { undo, redo, removeComponent, selectedIds } = useEditorStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 检查是否在输入框中
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (event.ctrlKey || event.metaKey) {
        switch (event.key.toLowerCase()) {
          case 'z':
            event.preventDefault();
            if (event.shiftKey) {
              redo();
            } else {
              undo();
            }
            break;
          case 'y':
            event.preventDefault();
            redo();
            break;
          case 'a':
            event.preventDefault();
            // TODO: 全选功能
            break;
          case 'c':
            event.preventDefault();
            // TODO: 复制功能
            break;
          case 'v':
            event.preventDefault();
            // TODO: 粘贴功能
            break;
          case 'd':
            event.preventDefault();
            // TODO: 复制并粘贴功能
            break;
        }
      } else {
        switch (event.key) {
          case 'Delete':
          case 'Backspace':
            if (selectedIds.length > 0) {
              event.preventDefault();
              selectedIds.forEach(id => removeComponent(id));
            }
            break;
          case 'Escape':
            // TODO: 取消选择功能
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, removeComponent, selectedIds]);
} 