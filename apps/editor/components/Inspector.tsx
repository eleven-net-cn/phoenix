import React from 'react';
import { Tabs, Form, Input, InputNumber, ColorPicker } from 'antd';
import { useEditorStore } from '../store/editorStore';

interface InspectorProps {
  className?: string;
}

export const Inspector: React.FC<InspectorProps> = ({ className }) => {
  const { selectedIds, getComponentById, updateComponent } = useEditorStore();
  
  const selectedComponent = selectedIds.length === 1 
    ? getComponentById(selectedIds[0]) 
    : null;

  const handlePropsChange = (key: string, value: unknown) => {
    if (selectedComponent) {
      updateComponent(selectedComponent.id, {
        props: {
          ...selectedComponent.props,
          [key]: value,
        },
      });
    }
  };

  const handleStyleChange = (key: string, value: unknown) => {
    if (selectedComponent) {
      updateComponent(selectedComponent.id, {
        style: {
          ...selectedComponent.style,
          [key]: value,
        },
      });
    }
  };

  const renderPropsForm = () => {
    if (!selectedComponent) return null;

    return (
      <Form layout="vertical" size="small">
        {Object.entries(selectedComponent.props).map(([key, value]) => {
          const type = typeof value;
          
          switch (type) {
            case 'string':
              return (
                <Form.Item key={key} label={key}>
                  <Input
                    value={value as string}
                    onChange={(e) => handlePropsChange(key, e.target.value)}
                  />
                </Form.Item>
              );
            case 'number':
              return (
                <Form.Item key={key} label={key}>
                  <InputNumber
                    value={value as number}
                    onChange={(val) => handlePropsChange(key, val)}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              );
            default:
              return (
                <Form.Item key={key} label={key}>
                  <Input
                    value={String(value)}
                    onChange={(e) => handlePropsChange(key, e.target.value)}
                  />
                </Form.Item>
              );
          }
        })}
      </Form>
    );
  };

  const renderStyleForm = () => {
    if (!selectedComponent) return null;

    const styleFields = [
      { key: 'width', label: '宽度', type: 'number' },
      { key: 'height', label: '高度', type: 'number' },
      { key: 'backgroundColor', label: '背景色', type: 'color' },
      { key: 'color', label: '文字颜色', type: 'color' },
      { key: 'fontSize', label: '字体大小', type: 'number' },
      { key: 'padding', label: '内边距', type: 'number' },
      { key: 'margin', label: '外边距', type: 'number' },
      { key: 'borderRadius', label: '圆角', type: 'number' },
    ];

    return (
      <Form layout="vertical" size="small">
        {styleFields.map(({ key, label, type }) => {
          const value = (selectedComponent.style as Record<string, unknown>)[key];
          
          switch (type) {
            case 'number':
              return (
                <Form.Item key={key} label={label}>
                  <InputNumber
                    value={typeof value === 'number' ? value : undefined}
                    onChange={(val) => handleStyleChange(key, val)}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              );
            case 'color':
              return (
                <Form.Item key={key} label={label}>
                  <ColorPicker
                    value={typeof value === 'string' ? value : undefined}
                    onChange={(color) => handleStyleChange(key, color?.toHexString())}
                  />
                </Form.Item>
              );
            default:
              return (
                <Form.Item key={key} label={key}>
                  <Input
                    value={String(value || '')}
                    onChange={(e) => handleStyleChange(key, e.target.value)}
                  />
                </Form.Item>
              );
          }
        })}
      </Form>
    );
  };

  const renderEventsForm = () => {
    if (!selectedComponent) return null;

    return (
      <div className="un-p-4 un-text-gray-500">
        事件配置功能开发中...
      </div>
    );
  };

  if (!selectedComponent) {
    return (
      <div className={`un-p-4 un-text-gray-500 un-text-center ${className || ''}`}>
        <div className="un-text-lg un-mb-2">🔍</div>
        <div>请选择一个组件进行配置</div>
      </div>
    );
  }

  // 生成 Tabs items
  const tabItems = [
    {
      key: 'props',
      label: '属性',
      children: (
        <div>
          {renderPropsForm()}
        </div>
      ),
    },
    {
      key: 'style',
      label: '样式',
      children: (
        <div>
          {renderStyleForm()}
        </div>
      ),
    },
    {
      key: 'events',
      label: '事件',
      children: (
        <div>
          {renderEventsForm()}
        </div>
      ),
    },
  ];

  return (
    <div className={`un-h-full un-flex un-flex-col ${className || ''}`}>
      <div className="un-p-4 un-border-b-gray-200">
        <div className="un-font-medium">{selectedComponent.name}</div>
        <div className="un-text-sm un-text-gray-500">{selectedComponent.type}</div>
      </div>
      
      <div className="un-flex-1 un-px-2 un-overflow-auto">
        <Tabs defaultActiveKey="props" size="small" items={tabItems} />
      </div>
    </div>
  );
}; 