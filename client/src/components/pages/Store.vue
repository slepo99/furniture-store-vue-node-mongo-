<template>
  <div>
    <VueHeader />
    <div class="container-body">
      <div class="container-body_breadcrumb">
        <router-link :to="'/'">main</router-link> >
        <router-link :to="'/store'">store</router-link>
      </div>
      <div class="container-body_content">
        <div class="filter">
          <StoreFilter />
        </div>
        <div class="store-list">
          <store-list />
        </div>
        <scroll />
      </div>
    </div>

    <VueFooter />
  </div>
</template>

<script>
import VueFooter from "@/components/UI/VueFooter.vue";
import VueHeader from "@/components/UI/VueHeader.vue";
import StoreFilter from "@/components/StoreFilter.vue";
import StoreList from "@/components/StoreList.vue";
import Scroll from "@/components/Scroll.vue";

export default {
  name: "store",
  components: { VueFooter, VueHeader, StoreFilter, StoreList, Scroll },
  mounted() {
    window.scrollTo(0, top)
  }
};
</script>

<style lang="scss" scoped>
.container-body {
  padding: 50px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: flex-start;
  &_breadcrumb {
    margin: 10px 0 0 80px;
    gap: 5px;
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
  .filter {
    max-width: 300px;
  }
}
</style>
