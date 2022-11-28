<script>
export default {
  name: "news",
};
</script>

<template>
  <!-- 5 main component -->
  <div class="news">
    <div class="container h-100 d-flex flex-column justify-content-center">
      <div class="row">
        <div class="col">
          <h6>OUR EDITORIAL CONTENT</h6>
          <h2 class="py-4">LATEST <strong>NEWS</strong></h2>
          <div class="d-flex justify-content-between">
            <p>
              Every week we publish content about what is best in the business
              world.
            </p>
            <button class="btn">SEE ALL</button>
          </div>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-4">
          <div class="hover-box-1">
            <p class="pt-3">
              <i class="fa-regular fa-user me-1"></i>
              Diana Ross
              <i class="fa-regular fa-clock ms-4 me-1"></i>
              2 Days Ago
            </p>
            <h3>Increasing creativity is possible for everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="col-4">
          <div class="hover-box-2">
            <p class="pt-3">
              <i class="fa-regular fa-user me-1"></i>
              Bruno Mars
              <i class="fa-regular fa-clock ms-4 me-1"></i>
              3 Days Ago
            </p>
            <h3>Because market research is part of the business plan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="col-4">
          <div class="hover-box-3">
            <p class="pt-3">
              <i class="fa-regular fa-user me-1"></i>
              Tina Turner
              <i class="fa-regular fa-clock ms-4 me-1"></i>
              1 Days Ago
            </p>
            <h3>Working from home is now a trend</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;
.news {
  position: relative;
  height: 800px;
  background-color: $graynurse;
  .container {
    h6 {
      color: $fountainblue;
      font-weight: 900;
      font-size: 0.8rem;
    }
    h2 {
      font-weight: 900;
      font-size: 3.5rem;
      strong {
        position: relative;
        padding: 2px 10px;
        color: darken($fountainblue, 20%);
        &::before {
          @include background-opacity();
          background-color: $fountainblue;
        }
      }
    }
    p {
      font-weight: 100;
      font-size: 1.15rem;
    }
    button {
      @include button($fill: true);
      color: white;
    }

    .hover-box-1,
    .hover-box-2,
    .hover-box-3 {
      position: relative;
      cursor: pointer;
      width: 400px;
      height: 400px;
      display: flex;
      flex-direction: column;
      h3,
      p {
        position: relative;
        text-align: center;
        color: white;
        transition: 0.5s all;
      }
      h3 {
        font-weight: 900;
        font-size: 1.4rem;
        margin: 200px auto;
        width: 80%;
        cursor: pointer;
      }
      p {
        font-size: 0.9rem;
        opacity: 0;
      }
      &:hover {
        p {
          opacity: 1;
        }
        h3 {
          margin: 110px auto;
        }
      }
    }
    .hover-box-1 {
      &::before {
        @include background-opacity();
        background-image: url("../../assets/img/news-1.jpg");
        background-position: center;
        background-size: cover;
        opacity: 1;
        border-radius: 8px;
        filter: brightness(0.5);
      }
      &:hover::before {
        filter: blur(3px) brightness(0.5);
      }
    }
    .hover-box-2 {
      &::before {
        @include background-opacity();
        background-image: url("../../assets/img/news-2.jpg");
        background-position: center;
        background-size: cover;
        opacity: 1;
        border-radius: 8px;
        filter: brightness(0.5);
      }
      &:hover::before {
        filter: blur(3px) brightness(0.5);
      }
    }
    .hover-box-3 {
      &::before {
        @include background-opacity();
        background-image: url("../../assets/img/news-3.jpg");
        background-position: center;
        background-size: cover;
        opacity: 1;
        border-radius: 8px;
        filter: brightness(0.5);
      }
      &:hover::before {
        filter: blur(3px) brightness(0.5);
      }
    }
  }
}
</style>
