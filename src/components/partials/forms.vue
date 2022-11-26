<script>
export default {
  name: "forms",
};
</script>

<template>
  <div class="forms">
    <!-- container form -->
    <div class="container d-flex h-100 align-items-center">
      <div class="row me-5">
        <div class="col form-box">
          <h6>SEND A MESSAGE</h6>
          <h2 class="py-3">Get in <strong>Touch</strong></h2>
          <p class="pb-5">
            We will respond to your message as soon as possible.
          </p>
          <div class="mb-3 d-flex">
            <input
              type="email"
              class="form-control me-3"
              placeholder="Name"
              id="name"
            />

            <input type="email" class="form-control" placeholder="Email" />
          </div>

          <div class="mb-3 d-flex">
            <input type="email" class="form-control me-3" placeholder="Phone" />
            <select class="form-select" aria-label="Default select example">
              <option selected>More info</option>
              <option value="info1">Info 1</option>
              <option value="info2">Info 2</option>
              <option value="info3">Info 2</option>
            </select>
          </div>

          <div class="mb-3">
            <textarea
              class="form-control"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>

          <button class="btn mt-2">SEND</button>
        </div>
      </div>

      <!-- contacts box -->
      <div class="row flex-column contacts-box">
        <div class="col">
          <h3 class="py-3">Example Inc.</h3>
          <p class="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p class="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        <div class="col">
          <div class="py-3">
            <i class="fa-solid fa-phone me-3"></i>
            <span>+1 (305) 1234-5678</span>
          </div>
          <div class="py-3">
            <i class="fa-solid fa-envelope me-3"></i>
            <span>hello@example.com</span>
          </div>
          <div class="py-3">
            <i class="fa-solid fa-location-dot me-3"></i>
            <span>Main Avenue, 987</span>
          </div>

          <button class="btn mt-1">VIEW MAP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette" as *;
@use "../../style/partials/mixin" as *;

.forms {
  height: 800px;
  .container {
    .form-box {
      h6 {
        color: $surfiegreen;
        font-weight: 900;
        font-size: 0.85rem;
      }
      h2 {
        font-size: 3.5rem;
        font-weight: 900;
        strong {
          position: relative;
          color: $surfiegreen;
          padding: 3px 6px;
          &::before {
            @include background-opacity();
            background-color: lighten($surfiegreen, 15%);
          }
        }
      }
      p {
        font-weight: 100;
      }

      input,
      select,
      textarea {
        background-color: lighten($midgray, 55%);
        border: none;
        border-radius: 3px;
        resize: none;
        color: $midgray;
        &:focus {
          box-shadow: 0 0 10px $surfiegreen;
        }
        &::placeholder {
          color: $midgray;
        }
      }

      input,
      select {
        width: 300px;
      }

      textarea {
        height: 140px;
      }

      #name {
        background: url("../../assets/img/icon1.png") no-repeat scroll;
        background-position: 275px;
        background-color: lighten($midgray, 55%);
      }

      button {
        @include button($fill: true);
        color: white;
      }
    }

    .contacts-box {
      h3 {
        font-weight: 700;
      }
      p {
        font-weight: 100;
      }
      i {
        @include icons();
        color: $surfiegreen;
        background-color: lighten($surfiegreen, 45%);
        &:hover {
          background-color: lighten($surfiegreen, 25%);
        }
      }
      span {
        color: $surfiegreen;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      button {
        @include button($fill: false);
        color: $surfiegreen;
        &:hover {
          color: darken($surfiegreen, 20%);
        }
      }
    }
  }
}
</style>
