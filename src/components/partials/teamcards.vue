<script>
export default {
  name: "teamcards",
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="teamcard">
    <div class="container card-container">
      <div class="row">
        <div class="col">
          <img src="" alt="IMAGE" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">{{ card.name }}</div>
        <div class="col-12">{{ card.role }}</div>
        <div class="col-12">ICONE</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.teamcard {
  .card-container {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    background-color: red;
    margin: 0;
  }
}
</style>
