<template>
  <div>
    <div v-if="!cartProducts.length">
      <p class="product-empty">
        Cart is empty, please add something from the
        <router-link class="product-empty_link" :to="'/store'"
          >store</router-link>
      </p>
    </div>
    <div v-else >
      <transition-group name="list" tag="p" class="head">
        <div v-for="(item, id) in cartProducts" :key="id" class="list-item">
          <div class="product">
            <div class="product_image-box">
              <router-link :to="{ name: 'product', params: { id: item._id } }">
                <img
                  class="product_image"
                  :src="require(`@/../../server/static/` + item.picture)"
                  alt="furniture"
                />
              </router-link>
            </div>
            <div class="product_name-type">
              <div class="product_type-box">
                <p class="product_type">{{ item.type }}</p>
              </div>
              <div class="product_name-box">
                <p class="product_name">{{ item.name }}</p>
              </div>
            </div>

            <div class="product_quantity-box">
              <p class="product_quantity-text">quantity:</p>
              <p class="product_quantity">{{ item.quantity }}</p>
            </div>
            <div class="product_total">
              <p class="product_total-text">total price:</p>
              <p class="product_total-price">
                ${{price(item.price, item.quantity) }}
              </p>
            </div>
            <div class="product_delete">
              <span
                @click="removeProduct(id)"
                class="material-symbols-outlined product_delete-button"
              >
                delete
              </span>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "cart-items",
  data() {
    return {
      cart: null,
    };
  },
  computed: {
    ...mapState({
      cartProducts: (state) => state.cart.cartProducts,
    }),
  },
  methods: {
    ...mapMutations({
      deleteProduct: "cart/deleteProduct",
    }),
    removeProduct(index) {
      this.deleteProduct(index);
    },
    price(price, quantity) {
     return price * quantity
    },
  },
};
</script>

<style scoped lang="scss">
.head {
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;

}
.product {
  display: flex;
  width: 1100px;
  height: 180px;
  background: #f2f2f2;
  margin: 15px 0 15px 0;
  border-radius: 15px;
  align-items: center;
  flex-direction: row;
  gap: 60px;

  &_image-box {
    margin: 10px 0 0 30px;
    width: 200px;
  }
  &_image {
    max-height: 130px;
    border-radius: 15px;
  }
  &_type {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  &_name-type {
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
  }
  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #000000;
  }
  &_quantity-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
  }
  &_quantity-text {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
  }
  &_quantity {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  &_total {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
  }
  &_total-text {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
  }
  &_total-price {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-transform: capitalize;
    color: #842c68;
  }
  &_delete {
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
  }
  &_delete-button {
    height: 35px;
    width: 35px;
    font-size: 35px;
  }
  &_delete-button:active {
    height: 45px;
    width: 45;
    font-size: 45px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
}

.product-empty {
  font-size: 28px;
  font-weight: 700px;
  width:1100px;
  text-align: start;
  &_link {
    color: black;
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
