import { useCallback } from 'react';
import { useEditorStore } from '../store/editorStore';

/**
 * 使用组件选择
 */
export function useComponentSelection() {
  const { selectedIds, selectComponent, clearSelection } = useEditorStore();

  const handleComponentClick = useCallback((id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    if (event.ctrlKey || event.metaKey) {
      // 多选模式
      if (selectedIds.includes(id)) {
        // 取消选择
        const newSelection = selectedIds.filter(selectedId => selectedId !== id);
        // TODO: 更新选择状态
      } else {
        // 添加到选择
        const newSelection = [...selectedIds, id];
        // TODO: 更新选择状态
      }
    } else {
      // 单选模式
      selectComponent(id);
    }
  }, [selectedIds, selectComponent]);

  const handleCanvasClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      clearSelection();
    }
  }, [clearSelection]);

  return {
    selectedIds,
    handleComponentClick,
    handleCanvasClick,
  };
} 