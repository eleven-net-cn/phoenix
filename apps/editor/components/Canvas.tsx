import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useEditorStore } from '../store/editorStore';
import { ComponentRenderer } from './ComponentRenderer';
import type { ComponentNode } from '../types';

interface CanvasProps {
  className?: string;
}

export const Canvas: React.FC<CanvasProps> = ({ className }) => {
  const {
    components,
    selectedIds,
    canvas,
    selectComponent,
    clearSelection,
    updateComponent,
  } = useEditorStore();

  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  const handleCanvasClick = (e: React.MouseEvent) => {
    // 如果点击的是画布本身，清除选择
    if (e.target === e.currentTarget) {
      clearSelection();
    }
  };

  const handleComponentSelect = (id: string) => {
    selectComponent(id);
  };

  const handleComponentUpdate = (id: string, updates: Partial<ComponentNode>) => {
    updateComponent(id, updates);
  };

  return (
    <div
      ref={setNodeRef}
      className={`un-canvas-wrapper ${className || ''}`}
      style={{
        transform: `scale(${canvas.zoom})`,
        transformOrigin: 'top left',
      }}
      onClick={handleCanvasClick}
    >
      {/* 网格背景 */}
      {canvas.gridEnabled && (
        <div
          className="un-absolute un-inset-0 un-pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f0f0f0 1px, transparent 1px),
              linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      )}

      {/* 画布内容区域 */}
      <div className="un-canvas-content">
        {components.map((component) => (
          <ComponentRenderer
            key={component.id}
            component={component}
            isSelected={selectedIds.includes(component.id)}
            onSelect={() => handleComponentSelect(component.id)}
            onUpdate={(updates) => handleComponentUpdate(component.id, updates)}
          />
        ))}
      </div>

      {/* 空状态 */}
      {components.length === 0 && (
        <div className="un-canvas-empty">
          <div className="un-text-6xl un-mb-4">📝</div>
          <div className="un-text-lg un-mb-2">画布为空</div>
          <div className="un-text-sm">从左侧组件库拖拽组件到此处开始搭建</div>
        </div>
      )}
    </div>
  );
}; 