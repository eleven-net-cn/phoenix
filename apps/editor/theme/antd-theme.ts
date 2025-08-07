import type { ThemeConfig } from 'antd';

// 设计 Token 系统
const designTokens = {
  // 颜色系统
  colors: {
    // 主色调 - 基于 Ant Design 的蓝色系
    primary: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#1890ff', // Ant Design 主色
      600: '#096dd9',
      700: '#0050b3',
      800: '#003a8c',
      900: '#002766',
    },
    
    // 功能色
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
    
    // 中性色
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#f0f0f0',
      300: '#d9d9d9',
      400: '#bfbfbf',
      500: '#8c8c8c',
      600: '#595959',
      700: '#434343',
      800: '#262626',
      900: '#1f1f1f',
    },
    
    // 编辑器专用色
    editor: {
      canvas: '#fafafa',
      panel: '#ffffff',
      border: '#e8e8e8',
      shadow: 'rgba(0, 0, 0, 0.06)',
      overlay: 'rgba(0, 0, 0, 0.45)',
      highlight: '#e6f7ff',
      selection: '#bae7ff',
    }
  },
  
  // 间距系统
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  // 圆角系统
  borderRadius: {
    none: '0px',
    sm: '2px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  
  // 阴影系统
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // 字体系统
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    // 主色调
    colorPrimary: designTokens.colors.primary[500],
    colorSuccess: designTokens.colors.success,
    colorWarning: designTokens.colors.warning,
    colorError: designTokens.colors.error,
    colorInfo: designTokens.colors.info,
    
    // 背景色
    colorBgContainer: designTokens.colors.editor.panel,
    colorBgLayout: designTokens.colors.editor.canvas,
    colorBgElevated: designTokens.colors.editor.panel,
    
    // 边框色
    colorBorder: designTokens.colors.editor.border,
    colorBorderSecondary: designTokens.colors.gray[200],
    
    // 文字色
    colorText: designTokens.colors.gray[800],
    colorTextSecondary: designTokens.colors.gray[600],
    colorTextTertiary: designTokens.colors.gray[500],
    
    // 字体
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: parseInt(designTokens.typography.fontSize.base),
    
    // 圆角
    borderRadius: parseInt(designTokens.borderRadius.md),
    
    // 间距
    padding: parseInt(designTokens.spacing.md),
    margin: parseInt(designTokens.spacing.md),
    
    // 控制高度
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },
  
  components: {
    // 按钮
    Button: {
      borderRadius: parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
      paddingInline: 16,
      fontWeight: 500,
    },
    
    // 输入框
    Input: {
      borderRadius: parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
      paddingInline: 12,
    },
    
    // 选择器
    Select: {
      borderRadius: parseInt(designTokens.borderRadius.md),
      controlHeight: 32,
    },
    
    // 表格
    Table: {
      borderRadius: parseInt(designTokens.borderRadius.md),
      headerBg: designTokens.colors.gray[50],
      headerColor: designTokens.colors.gray[700],
    },
    
    // 卡片
    Card: {
      borderRadius: parseInt(designTokens.borderRadius.lg),
      boxShadow: designTokens.shadows.sm,
      headerBg: designTokens.colors.gray[50],
    },
    
    // 面板
    Collapse: {
      borderRadius: parseInt(designTokens.borderRadius.md),
      headerBg: designTokens.colors.gray[50],
    },
    
    // 抽屉
    Drawer: {
      colorBgElevated: designTokens.colors.editor.panel,
    },
    
    // 模态框
    Modal: {
      borderRadius: parseInt(designTokens.borderRadius.lg),
    },
    
    // 消息
    Message: {
      borderRadius: parseInt(designTokens.borderRadius.md),
    },
    
    // 通知
    Notification: {
      borderRadius: parseInt(designTokens.borderRadius.md),
    },
  },
}; 