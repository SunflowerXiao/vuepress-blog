<template>
  <div class="container">
    <Content />
    <slot name="fdsfdfdf" />
    <paginate></paginate>
  </div>
</template>
<script>
import paginate from "../components/paginate.vue";
export default {
  components: {
    paginate,
  },
};
</script>
