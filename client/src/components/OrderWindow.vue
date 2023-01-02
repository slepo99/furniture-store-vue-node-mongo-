<template>
  <div>
    <vue-button class="btn" @click="show = true">
      <p class="btn-text">order now</p>
    </vue-button>
    <dialog-window v-if="credentials.token"  :show="show">
      <div>
        <h1> its ok you can order anything</h1>
      </div>
    </dialog-window>
    <dialog-window v-else-if="!credentials.token" :show="show">
      <div>
        <h1>you should register first</h1>
      </div>
    </dialog-window>
   
  </div>
</template>

<script>
import VueButton from "./UI/VueButton.vue";
import DialogWindow from "@/components/UI/DialogWindow.vue";
import { mapState } from "vuex";
export default {
  components: { DialogWindow, VueButton },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      credentials: (state) => state.auth.credentials,
    }),
  }
};
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.btn-text {
  text-transform: capitalize;
}
</style>
