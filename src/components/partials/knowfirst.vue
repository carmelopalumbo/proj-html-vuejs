<script>
export default {
  name: "knowfirst",
};
</script>

<template>
  <div class="knowfirst">
    <div class="container h-100 d-flex align-items-center">
      <div class="row ms-4">
        <div class="col offset-1">
          <h6>NEWSLETTER</h6>
          <h2 class="py-4"><strong>Know</strong> First</h2>
          <p>
            Follow closely and receive content about our company and the news of
            the current market.
          </p>
        </div>
      </div>

      <div class="row ms-5">
        <div class="col-12">
          <input type="text" class="form-control" placeholder="Name" />
        </div>
        <div class="col-12 py-4">
          <input type="text" class="form-control" placeholder="Email" />
        </div>
        <div class="col-12">
          <button class="btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;

.knowfirst {
  position: relative;
  height: 550px;
  background-color: $woodsmoke;
  .container {
    h6 {
      color: $bluelagoon;
      font-weight: 900;
    }
    h2 {
      font-size: 4rem;
      font-weight: 900;
      color: white;
      strong {
        position: relative;
        padding: 5px;
        &::before {
          @include background-opacity();
          background-color: $bluelagoon;
        }
      }
    }
    p {
      font-weight: 100;
      font-size: 1.1rem;
      color: white;
    }
    input {
      width: 470px;
    }
    .form-control {
      background-color: lighten($woodsmoke, 8%);
      border: none;
      padding: 10px;
      border-radius: 4px;
      color: white;
      &:focus {
        border-color: $bluelagoon;
        box-shadow: inset 0 1px 1px $bluelagoon, 0 0 8px $bluelagoon;
      }
      &::placeholder {
        color: lighten($woodsmoke, 50%);
      }
    }
    button {
      @include button($fill: true);
      color: white;
    }
  }
}
</style>
