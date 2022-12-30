<template>
  <div class="dialog" v-if="show">
    <div @click.stop class="dialog-content">
      <div class="container-body">
        <div>
          <h3>Are you sure you want to log out ?</h3>
        </div>
        <div class="btn-block">
          <button @click="logOut"><p>Yes</p></button>
          <button @click.stop="cancelLoggingOut"><p>No</p></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "dialog-window",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    ...mapMutations({
      logOut: "auth/deleteToken",
    }),
    cancelLoggingOut() {
      this.$emit("cancelLoggingOut");
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
    padding: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    .container-body {
      padding: 30px;
      min-height: 140px;
    }
    .btn-block {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      align-content: center;
      margin-top: 40px;
      button {
        background: black;
        border-radius: 10px;
        border: none;
        width: 100px;
        height: 40px;
        transition: width 1s, height 1s;
        cursor: pointer;
      }
      button:hover {
        width: 120px;
        height: 50px;
      }
      button p {
        margin: 0;
        font-style: normal;
        font-weight: 650;
        font-size: 18px;
        line-height: 30px;
        text-decoration: none;
        color: #ffffff;
        transition: width 1s, height 1s;
      }
    }
    h3 {
      font-style: normal;
      font-weight: 550;
      font-size: 20px;
      line-height: 30px;
      text-decoration: none;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
}
</style>
