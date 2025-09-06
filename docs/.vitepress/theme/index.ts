// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import "vitepress-markdown-timeline/dist/theme/index.css";
import './style.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';


export default {
  extends: DefaultTheme,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: "gfclassb/gfclassb.github.io", //仓库
      repoId: "R_kgDOPqfuow", //仓库ID
      category: 'General', // 讨论分类
      categoryId: "DIC_kwDOPqfuo84CvD0h", //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    )
  }}
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
