import { debounce } from "common/utils"
export const itemListenerMixin = {
    data() {
        return {
            itemImageListener: null,
            newRefresh:null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImageListener = () => {
            this.newRefresh()
        }
        this.$bus.$on("itemImageLoad", this.itemImageListener)
        // console.log('我是吴朋');
        
    },
}