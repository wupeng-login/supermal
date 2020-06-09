<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probeType='3' @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore"> 
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/content/backTop/BackTop';

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from "common/utils"
import { itemListenerMixin } from "common/mixin"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords: [],
      keywords: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed : false,
      saveY: 0,
    };

    
  },
  mixins:[itemListenerMixin],
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");  
  },
  mounted() {
    // //  1.监听item中的图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh,500)
    // // 监听事件进行保存
    // this.itemImgListener = ()=>{
    //   refresh()
    //   // this.$refs.scroll.refresh()
    // }  
    // this.$bus.$on("itemImageLoad",this.itemImgListener)
  },
 
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  // 用户进来的时候
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    // 刷新一下
    this.$refs.scroll.refresh()
  },
  // 用户离开的时候
  deactivated() {
    // this.saveY = this.$refs.scroll.getScrollY()
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.saveY);

    //取消全局事件的监听
    this.$bus.$off("itemImageLoad",this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // 返回顶部x y 毫秒  三个参数
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000      
      // 2.决定tanControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // console.log('加载更多');
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
    // 获取tabControl的offsetTop
    // 所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.dKeywords = res.data.dKeyword;
        this.keywords = res.data.keywords;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 上拉加载更多页的数据，
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;

  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}

.content {
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
}
/* .content {
  height: calc(100% - 93px); 
  overflow: hidden;
  margin-top: 44px;
} */
.tab-control {
  position: relative;
  z-index: 9;
}
</style>