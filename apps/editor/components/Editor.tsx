import React from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { useEditorStore } from '../store/editorStore';
import { ComponentLibrary } from './ComponentLibrary';
import { Canvas } from './Canvas';
import { Inspector } from './Inspector';
import type { ComponentConfig, ComponentNode } from '../types';

export const Editor: React.FC = () => {
  const {
    ui,
    addComponent,
  } = useEditorStore();

  const [draggedComponent, setDraggedComponent] = React.useState<ComponentConfig | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    // 这里需要从组件库获取组件配置
    console.log('Drag start:', event);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    
    if (over && over.id === 'canvas') {
      // 创建新组件
      const newComponent: ComponentNode = {
        id: `component_${Date.now()}`,
        type: 'container', // 默认类型，实际应该从拖拽的组件获取
        name: '新组件',
        props: {
          title: '新组件',
        },
        style: {
          width: 200,
          height: 100,
          backgroundColor: '#ffffff',
          border: '1px solid #d9d9d9',
          borderRadius: 6,
        },
        position: { x: 0, y: 0 },
        size: { width: 200, height: 100 },
        layoutMode: 'position',
        zIndex: 1,
        locked: false,
        visible: true,
      };
      
      addComponent(newComponent);
    }
    
    setDraggedComponent(null);
  };

  const handleComponentSelect = (component: ComponentConfig) => {
    // 创建新组件并添加到画布
    const newComponent: ComponentNode = {
      id: `component_${Date.now()}`,
      type: component.type,
      name: component.name,
      props: { ...component.defaultProps },
      style: { ...component.defaultStyle },
      position: { x: 100, y: 100 },
      size: { 
        width: component.defaultStyle.width as number || 200, 
        height: component.defaultStyle.height as number || 100 
      },
      layoutMode: 'position',
      zIndex: 1,
      locked: false,
      visible: true,
    };
    
    addComponent(newComponent);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div un-h="screen" un-flex="~ col" un-bg="gray-50">
        {/* Header */}
        <div un-h="12" un-bg="white" un-border="b gray-200" un-flex="~" un-items="center" un-px="4" un-justify="between">
          <div un-flex="~" un-items="center" un-space-x="4">
            <h1 un-text="lg" un-font="medium">Phoenix 低代码编辑器</h1>
            <div un-text="sm gray-500">项目名称</div>
          </div>
          <div un-flex="~" un-items="center" un-space-x="2">
            <button un-px="3" un-py="1" un-bg="blue-500" un-text="white sm" un-rounded>
              保存
            </button>
            <button un-px="3" un-py="1" un-bg="gray-500" un-text="white sm" un-rounded>
              预览
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div un-flex="~ 1" un-overflow="hidden">
          {/* Left Panel */}
          <div 
            un-bg="white" un-border="r gray-200" un-flex="~ col"
            style={{ width: ui.leftPanelWidth }}
          >
            <div un-h="8" un-bg="gray-50" un-border="b gray-200" un-flex="~" un-items="center" un-px="3" un-text="sm" un-font="medium">
              组件库
            </div>
            <div un-flex="1" un-overflow="auto">
              <ComponentLibrary onComponentSelect={handleComponentSelect} />
            </div>
          </div>

          {/* Canvas */}
          <div un-flex="col 1" un-overflow="hidden">
            <div un-h="8" un-bg="gray-50" un-border="b gray-200" un-flex="~" un-items="center" un-px="3" un-text="sm" un-font="medium">
              画布
            </div>
            <div un-flex="1" un-p="4" un-overflow="auto">
              <Canvas className="un-h-full" />
            </div>
          </div>

          {/* Right Panel */}
          <div 
            un-bg="white" un-border="l gray-200" un-flex="~ col"
            style={{ width: ui.rightPanelWidth }}
          >
            <div un-h="8" un-bg="gray-50" un-border="b gray-200" un-flex="~" un-items="center" un-px="3" un-text="sm" un-font="medium">
              属性配置
            </div>
            <div un-flex="1" un-overflow="hidden">
              <Inspector />
            </div>
          </div>
        </div>
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {draggedComponent && (
          <div un-p="2" un-bg="white" un-border="gray-300" un-rounded un-shadow="lg">
            {draggedComponent.name}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}; 