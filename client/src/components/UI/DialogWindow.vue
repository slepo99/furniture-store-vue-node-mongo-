<template>
  <div class="dialog" v-if="show">
    <div @click.stop class="dialog-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialog-window",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  padding-bottom: 200px;
  .dialog-content {
    margin: auto;
    background: #fff5;
    backdrop-filter: blur(5px);
    border-radius: 2px;
    min-height: 50px;
    min-width: 200px;
    display: flex;
    padding: 10px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
