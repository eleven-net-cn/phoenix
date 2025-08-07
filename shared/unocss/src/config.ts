import type { UserConfig } from 'unocss';
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import { designTokens } from './tokens';

/**
 * Base UnoCSS configuration with design tokens
 */
export const baseUnoConfig: UserConfig = {
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      strict: false,
      boolean: true,
    }),
  ],

  // Theme configuration
  theme: {
    colors: designTokens.colors,
    spacing: designTokens.spacing,
    borderRadius: designTokens.borderRadius,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.fontSize,
    fontWeight: designTokens.typography.fontWeight,
    animation: {
      duration: designTokens.animation.duration,
      easing: designTokens.animation.easing,
    },
  },

  // Common rules
  rules: [
    // Layout rules
    ['un-layout-container', {
      'max-width': '1200px',
      margin: '0 auto',
      padding: `0 ${designTokens.spacing.md}`,
    }],

    ['un-layout-full', {
      width: '100%',
      height: '100%',
    }],

    // Card rules
    ['un-card', {
      'background-color': 'white',
      'border-radius': designTokens.borderRadius.lg,
      'box-shadow': designTokens.shadows.sm,
      border: `1px solid ${designTokens.colors.gray[200]}`,
    }],

    ['un-card-header', {
      padding: designTokens.spacing.lg,
      'border-bottom': `1px solid ${designTokens.colors.gray[200]}`,
    }],

    ['un-card-body', {
      padding: designTokens.spacing.lg,
    }],

    // Button rules
    ['un-btn', {
      display: 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
      'border-radius': designTokens.borderRadius.md,
      'font-weight': designTokens.typography.fontWeight.medium,
      'text-decoration': 'none',
      transition: `all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.ease}`,
      cursor: 'pointer',
      border: 'none',
    }],

    ['un-btn-primary', {
      'background-color': designTokens.colors.primary[500],
      color: 'white',
    }],

    ['un-btn-primary:hover', {
      'background-color': designTokens.colors.primary[600],
      transform: 'translateY(-1px)',
      'box-shadow': designTokens.shadows.md,
    }],

    ['un-btn-secondary', {
      'background-color': designTokens.colors.gray[100],
      color: designTokens.colors.gray[700],
      border: `1px solid ${designTokens.colors.gray[300]}`,
    }],

    ['un-btn-secondary:hover', {
      'background-color': designTokens.colors.gray[200],
      'border-color': designTokens.colors.gray[400],
    }],
  ],

  // Common shortcuts
  shortcuts: {
    // Layout shortcuts
    'un-flex-center': 'un-flex un-items-center un-justify-center',
    'un-flex-between': 'un-flex un-items-center un-justify-between',
    'un-flex-col-center': 'un-flex un-flex-col un-items-center un-justify-center',
    'un-flex-col-between': 'un-flex un-flex-col un-items-center un-justify-between',

    // Spacing shortcuts
    'un-space-x-xs': 'un-space-x-1',
    'un-space-x-sm': 'un-space-x-2',
    'un-space-x-md': 'un-space-x-4',
    'un-space-x-lg': 'un-space-x-6',
    'un-space-x-xl': 'un-space-x-8',
    'un-space-x-xxl': 'un-space-x-12',

    'un-space-y-xs': 'un-space-y-1',
    'un-space-y-sm': 'un-space-y-2',
    'un-space-y-md': 'un-space-y-4',
    'un-space-y-lg': 'un-space-y-6',
    'un-space-y-xl': 'un-space-y-8',
    'un-space-y-xxl': 'un-space-y-12',

    // Form shortcuts
    'un-form-group': 'un-mb-4',
    'un-form-label': 'un-block un-text-sm un-font-medium un-text-gray-700 un-mb-1',
    'un-form-input': 'un-w-full un-px-3 un-py-2 un-border un-border-gray-300 un-rounded-md un-text-sm focus:un-ring-2 focus:un-ring-primary-500 focus:un-border-primary-500',
    'un-form-textarea': 'un-w-full un-px-3 un-py-2 un-border un-border-gray-300 un-rounded-md un-text-sm focus:un-ring-2 focus:un-ring-primary-500 focus:un-border-primary-500 un-resize-vertical',
    'un-form-select': 'un-w-full un-px-3 un-py-2 un-border un-border-gray-300 un-rounded-md un-text-sm focus:un-ring-2 focus:un-ring-primary-500 focus:un-border-primary-500',

    // State shortcuts
    'un-state-hover': 'hover:un-bg-gray-50 hover:un-border-primary-300',
    'un-state-active': 'un-bg-primary-50 un-border-primary-400 un-text-primary-700',
    'un-state-disabled': 'un-opacity-50 un-cursor-not-allowed',
    'un-state-focus': 'focus:un-ring-2 focus:un-ring-primary-500 focus:un-outline-none',

    // Text shortcuts
    'un-text-primary': 'un-text-primary-500',
    'un-text-success': 'un-text-success',
    'un-text-warning': 'un-text-warning',
    'un-text-error': 'un-text-error',
    'un-text-muted': 'un-text-gray-500',

    // Background shortcuts
    'un-bg-primary': 'un-bg-primary-500',
    'un-bg-success': 'un-bg-success',
    'un-bg-warning': 'un-bg-warning',
    'un-bg-error': 'un-bg-error',
    'un-bg-muted': 'un-bg-gray-100',

    // Border shortcuts
    'un-border-primary': 'un-border-primary-500',
    'un-border-success': 'un-border-success',
    'un-border-warning': 'un-border-warning',
    'un-border-error': 'un-border-error',
    'un-border-muted': 'un-border-gray-200',

    // Responsive shortcuts
    'un-responsive-container': 'un-px-4 md:un-px-6 lg:un-px-8',
    'un-responsive-grid': 'un-grid un-grid-cols-1 md:un-grid-cols-2 lg:un-grid-cols-3 un-gap-6',
    'un-responsive-text': 'un-text-base md:un-text-lg lg:un-text-xl',

    // Animation shortcuts
    'un-transition-fast': 'un-transition-all un-duration-150',
    'un-transition-normal': 'un-transition-all un-duration-200',
    'un-transition-slow': 'un-transition-all un-duration-300',

    // Shadow shortcuts
    'un-shadow-sm': 'un-shadow-sm',
    'un-shadow-md': 'un-shadow-md',
    'un-shadow-lg': 'un-shadow-lg',
    'un-shadow-xl': 'un-shadow-xl',
  },
};

// Default configuration
export default defineConfig(baseUnoConfig);
