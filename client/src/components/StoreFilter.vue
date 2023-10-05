<template>
  <div class="filter-container">
    <div class="form-price">
      <h1>Filter by</h1>
      <hr class="horizontal" />
      <div class="price-filter-container">
        <h1>Price</h1>
        <div>
          <input
            type="checkbox"
            id="lowCost"
            v-model="categories.price.lowCost"
            :disabled="
              (categories.price.midCost || categories.price.highCost) == false
                ? false
                : true
            "
          />
          <label for="lowCost">$0 - $300</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="midCost"
            v-model="categories.price.midCost"
            :disabled="
              (categories.price.lowCost || categories.price.highCost) == false
                ? false
                : true
            "
          />
          <label for="midCost">$300 - $600</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="highCost"
            v-model="categories.price.highCost"
            :disabled="
              (categories.price.midCost || categories.price.lowCost) == false
                ? false
                : true
            "
          />
          <label for="highCost">$600 - $1000</label>
        </div>
      </div>
      <hr class="horizontal" />
      <div class="type-filter-container">
        <h1>Type</h1>

        <div v-for="item in Types()">
          <input
            :ref="item"
            type="checkbox"
            :id="item"
            v-model="categories.type[item]"
          />
          <label :for="item"> {{ item }}</label>
        </div>
      </div>
      <hr class="horizontal" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from "vuex";
import StoreList from "@/components/StoreList.vue";

export default {
  components: { StoreList },
  name: "store-filter",
  methods: {
    ...mapActions({
      fetchProducts: "filter/fetchProducts",
    }),
    Types() {
      return Object.keys(this.categories.type);
    },
  },
  computed: {
    ...mapState({
      categories: (state) => state.filter.categories,
    }),
  },

  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-around;
  margin-right: 100px;
}
.form-price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.horizontal {
  background-color: #c4c4c4;
  height: 1/8px;
  width: 300px;
  margin: 0;
}
.vertical {
  background-color: #c4c4c4;
  height: 700px;
  margin-left: 20px;
}
.price-filter-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
}
.price-filter-container div {
  margin-bottom: 10px;
}
.type-filter-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 20px 0;
}
.type-filter-container div {
  margin-bottom: 10px;
}
input {
  cursor: pointer;
}
label {
  cursor: pointer;
}
</style>
