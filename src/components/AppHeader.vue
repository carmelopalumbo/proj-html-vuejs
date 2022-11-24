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
    <openhours />
    <menujumbo />
  </header>
</template>

<style lang="scss" scoped></style>
