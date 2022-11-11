<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "vue-button",
};
</script>

<style scoped>
.btn {
  background: #842c68;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 60px;
  width: 240px;
  cursor: pointer;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}
</style>
