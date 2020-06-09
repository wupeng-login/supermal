<template>
    <swiper>
        <swiper-item v-for="(item,i) in banners" :key="i" >
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
    name:"HomeSwiper",
    /**
        下下面的两个props是等价的
     */ 

    // props:{
    //     banners:{
    //         type:Array,
    //         default(){
    //             return []
    //         }
    //     }
    // },
    props:[
        "banners"
    ],
    components:{
        Swiper,
        SwiperItem
    },
    data() {
        return {
            isLoad: false
        }
    },
    methods: {
        imageLoad() {
            if(!this.isLoad){
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>
<style scoped>

</style>