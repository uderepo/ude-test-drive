import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

// wrap children with whatever wraps your app
export default function CanvasWrapper({ children }: { children?: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}
