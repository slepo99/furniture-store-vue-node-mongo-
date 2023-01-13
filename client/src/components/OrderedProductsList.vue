<template>
  <div class="container-body">
    <!-- <div class="products-list" v-for="item in orderedItems" :key="item._id">
      <h1>{{ item.name }}</h1>
      <div v-for="i in item.products" :key="i">
        <p>{{ i.type }}</p>
        <p>{{ i.description }}</p>
      </div>
      <button @click.stop="deleteOrderedProduct(item._id)">delete</button>
    </div> -->
    <div class="container-test">
      <div class="header" :class="{open : show}" @click="show = !show">
        <h1>open me</h1> 
        <div class="content">some cntent </div>
      </div> 
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ordered-products-list",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      orderedItems: (state) => state.order.orderedItems,
    }),
    handleCollapse() {
      return (this.isOpen = !this.isOpen);
    },
  },
  methods: {
    ...mapActions({
      getOrderedItems: "order/getOrderedItems",
      deleteOrderedItem: "order/deleteOrderedItem",
    }),
    async deleteOrderedProduct(id) {
      await this.deleteOrderedItem(id);
      await this.getOrderedItems();
    },
  },
  mounted() {
    this.getOrderedItems();
    console.log(this.orderedItem);
  },
};
</script>

<style scoped lang="scss">
.container-body {
  padding-top: 100px;
  .container-test {
    width: 500px;
    .header {
      width: 100%;
      height: 45px;
      background-color: gray;
      border: 1px solid black;
      transition: 1s;
      overflow: hidden;
    }
    .open {
      height: 500px;
    }
    h1 {
      margin: 0;
    }
  }
  
}

</style>
