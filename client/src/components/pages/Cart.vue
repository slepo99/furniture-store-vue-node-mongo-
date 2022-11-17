<template>
  <div>
    <vue-header />
    <div class="container-body">
      <cart-order/>
      <cart-items />
    </div>
    <vue-footer/>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems.vue";
import VueFooter from '@/components/UI/VueFooter.vue';
import VueHeader from "@/components/UI/VueHeader.vue";
import CartOrder from '@/components/CartOrder.vue';
export default {
  components: { CartItems, VueHeader, VueFooter, CartOrder },
  name: "cart",
  mounted() {
    window.scrollTo(0, top)
   }
};
</script>

<style scoped lang="scss">
.container-body {
  min-height: 100vh;
  gap: 50px;
  padding: 100px;
  display: flex;
  justify-content: center;
  
}

</style>
