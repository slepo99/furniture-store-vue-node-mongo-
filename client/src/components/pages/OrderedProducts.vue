<template>
  <div>
    <vue-header />
    <div class="container-body">
      <ordered-products-list/>
    </div>
    <vue-footer />
  </div>
</template>

<script>
import OrderedProductsList from '../OrderedProductsList.vue';
import VueFooter from "../UI/VueFooter.vue";
import VueHeader from "../UI/VueHeader.vue";
export default {
  components: { VueHeader, VueFooter, OrderedProductsList },
  name: "ordered-products",
 
};
</script>

<style scoped lang="scss">
.container-body {
  min-height: 100vh;
}
</style>
