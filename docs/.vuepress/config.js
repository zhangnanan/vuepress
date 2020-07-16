const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    title: 'zhangnan的技术博客', 
    description: '查阅知识',
    head: [
      ['link', {
        rel: 'icon',
        href: '/favorite.png'
      }],
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            // 不要忘了安装 moment
            
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    themeConfig: {
        nav,
        sidebar,
        search: true,//搜索
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新', // string | boolean
        // 作者
        author: 'zhangnan',

    }
      

}

