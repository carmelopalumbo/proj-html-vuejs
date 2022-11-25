<script>
import { store } from "../../data/store";

export default {
  name: "results",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="results">
    <div
      class="container h-100 d-flex align-items-center justify-content-center position-relative flex-column top-box"
    >
      <div class="row">
        <div class="col text-center">
          <h6 class="py-2">WHAT ARE WE DOING</h6>
          <h2><strong>Results</strong> in Numbers</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="d-flex">
            <li
              v-for="(result, index) in store.results"
              :key="index"
              class="text-center"
            >
              <p>{{ result.number }}</p>
              <p>{{ result.title }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;
.results {
  height: 550px;
  position: relative;
  &::before {
    content: "";
    height: 550px;
    background-image: url("../../assets/img/bg-1.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    filter: brightness(0.6);
  }
  .container {
    h6 {
      color: $bluelagoon;
      font-weight: 700;
    }
    h2 {
      font-size: 3.3rem;
      font-weight: 900;
      color: white;
      strong {
        position: relative;
        display: inline-block;
        color: white;
        padding: 2px 10px;
        &::before {
          @include background-opacity();
          background-color: $bluelagoon;
        }
      }
    }

    ul {
      list-style: none;
      transform: translateY(70px);
      li {
        padding: 0 90px;
        font-weight: 900;
        p {
          margin: 3px 0;
        }
        & :first-child {
          color: lighten($bluelagoon, 10%);
          font-size: 1.8rem;
        }
        & :last-child {
          color: white;
          font-size: 1.3rem;
        }
      }
    }
  }
}
//overlay with brightness
</style>
