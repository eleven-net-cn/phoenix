import { defineConfig } from 'unocss';
import { baseUnoConfig, designTokens } from '@phoenix/shared-unocss';

// Website-specific design tokens
const websiteTokens = {
  colors: {
    // Website-specific colors
    website: {
      hero: '#f8fafc',
      section: '#ffffff',
      footer: '#1f2937',
      accent: '#f59e0b',
    },
  },
};

export default defineConfig({
  ...baseUnoConfig,

  // Website-specific rules
  rules: [
    // Website layout rules
    ['un-website-container', {
      'max-width': '1200px',
      margin: '0 auto',
      padding: `0 ${designTokens.spacing.md}`,
    }],

    ['un-website-header', {
      'background-color': websiteTokens.colors.website.section,
      'border-bottom': `1px solid ${designTokens.colors.gray[200]}`,
      'box-shadow': designTokens.shadows.sm,
    }],

    ['un-website-hero', {
      'background-color': websiteTokens.colors.website.hero,
      padding: `${designTokens.spacing.xxl} 0`,
    }],

    ['un-website-section', {
      padding: `${designTokens.spacing.xxl} 0`,
    }],

    ['un-website-footer', {
      'background-color': websiteTokens.colors.website.footer,
      color: 'white',
      padding: `${designTokens.spacing.xl} 0`,
    }],
  ],

  // Website-specific shortcuts - 简化版本
  shortcuts: {
    // 只保留基本的 shortcuts，移除可能有问题的复杂 shortcuts
    'un-website-section-alt': 'un-bg-gray-50',
    'un-container-padding': 'un-px-4 md:un-px-6 lg:un-px-8',
  },
});
