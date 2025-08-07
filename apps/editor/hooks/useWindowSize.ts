import { useSize } from 'ahooks';

/**
 * 使用窗口大小
 */
export function useWindowSize() {
  const size = useSize(document.body);
  
  return {
    width: size?.width || 0,
    height: size?.height || 0,
  };
} 