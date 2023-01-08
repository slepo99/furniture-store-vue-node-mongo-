<template>
  <div class="container-body">
    <div class="products-list" v-for="item in orderedItems" :key="item._id">
        <p>{{ item.name }}</p>
        <div v-for="i in item.products" :key="i">
            <p>{{ i.type }}</p>
            <p>{{ i.description }}</p>
        </div>
        <p>{{ item._id }}</p>
        <button @click.stop="deleteOrderedProduct(item._id)">delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions,  mapState } from 'vuex';
export default {
  name: "ordered-products-list",
  computed: {
    ...mapState({
        orderedItems: (state) => state.order.orderedItems
    })
  },
  methods: {
    ...mapActions({
      getOrderedItems: "order/getOrderedItems",
      deleteOrderedItem: "order/deleteOrderedItem"
    }),
   async deleteOrderedProduct(id) {
       await this.deleteOrderedItem(id)
      await  this.getOrderedItems();
    }
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
}
</style>
