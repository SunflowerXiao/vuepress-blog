<template>
  <div class="container">
    fdfdf
    <Content />
    <slot name="fdsfdfdf" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        // pluginRootPath: "static/live2dw/", //插件在站点上的根目录（相对）
        // pluginJsPath: "lib/", //脚本文件相对与插件根目录路径（相对）
        // pluginModelPath: "live2d-widget-model-koharu/assets/", //模型文件相对与插件根目录路径
        // tagMode: false, //标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
        debug: false, //调试, 是否在控制台输出日志
        log: false,
        model: {
          jsonPath:
            "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json", //模板
        },
        display: {
          position: "right", //位置
          width: 100, //宽度
          height: 200, //高度
        },
        mobile: {
          show: true, //手机上展示
        },
        react: {
          opacity: 1, //透明度
        },
      });
    }, 200);
  },
};
</script>
