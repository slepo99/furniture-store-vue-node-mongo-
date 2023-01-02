<template>
  <div>
    <vue-button class="btn" @click="show = true">
      <p class="btn-text">order now</p>
    </vue-button>
    <dialog-window v-if="Logged" :show="show">
      <div class="dialog-close">
        <span class="material-symbols-outlined" @click="closeDialog">
          close
        </span>
      </div>
      <div>
        <h1>its ok you can order anything</h1>
      </div>
    </dialog-window>

    <dialog-window v-else-if="notLogged" :show="show">
      <div class="dialog-close">
        <span class="material-symbols-outlined" @click="closeDialog">
          close
        </span>
      </div>
      <div class="message-box">
        <h2 class="message">You must be <router-link to="/auth" class="message_link">logged</router-link> in to place an order</h2>
        <p >
          Don’t have an account?
          <a class="message_link" @click="goToSignUp" >Sign up</a>
        </p>
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
    Logged() {
      return this.credentials.token;
    },
    notLogged() {
      return !this.credentials.token;
    },
    
    goToSignUp(){
      this.$router.push("/registration");
    }
  },
  methods: {
    closeDialog() {
      return (this.show = false);
    },
  },
};
</script>

<style scoped lang="scss">
.dialog-window {
  padding: 0;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.btn-text {
  text-transform: capitalize;
}
.material-symbols-outlined {
  cursor: pointer;
  display: flex;
}
.material-symbols-outlined:hover {
  color: blue;
}
.dialog-close {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 5px;
}
.message-box{
  margin: 30px;

.message_link {
    color: rgb(73, 73, 251);
    text-decoration: none;
    cursor: pointer;
  }
  .message_link:hover {
    color: black;
  }
}

</style>
