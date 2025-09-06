import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import timeline from "vitepress-markdown-timeline"
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

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
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/contents.md' },
      { text: '时间线', link: '/timeline.md' }
    ],

    sidebar: [
      {
        text: '📷照册集',
        collapsed: false,
        item: [
          {
            text: '高一',
            collapsed: true,
            item: [
              {
                text: '军训',
                link: './photos/g1mt.md'
              },
            ],
          },
          {
            text:'高二',
            collapsed: true,
          },
          {
            text:'高三',
            collapsed: true,
          
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gfclassb/gfclassb.github.io#' },
      { icon: 'mail', link: 'mailto: 3481522072@qq.com' }
    ]
  }
})
