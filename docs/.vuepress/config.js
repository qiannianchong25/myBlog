const path=require('path');
const resolve=dir=>path.resolve(__dirname,dir)
module.exports = {
    title: '虫25的博客',
    description: '一个关于成长的故事',
    base: '/vuepress/',
    // html的head配置
    head: [
      ['link', {
        rel: 'icon',
        href: '/favicon.ico'
      }]
    ],
    // host:'',
    // port:'',
    // 永久链接
    // permalink: "/:year/:month/:day/:slug",
    themeConfig: {
      logo: '/hero.jpg',
      lastUpdated: 'Last Updated',
      // 搜索框显示数量
      searchMaxSuggestions: 10,
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
      nextLinks: false,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      prevLinks: false,
      smoothScroll: true,
      //导航栏
      nav: [{
          text: '主页',
          link: '/',
          target: '_self'
        },
        {
          text: '文章',
          link: '/article/',
          target: '_self'
        },
        {
          text: 'Demo',
          link: '/demo/',
          target: '_self'
        },
        {
          text: '关于',
          link: '/about/',
          target: '_self'
        }
      ],
      //侧边栏
      sidebarDepth: 3,
      displayAllHeaders: true, // 默认值：false
      activeHeaderLinks: true, // 默认值：true
      sidebarDepth:3,
      // sidebar:{
      //   '/article/': [
      //     'one', 
      //     'two',
      //     'three' 
      //   ],
      //   '/demo/': [
      //     'one', 
      //     'two' 
      //   ],
      // },
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'qiannianchong25/vuepress',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '查看源码',
  
      // 以下为可选的编辑链接选项
  
      // 假如你的文档仓库和项目本身不在一个仓库：
      docsRepo: 'qiannianchong25/vuepress',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '帮助我们改善此页面！'
    },
    //  页面滚动
    // markdown配置
    markdown: {
      // 显示行号
      lineNumbers: true
    },
    // webpack配置
    configureWebpack: (config, isServer) => {
      if (!isServer) {
        // 修改客户端的 webpack 配置
        return{
          resolve: {
            alias: {
              '@public': resolve('public')
            }
          }
        }
      }
    },
    plugins:{
      "vuepress-plugin-auto-sidebar": {}
    }
  }