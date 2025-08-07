/**
 * Phoenix UnoCSS Package
 * Main entry point for the UnoCSS design system
 */

export { baseUnoConfig } from './config';
export { default as config } from './config';
export { default as designTokens } from './tokens';
export { designTokens as tokens } from './tokens';

// Re-export types
export type { DesignTokens } from './tokens';
