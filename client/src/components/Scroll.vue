<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right">
    <a class="btn btn-light">
      <img src="@/assets/icons/body/angles-up-solid.svg" alt="" />
    </a>
  </a>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 150;
    },
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.headerProducts.isOpen,
    }),
  },
  watch: {
    isOpen() {
      return this.scrollTop();
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 50px;
  right: 60px;
  cursor: pointer;
  width: 35px;
  height: 40px;
  z-index: 101;
}
.btn {
  border-radius: 8px;
  background-color: white;
  padding-top: 33px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  border: 1px solid black;
}
</style>