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
        <div class="num">
          <h1>{{ id + 1 }}</h1>
        </div>
        <div class="person-data">
          <div class="initials">
            <img
              src="@/assets/icons/orderedProducts/user.png"
              class="initials_icon"
            />
            <div class="initials_box">
              <h3>Name: {{ item.name }}</h3>
              <h3>Surname: {{ item.surname }}</h3>
              <h3>Phone number: {{ item.phoneNumber }}</h3>
              <h3>Unique ID: {{ item._id }}</h3>
            </div>
          </div>
          <div class="adress">
            <img
              src="@/assets/icons/orderedProducts/world.png"
              class="person-icon"
              alt=""
            />
            <div class="adress_data">
              <h3>Country: {{ item.country }}</h3>
              <h3>City: {{ item.city }}</h3>
              <h3>Adress: {{ item.adress }}</h3>
              <h3>Post code: {{ item.postCode }}</h3>
            </div>
          </div>
        </div>

        <div class="content" v-for="i in item.products" :key="i">
          <hr />
          <div class="content_box">
            <h3>Type:{{ i.type }}</h3>
            <h3>Name: {{ i.name }}</h3>
            <h3>Quantity: {{ i.quantity }}</h3>
            <img :src="require('@/../../server/static/' + i.picture)" alt="" />
          </div>
        </div>
        <vue-button @click.stop="deleteOrderedProduct(item._id)">Сlose order</vue-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueButton from './UI/VueButton.vue';

export default {
  components: { VueButton },
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
  padding: 100px 0 50px 50px;

  .container-test {
    width: 1000px;
    padding: 50px 0 0 0;

    .header {
      width: 100%;
      max-height: 200px;
      min-height: 150px;
      border-radius: 14px;
      cursor: pointer;
      transition: 1s;
      overflow: hidden;
      background-color: rgba(237, 238, 237, 0.89);
      padding: 0 0 30px 20px;
      border: 4px solid rgb(71, 71, 71);
      .num {
        h1 {
          margin: 0;
          height: 0px;
          text-align: start;
        }
      }
      .person-data {
        display: grid;
        grid-template-columns: 500px 1fr;
        grid-template-rows: 260px;
        .initials {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 30px;
          gap: 60px;
          img {
            width: 100px;
            height: 100px;
            margin-top: 20px;
          }
          &_box {
            h3 {
              text-align: start;
            }
          }
        }
        .adress {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 30px;
          gap: 60px;
          img {
            width: 100px;
            height: 100px;
            margin-top: 20px;
          }
          &_data {
            h3 {
              text-align: start;
            }
          }
        }
      }
    }
    .open {
      max-height: 5000px;
    }
  }
  .content {
    
    gap: 30px;
    &_box {
      margin: 30px 0 30px 0;
      display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
      h3 {
        margin: auto 0 auto 0 ;
      }
      img {
        border-radius: 10px;
      }
    }
  }
  hr {
    width: 90%;
    height: 1px;
    background-color: black;
  }
}
</style>
