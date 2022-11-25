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
          class="col-6 my-3"
          v-for="(card, index) in store.team"
          :key="index"
        >
          <teamcards :card="card" />
        </div>
      </div>

      <div class="row">
        <h1>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</h1>
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
  }
}
</style>
