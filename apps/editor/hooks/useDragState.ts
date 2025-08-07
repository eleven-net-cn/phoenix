import { useState, useCallback } from 'react';
import { useBoolean } from 'ahooks';

/**
 * 使用拖拽状态
 */
export function useDragState() {
  const [isDragging, { setTrue: startDrag, setFalse: endDrag }] = useBoolean(false);
  const [dragData, setDragData] = useState<unknown>(null);

  const startDragWithData = useCallback((data: unknown) => {
    setDragData(data);
    startDrag();
  }, [startDrag]);

  const endDragWithCleanup = useCallback(() => {
    endDrag();
    setDragData(null);
  }, [endDrag]);

  return {
    isDragging,
    dragData,
    startDrag: startDragWithData,
    endDrag: endDragWithCleanup,
  };
} 