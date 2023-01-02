<template>
  <dialog-window>
    <div class="dialog-body">
      <div>
        <h3>Are you sure you want to log out ?</h3>
      </div>
      <div class="btn-block">
        <button @click="logOut"><p>Yes</p></button>
        <button @click.stop="cancelLoggingOut"><p>No</p></button>
      </div>
    </div>
  </dialog-window>
</template>

<script>
import { mapMutations } from "vuex";
import DialogWindow from "@/components/UI/DialogWindow.vue";
export default {
  components: { DialogWindow },
  name: "logout-window",
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
.dialog-body {
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
</style>
