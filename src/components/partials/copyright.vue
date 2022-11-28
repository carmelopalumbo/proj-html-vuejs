<script>
export default {
  name: "copyright",
};
</script>

<template>
  <!-- 2 footer component -->
  <div class="copyright">
    <div class="container h-100 pt-2">
      <div class="row justify-content-between d-flex h-100 align-items-center">
        <div class="col">
          <p>Enjoy the low price. We are tracking any intention of piracy.</p>
        </div>
        <div class="col text-end">
          <p>
            @2022 NEXGEN is Proudly Poweered by
            <strong class="mx-1">Carmelo Palumbo</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
.copyright {
  height: 70px;
  background-color: $woodsmoke;
  .container {
    p {
      color: darken($white, 15%);
      font-size: 0.85rem;
      cursor: default;
      strong {
        color: $surfiegreen;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
