import React from 'react';
import type { ComponentNode } from '../types';

interface ComponentRendererProps {
  component: ComponentNode;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<ComponentNode>) => void;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  component,
  isSelected,
  onSelect,
  onUpdate,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 双击编辑功能
  };

  const renderComponent = () => {
    switch (component.type) {
      case 'container':
        return (
          <div className="un-border-gray-300 un-rounded un-p-4 un-bg-white">
            <div className="un-font-medium un-mb-2">{component.props.title || '容器'}</div>
            <div className="un-text-sm un-text-gray-500">容器内容区域</div>
          </div>
        );
      
      case 'text':
        return (
          <div className="un-text-sm">
            {component.props.content || '文本内容'}
          </div>
        );
      
      case 'button':
        return (
          <button className="un-px-4 un-py-2 un-rounded un-border un-cursor-pointer">
            {component.props.text || '按钮'}
          </button>
        );
      
      case 'image':
        return (
          <img
            src={component.props.src || 'https://via.placeholder.com/200x150'}
            alt={component.props.alt || '图片'}
            className="un-rounded"
            style={{
              width: (component.props.width as string) || 'auto',
              height: (component.props.height as string) || 'auto',
            }}
          />
        );
      
      default:
        return (
          <div className="un-border-dashed un-border-gray-300 un-rounded un-p-4 un-text-center un-text-gray-500">
            未知组件类型: {component.type}
          </div>
        );
    }
  };

  return (
    <div
      className={`un-relative ${isSelected ? 'un-selected' : ''}`}
      style={{
        position: 'absolute',
        left: component.position.x,
        top: component.position.y,
        width: component.size.width,
        height: component.size.height,
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {renderComponent()}
    </div>
  );
}; 