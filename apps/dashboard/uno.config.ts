import { defineConfig } from 'unocss';
import { baseUnoConfig, designTokens } from '@phoenix/shared-unocss';

// Dashboard-specific design tokens
const dashboardTokens = {
  colors: {
    // Dashboard-specific colors
    dashboard: {
      sidebar: '#001529',
      header: '#ffffff',
      content: '#f0f2f5',
      card: '#ffffff',
      border: '#e8e8e8',
      shadow: 'rgba(0, 0, 0, 0.06)',
    }
  },
};

export default defineConfig({
  ...baseUnoConfig,
  
  // Dashboard-specific rules
  rules: [
    // Dashboard layout rules
    ['un-dashboard-layout', { 
      height: '100vh', 
      display: 'flex', 
      'background-color': dashboardTokens.colors.dashboard.content,
    }],
    
    ['un-dashboard-sidebar', { 
      width: '256px', 
      'background-color': dashboardTokens.colors.dashboard.sidebar,
      'box-shadow': designTokens.shadows.lg,
    }],
    
    ['un-dashboard-main', { 
      flex: '1', 
      display: 'flex', 
      'flex-direction': 'column',
      overflow: 'hidden',
    }],
    
    ['un-dashboard-header', { 
      height: '64px', 
      'background-color': dashboardTokens.colors.dashboard.header,
      'border-bottom': `1px solid ${dashboardTokens.colors.dashboard.border}`,
      'box-shadow': designTokens.shadows.sm,
    }],
    
    ['un-dashboard-content', { 
      flex: '1', 
      padding: designTokens.spacing.lg,
      overflow: 'auto',
    }],
    
    // Card rules
    ['un-dashboard-card', {
      'background-color': dashboardTokens.colors.dashboard.card,
      'border-radius': designTokens.borderRadius.lg,
      'box-shadow': designTokens.shadows.sm,
      'border': `1px solid ${dashboardTokens.colors.dashboard.border}`,
    }],
    
    ['un-dashboard-card-header', {
      padding: designTokens.spacing.lg,
      'border-bottom': `1px solid ${dashboardTokens.colors.dashboard.border}`,
    }],
    
    ['un-dashboard-card-body', {
      padding: designTokens.spacing.lg,
    }],
    
    // Stat card rules
    ['un-stat-card', {
      'background-color': dashboardTokens.colors.dashboard.card,
      'border-radius': designTokens.borderRadius.lg,
      'box-shadow': designTokens.shadows.sm,
      padding: designTokens.spacing.lg,
      'border': `1px solid ${dashboardTokens.colors.dashboard.border}`,
    }],
    
    ['un-stat-card-primary', {
      'border-left': `4px solid ${designTokens.colors.primary[500]}`,
    }],
    
    ['un-stat-card-success', {
      'border-left': `4px solid ${designTokens.colors.success}`,
    }],
    
    ['un-stat-card-warning', {
      'border-left': `4px solid ${designTokens.colors.warning}`,
    }],
    
    ['un-stat-card-error', {
      'border-left': `4px solid ${designTokens.colors.error}`,
    }],
    
    // Table rules
    ['un-dashboard-table', {
      'background-color': dashboardTokens.colors.dashboard.card,
      'border-radius': designTokens.borderRadius.lg,
      'box-shadow': designTokens.shadows.sm,
      overflow: 'hidden',
    }],
    
    ['un-dashboard-table-header', {
      'background-color': designTokens.colors.gray[50],
      'border-bottom': `1px solid ${dashboardTokens.colors.dashboard.border}`,
    }],
    
    // Navigation rules
    ['un-sidebar-nav', {
      padding: designTokens.spacing.md,
    }],
    
    ['un-sidebar-nav-item', {
      padding: designTokens.spacing.sm,
      'border-radius': designTokens.borderRadius.md,
      color: designTokens.colors.gray[300],
      cursor: 'pointer',
      transition: `all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.ease}`,
    }],
    
    ['un-sidebar-nav-item:hover', {
      'background-color': 'rgba(255, 255, 255, 0.1)',
      color: designTokens.colors.gray[100],
    }],
    
    ['un-sidebar-nav-item-active', {
      'background-color': designTokens.colors.primary[500],
      color: 'white',
    }],
  ],
  
  // Dashboard-specific shortcuts
  shortcuts: {
    ...baseUnoConfig.shortcuts,
    
    // Dashboard shortcuts
    'un-dashboard-container': 'un-min-h-screen un-bg-gray-50',
    'un-dashboard-card-base': 'un-bg-white un-border un-border-gray-200 un-rounded-lg un-shadow-sm',
    'un-dashboard-button': 'un-px-4 un-py-2 un-text-sm un-font-medium un-rounded-md un-transition-all un-duration-200',
    'un-dashboard-button-primary': 'un-dashboard-button un-bg-primary-500 un-text-white hover:un-bg-primary-600',
    'un-dashboard-button-secondary': 'un-dashboard-button un-bg-gray-100 un-text-gray-700 hover:un-bg-gray-200',
    
    // Stat shortcuts
    'un-stat-number': 'un-text-2xl un-font-bold un-text-gray-900',
    'un-stat-label': 'un-text-sm un-font-medium un-text-gray-500',
    'un-stat-change': 'un-text-sm un-font-medium',
    'un-stat-change-positive': 'un-stat-change un-text-success',
    'un-stat-change-negative': 'un-stat-change un-text-error',
    
    // Table shortcuts
    'un-table-header': 'un-px-6 un-py-3 un-text-left un-text-xs un-font-medium un-text-gray-500 un-uppercase un-tracking-wider',
    'un-table-cell': 'un-px-6 un-py-4 un-whitespace-nowrap un-text-sm un-text-gray-900',
    'un-table-row': 'hover:un-bg-gray-50 un-transition-colors un-duration-150',
    
    // Sidebar shortcuts
    'un-sidebar-item': 'un-flex un-items-center un-px-4 un-py-2 un-text-gray-300 hover:un-bg-white hover:un-bg-opacity-10 hover:un-text-white un-transition-all un-duration-200',
    'un-sidebar-item-active': 'un-sidebar-item un-bg-primary-500 un-text-white',
    
    // Page shortcuts
    'un-page-header': 'un-mb-6 un-pb-4 un-border-b un-border-gray-200',
    'un-page-title': 'un-text-2xl un-font-bold un-text-gray-900',
    'un-page-subtitle': 'un-text-sm un-text-gray-500 un-mt-1',
  },
}); 