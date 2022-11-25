<script>
import { getPathImage } from "../../data/functions";

export default {
  name: "cards",
  data() {
    return {
      getPathImage,
    };
  },
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="cp-card">
    <div class="icons d-flex justify-content-between">
      <img :src="getPathImage(card.icon)" :alt="card.icon" class="pb-1" />
      <i class="fa-solid fa-arrow-right pt-2"></i>
    </div>
    <div class="text">
      <h3 class="py-3">{{ card.title }}</h3>
      <p>{{ card.descr }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
.cp-card {
  width: 350px;
  height: 250px;
  padding: 30px;
  color: white;
  border-radius: 10px;
  background-color: lighten($woodsmoke, 10%);
  img {
    width: 35px;
  }
  h3 {
    font-weight: 900;
    font-size: 1.5rem;
  }
  p {
    font-weight: 100;
    width: 85%;
  }
  i {
    color: darken($surfiegreen, 10%);
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      color: white;
      background-color: $surfiegreen;
    }
  }
}
</style>
