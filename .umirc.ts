import { defineConfig } from 'dumi';
import path from 'path';

const resolve = (dir: string): string => path.resolve(__dirname, dir);
// more config: https://d.umijs.org/zh-CN/config
export default defineConfig({
  base: '/canisminor-colors',
  publicPath: '/canisminor-colors/',
  exportStatic: {},
  title: '@canisminor/colors',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@material/material-color-utilities': resolve('packages/material-color-utilities/'),
  },
});
