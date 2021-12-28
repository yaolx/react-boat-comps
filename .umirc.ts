import { defineConfig } from 'dumi'
const repo = 'react-boat-comps'
// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'react-boat-comps',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mfsu: {},
  // github page
  base: `/${repo}/`,
  publicPath: `/${repo}/`
})
