---
nav:
  title: Documentation
  path: /documentation
group:
  title: Components
  path: components
  order: 3
---

# ThemeProvider

Use `ThemeProvider` to provide theme vars.

## Example

```tsx
import React from 'react';
import { ThemeProvider, useTheme } from '@canisminor/colors';

const App = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: theme.primary.solidBackground,
      }}
    />
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

With styled

```ts
import styled from '@emotion/styled';

const Text = styled`
  color: ${({ theme }) => theme.primary.highContrastText}
`;
```

<API></API>

### IThemeConfig

| name | type | optional | default | description |
| --- | --- | --- | --- | --- |
| css | `boolean` | `false` | `n/a` |  |
| cssUrl | `{ light: string; dark: string; }` | `false` | `n/a` |  |
| theme | `{ primary: IColorScale; secondary: IColorScale; teriary: IColorScale; neutral: IColorScale; error: IColorScale; warning: IColorScale; success: IColorScale; info: IColorScale; }` | `false` | `n/a` |  |

### IThemeSchema

| name              | type            | optional | default | description |
| ----------------- | --------------- | -------- | ------- | ----------- |
| isDarkMode        | `boolean`       | `false`  | `n/a`   |             |
| primary           | `IColorPalette` | `false`  | `n/a`   |             |
| secondary         | `IColorPalette` | `false`  | `n/a`   |             |
| teriary           | `IColorPalette` | `false`  | `n/a`   |             |
| neutral           | `IColorPalette` | `false`  | `n/a`   |             |
| error             | `IColorPalette` | `false`  | `n/a`   |             |
| warning           | `IColorPalette` | `false`  | `n/a`   |             |
| success           | `IColorPalette` | `false`  | `n/a`   |             |
| info              | `IColorPalette` | `false`  | `n/a`   |             |
| primaryA          | `IColorPalette` | `false`  | `n/a`   |             |
| secondaryA        | `IColorPalette` | `false`  | `n/a`   |             |
| teriaryA          | `IColorPalette` | `false`  | `n/a`   |             |
| neutralA          | `IColorPalette` | `false`  | `n/a`   |             |
| errorA            | `IColorPalette` | `false`  | `n/a`   |             |
| warningA          | `IColorPalette` | `false`  | `n/a`   |             |
| successA          | `IColorPalette` | `false`  | `n/a`   |             |
| infoA             | `IColorPalette` | `false`  | `n/a`   |             |
| inversePrimary    | `IColorPalette` | `false`  | `n/a`   |             |
| inverseSecondary  | `IColorPalette` | `false`  | `n/a`   |             |
| inverseTeriary    | `IColorPalette` | `false`  | `n/a`   |             |
| inverseNeutral    | `IColorPalette` | `false`  | `n/a`   |             |
| inverseError      | `IColorPalette` | `false`  | `n/a`   |             |
| inverseWarning    | `IColorPalette` | `false`  | `n/a`   |             |
| inverseSuccess    | `IColorPalette` | `false`  | `n/a`   |             |
| inverseInfo       | `IColorPalette` | `false`  | `n/a`   |             |
| inversePrimaryA   | `IColorPalette` | `false`  | `n/a`   |             |
| inverseSecondaryA | `IColorPalette` | `false`  | `n/a`   |             |
| inverseTeriaryA   | `IColorPalette` | `false`  | `n/a`   |             |
| inverseNeutralA   | `IColorPalette` | `false`  | `n/a`   |             |
| inverseErrorA     | `IColorPalette` | `false`  | `n/a`   |             |
| inverseWarningA   | `IColorPalette` | `false`  | `n/a`   |             |
| inverseSuccessA   | `IColorPalette` | `false`  | `n/a`   |             |
| inverseInfoA      | `IColorPalette` | `false`  | `n/a`   |             |

### IColorPalette

| name                     | type     | optional | default | description |
| ------------------------ | -------- | -------- | ------- | ----------- |
| appBackground            | `string` | `false`  | `n/a`   |             |
| subtleBackground         | `string` | `false`  | `n/a`   |             |
| elementBackground        | `string` | `false`  | `n/a`   |             |
| hoveredElementBackground | `string` | `false`  | `n/a`   |             |
| activeElementBackground  | `string` | `false`  | `n/a`   |             |
| subtleBorder             | `string` | `false`  | `n/a`   |             |
| elementBorder            | `string` | `false`  | `n/a`   |             |
| hoveredElementBorder     | `string` | `false`  | `n/a`   |             |
| solidBackground          | `string` | `false`  | `n/a`   |             |
| hoveredSolidBackground   | `string` | `false`  | `n/a`   |             |
| lowContrastText          | `string` | `false`  | `n/a`   |             |
| highContrastText         | `string` | `false`  | `n/a`   |             |
