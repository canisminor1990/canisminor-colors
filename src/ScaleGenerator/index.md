---
nav:
  title: Documentation
  path: /documentation
group:
  title: Utilities
  path: utilities
  order: 4
---

# scaleGenerator

a tool to generate color scale

## How to use

```ts
import { scaleGenerator } from '@canisminor/colors';

const scale = scaleGenerator.gen('#f5222d');

console.log(scale.light);
// => ["#fffbfb","#fef8f7", ... ]

console.log(scale.lightA);
// => ["#ff373705","#e650370a", ... ]

console.log(scale.dark);
// => ["#1c1313","#291313", ... ]

console.log(scale.darkA);
// => ["#ffadad1c","#f170702b", ... ]

console.log(scale.palettes());
/* => 
{
  "appBackground": "#fffbfb",
  "subtleBackground": "#fef8f7",
  "elementBackground": "#fff0f0",
  "hoveredElementBackground": "#fde6e4",
  "activeElementBackground": "#fdd7d6",
  "subtleBorder": "#fac5c2",
  "elementBorder": "#f8aea9",
  "hoveredElementBorder": "#ed8f89",
  "solidBackground": "#f6242f",
  "hoveredSolidBackground": "#ed0e26",
  "lowContrastText": "#ca2c2e",
  "highContrastText": "#351715"
}
*/
```

## Example

Genertate ant design color

### Dust Red / 薄暮

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#f5222d');
export default () => <ScalePreview scale={scale} />;
```

### Volcano / 火山

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#fa541c');
export default () => <ScalePreview scale={scale} />;
```

### Sunset Orange / 日暮

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#fa8c16');
export default () => <ScalePreview scale={scale} />;
```

### Calendula Gold / 金盏花

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#faad14');
export default () => <ScalePreview scale={scale} />;
```

### Sunrise Yellow / 日出

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#fadb14');
export default () => <ScalePreview scale={scale} />;
```

### Lime / 青柠

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#a0d911');
export default () => <ScalePreview scale={scale} />;
```

### Polar Green / 极光绿

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#52c41a');
export default () => <ScalePreview scale={scale} />;
```

### Cyan / 明青

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#13c2c2');
export default () => <ScalePreview scale={scale} />;
```

### Daybreak Blue / 拂晓蓝

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#1890ff');
export default () => <ScalePreview scale={scale} />;
```

### Geek Blue / 极客蓝

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#2f54eb');
export default () => <ScalePreview scale={scale} />;
```

### Golden Purple / 酱紫

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#722ed1');
export default () => <ScalePreview scale={scale} />;
```

### Magenta / 法式洋红

```tsx
import React from 'react';
import { ScalePreview, scaleGenerator } from '@canisminor/colors';
const scale = scaleGenerator.gen('#eb2f96');
export default () => <ScalePreview scale={scale} />;
```
