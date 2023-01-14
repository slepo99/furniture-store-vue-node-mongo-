<template>
  <div>
    <div ref="top" class="serch-field" v-if="isOpen">
      <SearchBar :model-value="text" @update:model-value="setText" />
    </div>
    <div class="store-products-list">
      <div v-for="item in searchProducts" :key="item._id">
        <div class="product">
          <div class="products-info">
            <img
              :src="require('@/../../server/static/' + item.picture)"
              alt=""
            />
            <div class="item-block">
              <p class="type">{{ item.type }}</p>
              <p class="price">${{ item.price }}</p>
            </div>
            <div class="name-block">
              <p class="name">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <router-link :to="{ name: 'product', params: { id: item._id } }">
          <button class="chooseBtn"><p>Choose options</p></button>
        </router-link>
        <hr class="horizontal" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: { SearchBar },
  name: "store-list",

  computed: {
    ...mapState({
      text: (state) => state.filter.text,
      isOpen: (state) => state.headerProducts.isOpen,
    }),
    ...mapGetters({
      searchProducts: "filter/searchProducts",
    }),
  },
  methods: {
    ...mapMutations({
      setText: "filter/setText",
    }),
  },
};
</script>

<style scoped lang="scss">
.store-products-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-width: 1000px;
  padding-left: 30px;
  padding-top: 40px;
  gap: 40px;
}
.chooseBtn {
  width: 150px;
  height: 30px;
  cursor: pointer;
  margin: 15px 0 30px 0;
  background: #e5e5e5;
  border: 1px solid #b2b1b1;
  border-radius: 10px;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 15px;
  }
}
.chooseBtn:hover {
  background-color: black;
  color: white;
}
.chooseBtn:active {
  background-color: black;
  color: white;
  width: 160px;
  height: 40px;
}
.item-block {
  display: flex;
  justify-content: space-between;
}
img {
  width: 100%;
  border: 2px solid #ababab;
  border-radius: 10px;
}
.type {
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 21px;
}
.price {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: capitalize;
  color: #842c68;
}
.name {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  text-align: left;
  color: #000000;
}
.horizontal {
  background-color: #c4c4c4;
  width: 300px;
}
.serch-field {
  display: flex;
  justify-content: flex-end;
}
</style>
