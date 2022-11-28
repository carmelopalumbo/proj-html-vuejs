<script>
import copyright from "./partials/copyright.vue";
import credits from "./partials/credits.vue";
export default {
  name: "AppFooter",
  components: {
    copyright,
    credits,
  },
};
</script>

<template>
  <!-- 2 components -->
  <footer>
    <credits />
    <copyright />
  </footer>
</template>

<style></style>
