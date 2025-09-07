import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '📷照片集',
    collapsed: true,
    items: [
      {
        text: '高一',
        collapsed: true,
        items: [
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
      },
    ],
  },
]