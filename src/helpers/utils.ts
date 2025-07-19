import slateConfig from '~@/slate.config';
import type { ThemeMode } from '@/typings/config';

/**
 * @description: Get full title
 * @param title
 */
export function getFullTitle(title: string) {
  return `${title}${!!title && slateConfig.title ? ' | ' : ''}${slateConfig.title}`;
}

/**
 * @description: Set theme mode
 * @param mode
 */
export function setThemeMode(mode: ThemeMode) {
  document.documentElement.className = mode;
  document.documentElement.dataset.theme = mode;
}

