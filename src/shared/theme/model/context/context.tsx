import { createContext } from 'react';

/**
 * Тема приложения: удобные имена для компонентов экранов. Значений здесь нет —
 * только ссылки на CSS-переменные; значение живёт в `tokens.css` и больше нигде.
 */
export interface Theme {
  sys: {
    surface: string;
    onSurface: string;
    primary: string;
    onPrimary: string;
  };
}

export const theme: Theme = {
  sys: {
    surface: 'var(--sys-surface)',
    onSurface: 'var(--sys-on-surface)',
    primary: 'var(--sys-primary)',
    onPrimary: 'var(--sys-on-primary)',
  },
};

export const ThemeContext = createContext<Theme | null>(theme);
