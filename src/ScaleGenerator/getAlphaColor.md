---
nav:
  title: Documentation
  path: /documentation
group:
  title: Utilities
  path: utilities
  order: 4
---

# getAlphaColor

provide the front and background color, output the alpha color

## Example

```ts
import { getAlphaColor } from '@canisminor/colors';

const alphaColor = getAlphaColor('#333', '000');
// => #ffffff33
```

## API

| name            | type     | optional | default | description |
| --------------- | -------- | -------- | ------- | ----------- |
| frontColor      | `string` | `false`  | `n/a`   |             |
| backgroundColor | `string` | `false`  | `n/a`   |             |
