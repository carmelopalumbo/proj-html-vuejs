<script>
import { store } from "../../data/store";

export default {
  name: "credits",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- 1 footer component -->
  <div class="credits">
    <div class="container d-flex h-100 align-items-center">
      <!-- logo with button -->
      <div class="row flex-column logo-box me-4">
        <div class="col logo d-flex">
          <p class="me-2">N E X</p>
          <p>G E N</p>
        </div>

        <div class="col py-2 text-white fw-lighter w-75">
          <p>A Functional HTML Template for Corporate & Business</p>
        </div>

        <div class="col text-white fw-lighter">
          <div class="py-2">
            <i class="fa-solid fa-phone me-3"></i>
            <span>+1 (305) 1234-5678</span>
          </div>
          <div class="py-2">
            <i class="fa-solid fa-envelope me-3"></i>
            <span>hello@example.com</span>
          </div>
          <div class="py-2">
            <i class="fa-solid fa-location-dot me-3"></i>
            <span>Main Avenue, 987</span>
          </div>

          <button class="btn mt-4">GET IN TOUCH</button>
        </div>
      </div>
      <!-- footer menu -->
      <div class="row justify-content-between d-flex w-100 footer-menu">
        <!-- about -->
        <div class="col">
          <h4>About</h4>
          <ul class="py-2">
            <li
              class="py-1"
              v-for="(link, index) in store.footerMenu.about"
              :key="index"
            >
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <!-- services -->
        <div class="col d-none d-xl-block">
          <h4 class="py-2">Services</h4>
          <ul>
            <li
              class="py-1"
              v-for="(link, index) in store.footerMenu.services"
              :key="index"
            >
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <!-- support -->
        <div class="col d-none d-xl-block">
          <h4 class="py-2">Support</h4>
          <ul>
            <li
              class="py-1"
              v-for="(link, index) in store.footerMenu.support"
              :key="index"
            >
              <a href="#">{{ link }}</a>
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

.credits {
  height: 600px;
  background-image: url("../../assets/img/bg-7.jpg");
  background-position: center;
  .logo-box {
    .logo {
      @include logo();
    }

    button {
      @include button($fill: false);
      color: white;
    }

    span {
      cursor: pointer;
    }
  }

  .footer-menu {
    .col {
      position: relative;
      margin: 0 20px;
      padding: 30px 0;
      &::before {
        @include background-opacity();
        background-color: lighten($woodsmoke, 50%);
        opacity: 0.05;
        border-radius: 8px;
      }
    }
    h4 {
      font-weight: 700;
      margin-left: 55px;
      position: relative;
      cursor: default;
      color: white;
    }
    ul {
      list-style: none;
      margin: 20px;
      li {
        position: relative;
        a {
          text-decoration: none;
          color: white;
          font-weight: 100;
          transition: 0.3s all;
          &:hover {
            color: $surfiegreen;
          }
          &::before {
            content: "\276F";
            padding-right: 6px;
            color: white;
          }
        }
      }
    }
  }
}
</style>
