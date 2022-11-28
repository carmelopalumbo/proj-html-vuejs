<script>
export default {
  name: "openhours",
};
</script>

<template>
  <!-- 1 header component position fixed -->
  <div class="openhours">
    <div class="container h-100">
      <div class="row align-items-center h-100 text-center text-lg-start">
        <div class="col">
          <i class="fa-solid fa-clock"></i>
          <span class="ms-2">Open Hours: Mon - Sat - 9:00 - 18:00</span>
        </div>
        <div class="col text-center d-none d-xl-inline-block">
          <i class="fa-solid fa-phone"></i>
          <span class="ms-2">+1 (305) 1234-5678</span>
          <i class="fa-solid fa-envelope ms-4"></i>
          <span class="ms-2">hello@example.com</span>
          <i class="fa-brands fa-facebook-f mx-4"></i>
          <i class="fa-brands fa-twitter mx-4"></i>
          <i class="fa-brands fa-linkedin-in mx-4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
.openhours {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  height: 50px;
  background-color: darken($smaltblue, 15);
  color: lighten($smaltblue, 35%);
  i {
    cursor: pointer;
  }
}
</style>
