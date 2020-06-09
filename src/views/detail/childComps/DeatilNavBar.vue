<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick"> <img src="~assets/img/common/left.png" alt=""></div>  
      <div slot="center" class="title">
          <div v-for="(item,i) in titles" :key="i" class="title-item" :class="{active: i===currentIndex}" @click="titleClick(i)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex : 0
    };
  },
  methods: {
      titleClick(index) {
          this.currentIndex = index;
          this.$emit('titleClick',index);
      },
      backClick() {
          // 等价的   返回上一级
          this.$router.back()
          // this.$router.go(-1)
      }
  }

};
</script>
<style scoped>
.title {
    display: flex
}
.title .title-item {
    flex: 1;
    font-size: 13px;
}
.active {
    color: var(--color-high-text)
}
.back img{
    width: 25px;
    height: 25px;
    margin-top: 10px;
}
</style>