<script>
import { store } from "../../data/store";
import teamcards from "./teamcards.vue";

export default {
  name: "team",
  components: {
    teamcards,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- 4 main component -->
  <div class="team">
    <div class="container h-100 d-flex align-items-center">
      <div class="row">
        <div class="col-12 titles">
          <h6>WE LIKE WHAT WE DO</h6>
          <h2 class="py-3"><strong>Team</strong> of Experts</h2>
          <p>
            Ethics and integrity are the bases on which our professionals build
            their careers. <br />
            They are fundamentals that become daily attitudes.
          </p>
        </div>
        <div
          class="col-6 my-4 cards"
          v-for="(card, index) in store.team"
          :key="index"
        >
          <teamcards :card="card" />
        </div>
      </div>

      <div class="row pres-speech mt-5 d-none d-xl-flex">
        <div class="col">
          <h3 class="pb-4">President Speech</h3>
          <p class="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            provident dolorum quis!
          </p>
          <p class="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magnam
            eum esse! Sapiente odio voluptates, illo fuga libero vero illum?
          </p>
          <p class="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            voluptates aliquid alias. Quidem, sint ea.
          </p>
          <div class="d-flex justify-content-between sign-box">
            <p class="pt-1">T. Johnson</p>
            <i class="fa-solid fa-quote-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;
.team {
  height: 800px;
  position: relative;
  .container {
    .titles {
      h6 {
        color: $surfiegreen;
        font-weight: 900;
        font-size: 0.85rem;
      }
      h2 {
        font-size: 4rem;
        font-weight: 900;
        strong {
          position: relative;
          padding: 2px 10px;
          color: $bluelagoon;
          &::before {
            @include background-opacity();
            background-color: $surfiegreen;
          }
        }
      }
      p {
        font-weight: 100;
        font-size: 1.05rem;
      }
    }
    .pres-speech {
      color: white;
      background-color: $surfiegreen;
      padding: 45px 25px;
      border-radius: 7px;
      h3 {
        font-weight: 900;
      }
      p {
        font-weight: 100;
      }
      .sign-box {
        p {
          font-weight: 900;
          font-size: 1.2rem;
        }
        i {
          font-size: 2.5rem;
          color: darken($surfiegreen, 10%);
          opacity: 0.7;
        }
      }
    }
  }
}

// media query
@media (max-width: 770px) {
  .team {
    height: 450px;
  }
  .cards {
    display: none;
  }
}
</style>
