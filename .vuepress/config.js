var path = require("path");
module.exports = {
  base: "/blog/",
  title: "fish's blog", // 站点名称
  description: "学习记录 代码分享 经验总结 开发教程", // 描述
  lange: "zh-CN", // 语言
  extraWatchFiles: [
    ".vuepress/**/*", // 使用相对路径
    "/_posts/**/*", // 使用绝对路径
  ],
  theme: require.resolve("./theme/"), // 使用自定义主题
  markdown: {
    // markdown 配置
    lineNumbers: true,
  },
  themeConfig: {
    // @vuepress/theme-blog 配置
    dateFormat: "YYYY-MM-DD",
    nav: [
      // 导航
      {
        text: "Blog",
        link: "/posts/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],

    directories: [
      // 目录分类器
      {
        id: "home",
        dirname: "_posts",
        path: "/",
        layout: "HomeLayout",
        // itemPermalink: "/posts/:year/:month/:day/:slug",
      },
      {
        id: "js",
        dirname: path.resolve(__dirname, "../_posts/JS"),
        path: "/js/",
        // itemPermalink: "/posts/:year/:month/:day/:slug",
      },
      {
        id: "post",
        dirname: "_posts",
        path: "/posts/",
        // itemPermalink: "/posts/:year/:month/:day/:slug",
      },
    ],
    footer: {
      // 页脚
      copyright: [
        {
          text: "粤ICP备20016112号",
          link: "http://beian.miit.gov.cn",
        },
        {
          text: "MIT Licensed | Copyright © 2020-present forapi.cn",
          link: "https://github.com/zhb333/readme-blog",
        },
      ],
    },
  },
};
