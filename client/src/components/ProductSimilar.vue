<template>
  <div class="container">
    <div class="title">
      <h1>Similar Products</h1>
    </div>
    <div class="items">
      <div v-for="item in getSimilarProduct()" :key="item._id">
        <div class="items_bloc">
          <img
            :src="
              require('/Users/pc/furniture-store-vue/server/static/' +
                item.picture)
            "
            alt=""
          />
          <div class="items_type-price">
            <p class="items_type">{{ item.type }}</p>
            <p class="items_price">${{ item.price }}</p>
          </div>
          <p class="description">{{ item.description }}</p>
          <router-link to="/store" class="link-store"> shop now </router-link>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "product-similar",
  computed: {
    ...mapGetters({
      products: "filter/products",
    }),
  },
  methods: {
    getSimilarProduct() {
      let randomNum = Math.floor(Math.random() * 14);
      let data = this.products
      data = data.slice(randomNum,randomNum + 3)
      return  data
    },
  },
  
};
</script>

<style scoped lang="scss">
.title {
  margin-top: 90px;
  margin-bottom: 60px;
  .title h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
  }
}
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  &_bloc {
    max-width: 289px;
  }
  &_type-price {
    display: flex;
    justify-content: space-between;
  }
  &_type {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #000000;
  }
  &_price {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: right;
    text-transform: capitalize;

    color: #842c68;
  }
  .description {
    text-align: start;
  }
  .link-store {
    display: flex;
    align-items: flex-start;
    color: black;
  }
}
</style>
