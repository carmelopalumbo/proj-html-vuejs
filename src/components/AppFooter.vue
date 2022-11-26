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
  <credits />
  <copyright />
</template>

<style></style>
