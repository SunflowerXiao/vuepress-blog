// 必要文件
module.exports = {
  base: "/blog/",
  title: "fish's blog", // html网页中的标题
  description: "Just playing around", //html网页中的描述
  head: [
    // 注入到<head></head>标签的 内容
    ["link", { rel: "icon", href: "/logo.png" }],
  ],
  port: 8900,
  extraWatchFiles: [
    //需要被监听的文件
    ".vuepress/**/*", // 使用相对路径 **匹配0或者更多个目录， *匹配0或者任意数量的字符
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: {
      "/vue3/": ["", "setup"],
      "/js/": [""],
      "/": ["", "about"], //最后定义
    },
  },
};
