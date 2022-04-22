import React, { lazy, Suspense } from 'react';
import { usePrefersColor } from 'dumi/theme';

const DarkTheme = lazy(() => import('./darkTheme'));
const LightTheme = lazy(() => import('./lightTheme'));

const ThemeProvider: React.FC = ({ children }: any) => {
  const [color] = usePrefersColor();
  return (
    <>
      <Suspense>{color === 'light' ? <DarkTheme /> : <LightTheme />}</Suspense>
      {children}
    </>
  );
};

export default ThemeProvider;
