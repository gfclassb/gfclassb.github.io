import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import timeline from "vitepress-markdown-timeline"
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import { nav } from './configs'
import { sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GFCB Database",
  description: "广大附中2025级B班综合数据库。",
  vite: {
    plugins: [pagefindPlugin()],
  },
  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'github-dark',
    },
    config: (md) => {
      md.use(markdownItTaskCheckbox) //todo
    },
     //行号显示
    lineNumbers: true, 

    //时间线
    config: (md) => {
      md.use(timeline);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gfclassb/gfclassb.github.io#' },
      { icon: 'mail', link: 'mailto: 3481522072@qq.com' }
    ]
  }
})
