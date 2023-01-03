<template>
  <div>
    <vue-header />
    <div class="container-body">
      <div class="container-body_breadcrumb">
        <router-link :to="'/'">main</router-link> >
        <router-link :to="'/store'">store</router-link> >
        <router-link :to="{ name: 'product' }">product</router-link>
      </div>
      <div
        v-for="item in getSelectedData()"
        :key="item._id"
        class="container-product"
      >
        <div class="product-name">
          <p>{{ item.name }}</p>
        </div>
        <div class="product">
          <div class="product-slider">
            <ProductSlider :image="item.picture" />
          </div>
          <div class="product-info">
            <div class="description_price">
              <div class="description">
                <p>{{ item.description }}</p>
              </div>
              <div class="price">
                <h1>${{ item.price }}</h1>
              </div>
            </div>
            <hr class="horizontal" />
            <div class="select-bloc">
              <product-count
                class="product-count"
                :model-value="productCount"
                @update:model-value="updateProductCount"
              />
              <vue-button class="btn" @click="addToCart(item)"
                >add to cart
              </vue-button>
            </div>
            <hr class="horizontal" />

            <div class="about-title">
              <p>DESCRIPTION</p>
            </div>
            <div class="about-description">
              <p>{{ item.bigDescription }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <product-similar />
      </div>
      <scroll />
    </div>
    <vue-footer />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import VueFooter from "@/components/UI/VueFooter.vue";
import VueHeader from "@/components/UI/VueHeader.vue";
import ProductSlider from "@/components/ProductSlider.vue";
import VueButton from "@/components/UI/VueButton.vue";
import ProductCount from "../ProductCount.vue";
import Scroll from "@/components/Scroll.vue";
import ProductSimilar from "../ProductSimilar.vue";
export default {
  components: {
    VueHeader,
    VueFooter,
    ProductSlider,
    VueButton,
    ProductCount,
    Scroll,
    ProductSimilar,
  },
  name: "product-page",
  computed: {
    ...mapGetters({
      products: "filter/products",
    }),
    ...mapState({
      productCount: (state) => state.cart.productCount,
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "filter/fetchProducts",
    }),
    ...mapMutations({
      createProduct: "cart/createProduct",
      updateProductCount: "cart/updateProductCount",
      resetProductCount: "cart/resetProductCount",
    }),
    addToCart(item) {
      for (let i = 0; i < parseFloat(this.productCount); i++) {
        this.createProduct({ ...item, quantity: 1 });
      }
      setTimeout(() => {
        return this.resetProductCount();
      }, 1000);
    },
    getSelectedData() {
      const data = this.products.filter(
        (item) => item._id == this.$route.params.id
      );
      return data;
    },
  },
  mounted() {
    this.fetchProducts();
    window.scrollTo(0, top);
    this.resetProductCount();
  },
};
</script>
<style lang="scss" scoped>
.container-body {
  padding-top: 50px;
  max-width: 1280px;
  margin: 50px auto;
  min-height: 1000px;
  &_breadcrumb {
    gap: 5px;
    display: flex;
    align-items: center;
  }
  &_breadcrumb a {
    color: black;
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    text-transform: capitalize;
  }
  &_breadcrumb a:last-child {
    color: #999999;
  }
  &_content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}

.product-name {
  text-align: start;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }
}

.product {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  align-content: center;
  text-align: start;
}

.product-slider {
  width: 90%;
}

.product-info {
  width: 600px;
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
}
.description_price {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;

  .price {
    width: 20%;
    color: #842c68;
  }
}
.btn {
  width: 148px;
  height: 37px;
  font-style: normal;
  font-weight: 400;
  font-size: 14.8px;
  color: #ffffff;
}
.about-title {
  width: 110px;
  height: 37px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    text-transform: uppercase;
    text-align: center;
  }
}
.select-bloc {
  margin: 30px 0 30px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
}
</style>
