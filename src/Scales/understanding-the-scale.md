---
order: 2
nav:
  title: Documentation
  path: /documentation
group:
  title: Palette Composition
  path: palette-composition
  order: 2
---

# Understanding the scale

Learn which scale step is the most appropriate for each use case.

## Use Cases

There are 12 steps in each scale. Each step was designed for at least one specific use case.

This table is a simple overview of the most common use case for each step. However, there are many exceptions and caveats to factor in, which are covered in further detail below.

| Step | Use Case                                |
| ---- | --------------------------------------- |
| 0    | App background                          |
| 1    | Subtle background                       |
| 2    | UI element background                   |
| 3    | Hovered UI element background           |
| 4    | Active / Selected UI element background |
| 5    | Subtle borders and separators           |
| 6    | UI element border and focus rings       |
| 7    | Hovered UI element border               |
| 8    | Solid backgrounds                       |
| 9    | Hovered solid backgrounds               |
| 10   | Low-contrast text                       |
| 11   | High-contrast text                      |

## Demo

```ts
import { Blue } from '@canisminor/colors';

// light
const lightPalette: IColorPalette = Blue.palettes();
// lightA
const lightAPalette: IColorPalette = Blue.palettes(false, true);
// dark
const darkPalette: IColorPalette = Blue.palettes(true);
// darkA
const darkAPalette: IColorPalette = Blue.palettes(ture, false);
```

## API

| name | type | optional | default | description |
| --- | --- | --- | --- | --- |
| light | `string[]` | `false` | `n/a` |  |
| lightA | `string[]` | `false` | `n/a` |  |
| dark | `string[]` | `false` | `n/a` |  |
| darkA | `string[]` | `false` | `n/a` |  |
| palettes | `(isDark?: boolean \| undefined, isAlpha?: boolean \| undefined) => IColorPalette` | `false` | `n/a` |  |

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
