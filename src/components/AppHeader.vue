<script>
import openhours from "./partials/openhours.vue";
import menujumbo from "./partials/menujumbo.vue";

export default {
  name: "AppHeader",
  components: {
    openhours,
    menujumbo,
  },
};
</script>

<template>
  <header>
    <!-- header top -->
    <openhours />

    <!-- jumbotron with menu -->
    <menujumbo />
  </header>
</template>

<style lang="scss" scoped>
// padding top for openhours in position fixed
header {
  padding-top: 50px;
}
</style>
