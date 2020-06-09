<template>
  <!-- <div class="detail-swiper"> -->
    <swiper class="swiper1">
      <swiper-item v-for="(item,i) in topImages" :key="i" >
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  <!-- </div> -->
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.swiper1 {
  height: 300px;
  overflow: hidden;
}
</style>