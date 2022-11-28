<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <!-- header macro component -->
  <AppHeader />

  <!-- main macro component -->
  <AppMain />

  <!-- footer macro component -->
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general";
</style>
