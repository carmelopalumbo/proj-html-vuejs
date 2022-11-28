<script>
import servicecards from "./servicecards.vue";
import { store } from "../../data/store";

export default {
  name: "services",
  data() {
    return {
      store,
    };
  },
  components: {
    servicecards,
  },
};
</script>

<template>
  <!-- 3 main component -->
  <div class="services">
    <div class="container h-100 d-flex flex-column justify-content-center">
      <!-- titles -->
      <div class="row top-box mb-3 text-center text-xl-start">
        <div class="col">
          <h6>OUR BUSINESS AREAS</h6>
          <h2 class="py-3">Excellence in <strong>Services</strong></h2>
        </div>
        <div class="row d-flex justify-content-between">
          <div class="col-12 col-xl-7">
            <p>
              We are leaders in providing consultancy services with a set of
              cutting-edge technologies and a team of experienced and renowned
              professionals. These are some options that you can hire.
            </p>
          </div>
          <div class="col d-none d-inline-block text-end">
            <button class="btn ms-1">SEE ALL</button>
          </div>
        </div>
      </div>

      <!-- cards -->
      <div class="row card-box d-flex flex-column flex-xl-row">
        <div
          class="col-4 my-3 offset-2 offset-xl-0"
          v-for="(card, index) in store.services"
          :key="index"
        >
          <servicecards :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;

.services {
  height: 900px;
  position: relative;
  background-color: $woodsmoke;
  .top-box {
    h6 {
      color: lighten($surfiegreen, 15%);
      font-size: 0.7rem;
      font-weight: 900;
    }
    h2 {
      font-size: 3.5rem;
      color: white;
      font-weight: 900;
      strong {
        position: relative;
        padding: 2px 10px;
        &::before {
          @include background-opacity();
          background-color: $bluelagoon;
        }
      }
    }
    p {
      color: white;
      font-weight: 100;
      font-size: 0.85rem;
    }
    button {
      @include button($fill: false);
      color: white;
    }
  }
}

// media query
@media (max-width: 1199px) {
  .services {
    height: 2050px;
  }
}
</style>
