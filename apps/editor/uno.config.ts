import { defineConfig } from 'unocss';
import { baseUnoConfig, designTokens } from '@phoenix/shared-unocss';

// Editor-specific design tokens
const editorTokens = {
  colors: {
    // Editor-specific colors
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
};

export default defineConfig({
  ...baseUnoConfig,
  
  // Editor-specific rules
  rules: [
    // Editor layout rules
    ['un-editor-container', { 
      height: '100vh', 
      display: 'flex', 
      'flex-direction': 'column',
      'background-color': editorTokens.colors.editor.canvas,
    }],
    
    ['un-editor-header', { 
      height: '64px', 
      'background-color': editorTokens.colors.editor.panel,
      'border-bottom': `1px solid ${editorTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.sm,
    }],
    
    ['un-editor-main', { 
      flex: '1', 
      display: 'flex', 
      overflow: 'hidden',
      'background-color': editorTokens.colors.editor.canvas,
    }],
    
    ['un-editor-left-panel', { 
      width: '320px', 
      'background-color': editorTokens.colors.editor.panel,
      'border-right': `1px solid ${editorTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.md,
    }],
    
    ['un-editor-canvas', { 
      flex: '1', 
      'background-color': editorTokens.colors.editor.canvas,
      overflow: 'auto',
      position: 'relative',
    }],
    
    ['un-editor-right-panel', { 
      width: '320px', 
      'background-color': editorTokens.colors.editor.panel,
      'border-left': `1px solid ${editorTokens.colors.editor.border}`,
      'box-shadow': designTokens.shadows.md,
    }],
    
    // Component library rules
    ['un-component-library', {
      padding: designTokens.spacing.md,
    }],
    
    ['un-component-item', {
      padding: designTokens.spacing.sm,
      'border-radius': designTokens.borderRadius.md,
      'border': `1px solid ${editorTokens.colors.editor.border}`,
      'background-color': editorTokens.colors.editor.panel,
      cursor: 'pointer',
      transition: `all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.ease}`,
    }],
    
    ['un-component-item:hover', {
      'border-color': designTokens.colors.primary[400],
      'box-shadow': designTokens.shadows.sm,
      transform: 'translateY(-1px)',
    }],
    
    // Canvas rules
    ['un-canvas-container', {
      padding: designTokens.spacing.lg,
      'min-height': '100%',
    }],
    
    ['un-canvas-grid', {
      'background-image': `radial-gradient(circle, ${editorTokens.colors.editor.border} 1px, transparent 1px)`,
      'background-size': '20px 20px',
    }],
    
    // Inspector rules
    ['un-inspector', {
      padding: designTokens.spacing.md,
    }],
    
    ['un-inspector-section', {
      'margin-bottom': designTokens.spacing.lg,
    }],
    
    ['un-inspector-title', {
      'font-size': designTokens.typography.fontSize.sm,
      'font-weight': designTokens.typography.fontWeight.semibold,
      color: designTokens.colors.gray[700],
      'margin-bottom': designTokens.spacing.sm,
      'text-transform': 'uppercase',
      'letter-spacing': '0.05em',
    }],
    
    // Toolbar rules
    ['un-toolbar', {
      padding: designTokens.spacing.sm,
      'background-color': editorTokens.colors.editor.panel,
      'border-bottom': `1px solid ${editorTokens.colors.editor.border}`,
    }],
    
    ['un-toolbar-group', {
      display: 'flex',
      'align-items': 'center',
      gap: designTokens.spacing.xs,
    }],
    
    // Drag state rules
    ['un-drag-over', {
      'background-color': editorTokens.colors.editor.highlight,
      'border': `2px dashed ${designTokens.colors.primary[400]}`,
    }],
    
    ['un-selected', {
      outline: `2px solid ${designTokens.colors.primary[400]}`,
      'outline-offset': '2px',
    }],
  ],
  
  // Editor-specific shortcuts
  shortcuts: {
    ...baseUnoConfig.shortcuts,
    
    // Editor shortcuts
    'un-editor-panel': 'un-bg-white un-border un-border-gray-200 un-rounded-lg un-shadow-md',
    'un-editor-button': 'un-px-3 un-py-1.5 un-text-sm un-font-medium un-rounded-md un-transition-all un-duration-200',
    'un-editor-button-primary': 'un-editor-button un-bg-primary-500 un-text-white hover:un-bg-primary-600',
    'un-editor-button-secondary': 'un-editor-button un-bg-gray-100 un-text-gray-700 hover:un-bg-gray-200',
    
    // Component shortcuts
    'un-component-card': 'un-bg-white un-border un-border-gray-200 un-rounded-md un-p-3 un-shadow-sm hover:un-shadow-md un-transition-shadow un-duration-200',
    'un-component-icon': 'un-w-8 un-h-8 un-bg-gray-100 un-rounded-md un-flex un-items-center un-justify-center un-text-gray-600',
    
    // Canvas shortcuts
    'un-canvas-wrapper': 'un-relative un-bg-white un-border un-border-gray-200 un-rounded un-overflow-auto',
    'un-canvas-content': 'un-relative un-min-h-screen un-p-8',
    'un-canvas-empty': 'un-flex un-flex-col un-items-center un-justify-center un-min-h-screen un-text-gray-400',
    
    // Panel shortcuts
    'un-panel-header': 'un-p-4 un-border-b un-border-gray-200 un-bg-gray-50',
    'un-panel-body': 'un-p-4',
    'un-panel-footer': 'un-p-4 un-border-t un-border-gray-200 un-bg-gray-50',
  },
}); 