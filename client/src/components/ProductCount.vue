<template>
  <div>
    <select
      :value="modelValue"
      @input="updateProductCount"
      id="cars"
      class="select"
    >
      <option v-for="option in 10" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "product-count",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateProductCount(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.select {
  width: 75px;
  height: 36.9px;
  border: 1.19048px solid #999999;
  font-weight: 400;
  font-size: 24.4898px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
