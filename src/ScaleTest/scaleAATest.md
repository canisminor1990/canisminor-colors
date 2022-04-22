---
nav:
  title: Documentation
  path: /documentation
group:
  title: Utilities
  path: utilities
  order: 4
---

# scaleTest

a test suite for testing scale contrast in accordance with WCAG guidelines.

## How to use

```ts
import { scaleGenerator, scaleAATest } from '@canisminor/colors';

const scale = scaleGenerator.gen('#f5222d');
const testResult = scaleAATest(scale);

console.log(testResult);
/*
{
    "lowContrastTextLight": {
        "num": 4.9,
        "targetNum": 4.5,
        "result": 1,
        "shield": "https://img.shields.io/badge/AA-pass-brightgreen"
    },
    "lowContrastTextDark": {
        "num": 5.2,
        "targetNum": 4.5,
        "result": 1,
        "shield": "https://img.shields.io/badge/AA-pass-brightgreen"
    },
    "highContrastTextLight": {
        "num": 4,
        "targetNum": 3,
        "result": 1,
        "shield": "https://img.shields.io/badge/AA-pass-brightgreen"
    },
    "highContrastTextDark": {
        "num": 5.2,
        "targetNum": 3,
        "result": 1,
        "shield": "https://img.shields.io/badge/AA-pass-brightgreen"
    },
    "all": {
        "result": true,
        "shield": "https://img.shields.io/badge/AA%20Test-100%25-brightgreen"
    }
}
 */
```

## Example

```tsx
import React from 'react';
import { scaleGenerator, scaleAATest } from '@canisminor/colors';

const scale = scaleGenerator.gen('#f5222d');
const testResult = scaleAATest(scale);

export default () => <img src={testResult.all.shield} />;
```
