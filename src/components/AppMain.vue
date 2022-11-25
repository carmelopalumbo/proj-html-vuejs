<script>
import performance from "./partials/performance.vue";
import results from "./partials/results.vue";
import services from "./partials/services.vue";
import team from "./partials/team.vue";
import news from "./partials/news.vue";
import knowfirst from "./partials/knowfirst.vue";
import forms from "./partials/forms.vue";

export default {
  name: "AppMain",
  components: {
    performance,
    results,
    services,
    team,
    news,
    knowfirst,
    forms,
  },
};
</script>

<template>
  <!-- 7 components on main -->
  <performance />
  <results />
  <services />
  <team />
  <news />
  <knowfirst />
  <forms />
</template>

<style></style>
