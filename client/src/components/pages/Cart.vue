<template>
  <div>
    <vue-header />
    <div class="container-body">
      <cart-items />
    </div>
    <vue-footer/>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems.vue";
import VueFooter from '@/components/UI/VueFooter.vue';
import VueHeader from "@/components/UI/VueHeader.vue";

export default {
  components: { CartItems, VueHeader, VueFooter },
  name: "cart",
  mounted() {
    window.scrollTo(0, top)
   }
};
</script>

<style scoped lang="scss">
.container-body {
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
