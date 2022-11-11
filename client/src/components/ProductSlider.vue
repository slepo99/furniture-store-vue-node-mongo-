<template>
  <div class="constainer-swiper">
    <swiper
      
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide>
        <img
          :src="
            require('/Users/pc/Documents/MyData/MyProjects/fullstack_store/server/static/bigSize/' +
              image)
          "
          alt=""
          class="main-image"
        />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle1.jpeg" />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle2.jpeg" />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle3.jpeg" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          :src="
            require('/Users/pc/Documents/MyData/MyProjects/fullstack_store/server/static/bigSize/' +
              image)
          "
          alt=""
          class="main-image"
        />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle1.jpeg" />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle2.jpeg" />
      </swiper-slide>

      <swiper-slide>
        <img src="@/assets/images/staticImages/Rectangle3.jpeg" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "product-slider",
  props: {
    image: {
      type: String,
    },
  },
  setup() {
    let thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      setThumbsSwiper,
      thumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
<style scoped>
.constainer-swiper {
  width: 768px;
  height: 550px;
  cursor: pointer;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 30%;
  height: 30%;
  object-fit: cover;
}
.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.mySwiper2 {
  height: 80%;
  width: 100%;
}
.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
