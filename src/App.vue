<template>
  <div id="app">
    <main-tab-bar>
    </main-tab-bar>
    <!--<keep-alive> 如果去其他页面，在再回来的时候，还会在原来的位置  -->
      
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar';

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
