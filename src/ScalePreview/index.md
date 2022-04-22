---
nav:
  title: Documentation
  path: /documentation
group:
  title: Components
  path: components
  order: 3
---

# ScalePreview

Display the color scale.

## Example

Display scale with test result.

```tsx
import React from 'react';
import { ScalePreview, Tomato } from '@canisminor/colors';
export default () => <ScalePreview scale={Tomato} />;
```

Display scale without test result.

```tsx
import React from 'react';
import { ScalePreview, Tomato } from '@canisminor/colors';
export default () => <ScalePreview scale={Tomato} showTest={false} />;
```

<API></API>
