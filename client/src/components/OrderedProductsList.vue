<template>
  <div class="container-body">
    <div
      class="container-test"
      v-for="(item, id) in orderedItems"
      :key="item._id"
    >
      <div
        class="header"
        :class="{ open: item.show }"
        @click.prevent="item.show = !item.show"
      >
        <p>{{ item.show }}</p>
        <p>{{ id + 1 }}</p>
        <h1>{{ item.name }}</h1>
        <div class="content" v-for="i in item.products" :key="i">
          <p>{{ i.type }}</p>
          <p>{{ i.description }}</p>
        </div>
        <button @click.stop="deleteOrderedProduct(item._id)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ordered-products-list",

  computed: {
    ...mapState({
      orderedItems: (state) => state.order.orderedItems,
    }),
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
    console.log(this.orderedItems);
  },
};
</script>

<style scoped lang="scss">
.container-body {
  padding: 100px 0 0 50px;
  .container-test {
    width: 1290px;
    .header {
      width: 100%;
      max-height: 150px;
      border-radius: 12px;

      border: 1px solid black;
      transition: 1s;
      overflow: hidden;
    }
    .open {
      max-height: 1200px;
    }
    h1 {
      margin: 0;
    }
  }
}
</style>
