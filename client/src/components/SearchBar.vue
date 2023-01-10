<template>
  <div class="form__group field">
    <input
      type="text"
      :value="modelValue"
      @input="updateInput"
      placeholder="SEARCH PRODUCT..."
      class="form__field"
      name="search product..."
      id="name"
      required
    />
    <label for="name" class="form__label">search product...</label>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "search-bar",
  props: {
    modelValue: [String, Number],
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.headerProducts.isOpen,
    }),
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
$primary: #9b9b9b;
$secondary: #9b9b9b;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  border-color: black;
  color: black;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;

  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
    text-transform: uppercase;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    text-transform: uppercase;
  }
}
.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;

  border-color: black;
}
.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
