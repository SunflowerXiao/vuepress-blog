<template>
  <div class="container">
    <span>上一页</span>
    <template v-for="(page, idx) in pages">
      <span :key="page.pid" @click="jumpToPath(page)">{{ idx + 1 }}</span>
    </template>
    <span>下一页</span>
  </div>
</template>
<script>
export default {
  name: "paginate",
  computed: {
    pages() {
      let arr = {};
      console.log(this.$site.pages);
      const pages = this.$site.pages || [];
      pages.map((item) => {
        if (!arr.hasOwnProperty(item.pid)) {
          arr[item.pid] = item;
        }
      });
      return Object.values(arr);
    },
  },
  methods: {
    jumpToPath(page) {
      this.$router.push(this.$site.base + page.regularPath);
    },
  },
};
</script>
