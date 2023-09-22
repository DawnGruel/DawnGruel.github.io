import { defineConfig } from 'vitepress'

const nav = [
  { text: '首页', link: '/' },
  {
    text: '文档',
    items: [
      { text: '笔记', link: 'markdown/note/plan' },
      { text: 'VitePress', link: 'markdown/vitepress/create' },
      { text: 'web技术', link: 'markdown/web/' },
      { text: 'Go', link: 'markdown/golang/' },
    ],
  },
  {
    text: '《互联万物志》',
    items: [
      { text: 'RetroArch', link: 'markdown/RetroArch/' },
      { text: 'Aseprite', link: 'markdown/gameDevelopment/Aseprite/' },
    ]
  },
  { text: '资料库', link: 'markdown/referenceRoom/index' },
]

const sidebar = {
  'markdown/note/': [
    {
      text: '笔记',
      // collapsed: true,
      items: [
        { text: '执行计划', link: 'markdown/note/plan' },
        { text: '局域网共享文件指南', link: 'markdown/note/shareFile' },
      ]
    }
  ],
  '/markdown/vitepress/': [{
    text: 'VitePress使用指南',
    // collapsed: true,
    items: [
      { text: '创建项目', link: '/markdown/vitepress/create' },
    ]
  },
  {
    text: 'MarkDown',
    // collapsed: true,
    items: [
      { text: '基本语法句法', link: '/markdown/vitepress/mdIndex' },
      { text: '高级代码块', link: '/markdown/vitepress/mdCode' },
      { text: '全部emoji', link: '/markdown/vitepress/emoji' },
    ]
  }],
  '/markdown/golang/': [{
    text: 'Go学习指南',
    // collapsed: true,
    items: [
      {
        text: 'Go基本概念知识',
        link: '/markdown/golang/'
      },
      {
        text: 'Go基本结构和要素',
        link: '/markdown/golang/structure_elements'
      },
      {
        text: 'Go内置类型与内置函数',
        link: '/markdown/golang/built-in'
      },
      {
        text: 'Init和Main',
        link: '/markdown/golang/init&main'
      },
      {
        text: '函数与类型',
        link: '/markdown/golang/function&types'
      },
      {
        text: '运算符',
        link: '/markdown/golang/operator'
      },
      {
        text: '下划线',
        link: '/markdown/golang/underline'
      },
      {
        text: '变量和常量',
        link: '/markdown/golang/let&const'
      },
      {
        text: '值类型和引用类型',
        link: '/markdown/golang/value&reference_type'
      },
      {
        text: '基本类型',
        link: '/markdown/golang/baseType'
      },
      {
        text: '数组Array',
        link: '/markdown/golang/array'
      },
      
    ]
  },
  {
    text: '相关文档',
    items: [
      {
        text: 'Air使用指南',
        link: '/markdown/golang/other/air'
      },
      {
        text: 'fmt使用指南',
        link: '/markdown/golang/other/fmt'
      },
      {
        text: 'OS使用指南',
        link: '/markdown/golang/other/os'
      },
      {
        text: 'Gin使用指南',
        link: '/markdown/golang/other/gin'
      },
      {
        text: 'yaml使用指南',
        link: '/markdown/golang/other/yaml'
      }
    ],
  }],
  'markdown/gameDevelopment/': [{
    text: '游戏开发',
    items: [{
      text: '首页',
      link: '/markdown/gameDevelopment/'
    },
    {
      text: 'Aseprite',
      link: '/markdown/gameDevelopment/Aseprite/'
    }]
  }],
  '/markdown/referenceRoom/': [{
    text: '资料库',
    // collapsed: true,
    items: [
      {
        text: '资料库导航',
        link: '/markdown/referenceRoom/'
      },
      {
        text: '前端相关',
        link: '/markdown/referenceRoom/web'
      },

    ]
  }],
}

export default defineConfig({
  lang: 'zh-cn',
  //@ts-ignore
  base: process.env.NODE_ENV === 'production' ? '/blog/' : '/', //线上环境需要解注释  目标全链：dawngruel.github.io/docs/blog/
  outDir: './blog',
  srcDir: 'docs',
  // 本地缓存
  cacheDir: './.vitepress/.vite',
  // 忽略的文件
  srcExclude:[],
  // assetsInlineLimit: 20000,
  head: [
    ['link', { rel: 'icon', href: '../favicon.ico' }],
  ],
  title: "曦粥的博客",
  description: "A VitePress Site",
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DawnGruel/DawnGruel.github.io' }
    ],

    editLink: {
      pattern: 'https://github.com/DawnGruel/DawnGruel.github.io/tree/dev/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      //@ts-ignore
      message: '南城北望风轻起，北望静心此时鱼',
      copyright: 'Copyright © 2023-present Evan You'
    }
  }
})