<script>
import { getPathImage } from "../../data/functions";

export default {
  name: "teamcards",
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
  <div class="teamcard">
    <div class="container card-container">
      <div class="row">
        <div class="col pe-5">
          <img :src="getPathImage(card.image)" :alt="card.name" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>{{ card.name }}</h4>
        </div>
        <div class="col-12">
          <h5>{{ card.role }}</h5>
        </div>
        <div class="col-12">
          <i class="fa-brands fa-facebook-f me-3 pt-2"></i>
          <i class="fa-brands fa-twitter mx-3 pt-2"></i>
          <i class="fa-brands fa-linkedin-in mx-3 pt-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
.teamcard {
  .card-container {
    display: flex;
    justify-content: space-between;
    width: 370px;
    height: 150px;
    margin: 0;
    padding: 0;
    img {
      width: 110px;
      border: 1px solid transparent;
      border-radius: 5px;
    }
    h4 {
      font-weight: 900;
      font-size: 1.4rem;
    }
    h5 {
      font-weight: 100;
      font-size: 0.9rem;
      margin: 0;
    }
    i {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      color: darken($surfiegreen, 10%);
      background-color: lighten($surfiegreen, 60%);
      transition: 0.3s all;
      &:hover {
        background-color: lighten($surfiegreen, 30%);
      }
    }
  }
}
</style>
