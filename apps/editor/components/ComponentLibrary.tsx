import React from 'react';
import { Input, Tabs, List, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ComponentConfig } from '../types';

// 基础组件配置
const componentConfigs: ComponentConfig[] = [
  {
    type: 'container',
    name: '容器',
    icon: '📦',
    category: 'container',
    props: [
      {
        key: 'title',
        label: '标题',
        type: 'string',
        defaultValue: '容器标题',
      },
    ],
    style: [
      {
        key: 'backgroundColor',
        label: '背景色',
        type: 'color',
        defaultValue: '#ffffff',
      },
      {
        key: 'padding',
        label: '内边距',
        type: 'number',
        defaultValue: 16,
      },
    ],
    events: [],
    defaultProps: {
      title: '容器标题',
    },
    defaultStyle: {
      backgroundColor: '#ffffff',
      padding: 16,
      border: '1px solid #d9d9d9',
      borderRadius: 6,
    },
  },
  {
    type: 'text',
    name: '文本',
    icon: '📝',
    category: 'display',
    props: [
      {
        key: 'content',
        label: '内容',
        type: 'textarea',
        defaultValue: '这是一段文本内容',
      },
    ],
    style: [
      {
        key: 'fontSize',
        label: '字体大小',
        type: 'number',
        defaultValue: 14,
      },
      {
        key: 'color',
        label: '字体颜色',
        type: 'color',
        defaultValue: '#000000',
      },
    ],
    events: [],
    defaultProps: {
      content: '这是一段文本内容',
    },
    defaultStyle: {
      fontSize: 14,
      color: '#000000',
    },
  },
  {
    type: 'button',
    name: '按钮',
    icon: '🔘',
    category: 'form',
    props: [
      {
        key: 'text',
        label: '按钮文本',
        type: 'string',
        defaultValue: '按钮',
      },
      {
        key: 'type',
        label: '按钮类型',
        type: 'select',
        defaultValue: 'primary',
        options: [
          { label: '主要', value: 'primary' },
          { label: '次要', value: 'default' },
          { label: '危险', value: 'danger' },
        ],
      },
    ],
    style: [
      {
        key: 'backgroundColor',
        label: '背景色',
        type: 'color',
        defaultValue: '#1890ff',
      },
    ],
    events: [
      {
        key: 'onClick',
        label: '点击事件',
        type: 'click',
        handler: 'console.log("按钮被点击")',
      },
    ],
    defaultProps: {
      text: '按钮',
      type: 'primary',
    },
    defaultStyle: {
      backgroundColor: '#1890ff',
      color: '#ffffff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
    },
  },
  {
    type: 'image',
    name: '图片',
    icon: '🖼️',
    category: 'display',
    props: [
      {
        key: 'src',
        label: '图片地址',
        type: 'string',
        defaultValue: 'https://via.placeholder.com/300x200',
      },
      {
        key: 'alt',
        label: '替代文本',
        type: 'string',
        defaultValue: '图片描述',
      },
    ],
    style: [
      {
        key: 'width',
        label: '宽度',
        type: 'number',
        defaultValue: 300,
      },
      {
        key: 'height',
        label: '高度',
        type: 'number',
        defaultValue: 200,
      },
    ],
    events: [],
    defaultProps: {
      src: 'https://via.placeholder.com/300x200',
      alt: '图片描述',
    },
    defaultStyle: {
      width: 300,
      height: 200,
      objectFit: 'cover',
    },
  },
];

// 按分类组织组件
const componentCategories = {
  container: componentConfigs.filter(c => c.category === 'container'),
  display: componentConfigs.filter(c => c.category === 'display'),
  form: componentConfigs.filter(c => c.category === 'form'),
};

interface ComponentLibraryProps {
  onComponentSelect: (component: ComponentConfig) => void;
}

export const ComponentLibrary: React.FC<ComponentLibraryProps> = ({ onComponentSelect }) => {
  const [searchText, setSearchText] = React.useState('');

  // 过滤组件
  const filteredComponents = React.useMemo(() => {
    if (!searchText) return componentCategories;
    
    const filtered = componentConfigs.filter(component =>
      component.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    return {
      container: filtered.filter(c => c.category === 'container'),
      display: filtered.filter(c => c.category === 'display'),
      form: filtered.filter(c => c.category === 'form'),
    };
  }, [searchText]);

  const handleComponentClick = (component: ComponentConfig) => {
    onComponentSelect(component);
  };

  // 生成 Tabs items
  const tabItems = [
    {
      key: 'container',
      label: '容器',
      children: (
        <List
          size="small"
          dataSource={filteredComponents.container}
          renderItem={(component) => (
            <List.Item
              className="un-component-item"
              onClick={() => handleComponentClick(component)}
            >
              <List.Item.Meta
                avatar={<Avatar>{component.icon}</Avatar>}
                title={component.name}
                description={component.type}
              />
            </List.Item>
          )}
        />
      ),
    },
    {
      key: 'display',
      label: '展示',
      children: (
        <List
          size="small"
          dataSource={filteredComponents.display}
          renderItem={(component) => (
            <List.Item
              className="un-component-item"
              onClick={() => handleComponentClick(component)}
            >
              <List.Item.Meta
                avatar={<Avatar>{component.icon}</Avatar>}
                title={component.name}
                description={component.type}
              />
            </List.Item>
          )}
        />
      ),
    },
    {
      key: 'form',
      label: '表单',
      children: (
        <List
          size="small"
          dataSource={filteredComponents.form}
          renderItem={(component) => (
            <List.Item
              className="un-component-item"
              onClick={() => handleComponentClick(component)}
            >
              <List.Item.Meta
                avatar={<Avatar>{component.icon}</Avatar>}
                title={component.name}
                description={component.type}
              />
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <div className="un-component-library">
      <div className="un-mb-4">
        <Input
          placeholder="搜索组件..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      
      <Tabs defaultActiveKey="container" size="small" items={tabItems} />
    </div>
  );
}; 