<script>
import { store } from "../../data/store";

export default {
  name: "menujumbo",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="menujumbo">
    <div class="container h-100">
      <div class="row d-flex pt-3">
        <div class="col-4 logo d-flex ms-3">
          <p class="me-2">N E X</p>
          <p>G E N</p>
        </div>

        <div class="col-auto menu">
          <ul>
            <li v-for="(link, index) in store.menu" :key="index">
              <a href="#">{{ link }}</a>
            </li>
            <li>
              <a href="#"><i class="fa-regular fa-user mx-3"></i></a>
            </li>
            <li>
              <button type="button" class="btn btn-primary">
                GET IN TOUCH
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="row title h-75 align-items-center text-center text-white">
        <div class="col-12">
          <h1 class="py-3">Financial Risk</h1>
          <p class="pb-5">
            The right outcomes depend on continuous rigor in governance, models,
            and processes across the finance function
          </p>
          <button type="button" class="btn btn-primary me-3">
            GET IN TOUCH
          </button>
          <button type="button" class="btn btn-primary">READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;

.menujumbo {
  height: 900px;

  //overlay with brightness
  &::before {
    content: "";
    height: 900px;
    background-image: url("../../assets/img/bg-2.jpg");
    background-size: cover;
    position: absolute;
    top: 50px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    filter: brightness(0.6);
  }

  .container {
    position: relative;
    .logo {
      @include logo();
    }

    .menu {
      ul {
        list-style: none;
        li {
          display: inline-block;
          padding: 0 20px;
          a {
            font-weight: 700;
            text-decoration: none;
            color: white;
            cursor: pointer;
            transition: 0.3s all;
            &:hover {
              color: $bluelagoon;
            }
          }
        }
      }
      a {
        color: white;
      }
      button {
        @include button($fill: true);
      }
    }

    .title {
      h1 {
        font-size: 6rem;
        font-weight: 900;
      }
      p {
        font-weight: 100;
        width: 50%;
        margin: 0 auto;
        font-size: 1.1rem;
      }
      button:first-of-type {
        @include button($fill: true);
      }
      button:last-of-type {
        @include button($fill: false);
      }
    }
  }
}
</style>
