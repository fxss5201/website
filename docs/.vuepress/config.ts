import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { seoPlugin } from "vuepress-plugin-seo2"
import { sitemapPlugin } from "vuepress-plugin-sitemap2"

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: '樊小书生',
  description: '樊小书生：前端工程师',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script', {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?73561a99016d01dd2f53b4d04f9627e7";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  theme: defaultTheme({
    logo: '/favicon.ico',
    navbar: [
      {
        text: '个人简介',
        link: '/',
      },
      {
        text: '个人作品',
        link: '/list',
      },
      {
        text: '联系方式',
        link: '/contact',
      }
    ],
    notFound: ['页面未找见'],
    backToHome: '返回首页'
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    seoPlugin({
      hostname: 'https://www.fxss.work/'
    }),
    sitemapPlugin({
      hostname: 'https://www.fxss.work/'
    }),
  ],
})