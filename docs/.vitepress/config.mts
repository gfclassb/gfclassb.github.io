import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import timeline from "vitepress-markdown-timeline"
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import { nav } from './configs'
import { sidebar } from './configs'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: false, // 是否展示更新日期，仅在文章页显示
    showCategory: false, // 是否展示分类
    showTag: false, // 是否展示标签
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
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
     //行号显示
    lineNumbers: true, 

    //时间线
    config: (md) => {
      md.use(timeline);
      md.use(markdownItTaskCheckbox) //todo
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
