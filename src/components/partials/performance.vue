<script>
export default {
  name: "performance",
};
</script>

<template>
  <!-- 1 main component -->
  <div class="performance">
    <div class="container h-100 d-flex justify-content-center flex-column">
      <div class="row flex-column text-center mt-5">
        <div class="col">
          <h6 class="pb-2">INTRODUCTION VIDEO</h6>
        </div>
        <div class="col">
          <h2 class="py-4">Advisory <strong>Performance</strong></h2>
          <p class="my-5">
            Financial executives need to review their strategies, operating
            models and capabilities so that their areas can generate sound
            information for better decision making.
          </p>
        </div>
      </div>
      <div class="row video text-center align-items-center">
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-play"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
.performance {
  height: 900px;
  margin-bottom: 80px;
  h6 {
    color: $surfiegreen;
    font-weight: 900;
  }
  p {
    width: 60%;
    margin: 0 auto;
    font-weight: 100;
    font-size: 1.2rem;
  }
  h2 {
    font-size: 5rem;
    font-weight: 900;
    strong {
      color: $surfiegreen;
      background-color: lighten($surfiegreen, 60%);
      padding: 5px 20px;
      border-radius: 5px;
    }
  }

  .video {
    background-image: url("../../assets/img/video-1.jpg");
    background-position: center;
    background-size: cover;
    width: 1100px;
    height: 500px;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    i {
      font-size: 6rem;
      opacity: (0.7);
      cursor: pointer;
      &:first-of-type {
        color: $surfiegreen;
      }
      &:last-of-type {
        color: $white;
        position: absolute;
        top: 210px;
        left: 0;
      }
    }
  }
}
</style>
