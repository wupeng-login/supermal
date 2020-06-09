<template>
    <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item,index) in detailInfo.detailImage[0].list" :key='index' :src="item" @load="imgLoad" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailGoodsInfo",
    props:{
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            counter:0,
            imagesLength:0
        }
    },
    methods: {
        imgLoad(){
            // 判断，所有的图片加载完了，那么进行一次回调就行了
            if(++this.counter === this.imagesLength) {
                this.$emit('imageLoad')
                console.log('---');
                
            }
            
        }
    },
    watch: {
        detailInfo() {
            // 获取图片的个数
            this.imagesLength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>
<style scoped>
    .goods-info {
        padding: 20px 0;
        background-color: #fff;
    }
    .info-list img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
</style>