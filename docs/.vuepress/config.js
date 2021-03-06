const { path } = require('@vuepress/utils');

const base = process.env.BUILD_ENV ? process.env.BUILD_ENV : '/';

module.exports = {
  base: '/hdesign/',
  dest: path.resolve(__dirname, './dist'),
  lang: 'zh-CN',
  title: 'h-design',
  description: 'a Vue 3.x based component library for developers',
  bundler: '@vuepress/vite',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'h-design,ui,vue3,components,UI组件'
      }
    ],
    ['link', { rel: 'icon', href: base + 'h-logo.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/highlight.js@11.2.0/styles/rainbow.css'
      }
    ]
  ],

  alias: {
    packages: path.resolve(__dirname, '../../packages')
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../examples')
      }
    ]
  ],

  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    logo: '/h-logo.png',
    repo: 'https://github.com/hunterxing/h-design.git',
    editLink: false,

    navbar: [
      { text: '指南', link: '/' },
      {
        text: '组件',
        link: '/components/basic/grid',
        activeMatch: '/components/'
      },
      { text: '邢走在云端', link: 'http://notfound404.cn/notes/' }
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          children: ['/README.md']
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          children: [
            '/components/basic/grid.md',
            '/components/basic/button.md'
          ]
        },
        {
          text: '输入类',
          children: [
            '/components/input/input.md',
            '/components/input/radio.md',
            '/components/input/checkbox.md',
            '/components/input/switch.md',
          ]
        },
        {
          text: '反馈类',
          children: [
            '/components/feedback/tip.md',
          ]
        },
        {
          text: '导航类',
          children: [
          ]
        },
        {
          text: '展示类',
          children: [
            '/components/display/icon.md'
          ]
        },
        {
          text: '其他',
          children: [
          ]
        },
      ]
    }
  }
};
