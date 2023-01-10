<template>
  <div class="wrapper">
    <VueHeader />
    <div class="container-body">
      <div class="container-center">
        <div class="title-area">
          <div class="title">
            <p>Your Best Value Products</p>
          </div>
          <div @click="openSearchFieldToStore" style="margin-top: 40px">
            <router-link to="/store" class="link-store">
              <vue-button>SHOP NOW</vue-button>
            </router-link>
          </div>
        </div>
        <div class="main-image"></div>
      </div>

      <div class="container-content">
        <div class="content-title">
          <p>Get some Inspiration from our refreshing ideas</p>
        </div>
        <div class="products">
          <div>
            <img src="@/assets/images/mainPage/products/sofas.jpeg" alt="" />
            <p>sofas</p>
          </div>
          <div>
            <img
              src="@/assets/images/mainPage/products/CoffeTables.jpeg"
              alt=""
            />
            <p>coffe-tables</p>
          </div>
          <div>
            <img
              src="@/assets/images/mainPage/products/ComboSets.jpeg"
              alt=""
            />
            <p>combo-sets</p>
          </div>
          <div>
            <img
              src="@/assets/images/mainPage/products/NeckTables.jpeg"
              alt=""
            />
            <p>neck-tables</p>
          </div>
          <div>
            <img src="@/assets/images/mainPage/products/Rugs.jpeg" alt="" />
            <p>rugs</p>
          </div>
          <div>
            <img src="@/assets/images/mainPage/products/decor.jpeg" alt="" />
            <p>decor</p>
          </div>
        </div>
      </div>

      <div class="product-futures">
        <p class="product-title">Living Room Ideas</p>

        <div class="futures">
          <div class="image">
            <img src="@/assets/images/mainPage/products/Futures.jpeg" alt="" />
          </div>
          <div class="text-content">
            <h1>Feature that is amazing</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
            </ul>
            <div style="margin-top: 40px" @click="openSearchFieldToStore">
              <vue-button class="btn">
                <router-link to="/store" class="link-store"
                  >Shop living room</router-link
                >
              </vue-button>
            </div>
          </div>
        </div>
      </div>
      <scroll />
    </div>

    <VueFooter />
  </div>
</template>

<script>
import VueHeader from "@/components/UI/VueHeader.vue";
import VueFooter from "@/components/UI/VueFooter.vue";
import VueButton from "@/components/UI/VueButton.vue";
import { mapGetters, mapMutations } from "vuex";
import Scroll from "@/components/Scroll.vue";
export default {
  name: "main-component",
  components: { VueHeader, VueFooter, VueButton, Scroll },
  computed: {
    ...mapGetters({
      openSearchFieldToStore: "headerProducts/openSearchFieldToStore",
    }),
    
  },
  methods: {
    ...mapMutations({
      resetAuthError: 'auth/resetAuthError'
    })
  },
  mounted() {
    window.scrollTo(0, top);
    this.resetAuthError()
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.container-body {
  max-width: 100%;
  padding: 30px 0 0 0;
  margin: 0 auto;
}
.container-center {
  max-width: 100%;
  max-height: 1000px;
}
.title-area {
  padding-top: 40px;
}
.title p {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
}
.link-store {
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  text-decoration: none;
}
.main-image {
  width: 1280px;
  height: 600px;
  background: url("@/assets/images/mainPage/mainImage.jpeg");
  margin-top: 50px;
}
.container-content {
  margin-top: 70px;
}
.content-title {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 400px 400px;
  max-width: 1290px;
  margin-top: 60px;
}
.products div img {
  display: block;
}
.products div p {
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  height: 98px;
  left: calc(50% - 388px / 2 - 446px);
  top: 1063px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-futures {
  max-width: 1280px;
  min-height: 600px;
  margin-top: 20px;
  background: #f2f2f2;
  margin-bottom: 100px;
}
.product-title {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  padding-top: 20px;
}
.futures {
  display: flex;
  margin-top: 60px;
}
.image img {
  width: 600px;
  height: 300px;
}
.text-content {
  width: 600px;
  height: 200px;
  text-align: start;
}
.text-content h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}
.text-content p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}
.text-content ul {
  margin-top: 30px;
}
.text-content ul li {
  margin: 10px 0 10px 0;
}
</style>
