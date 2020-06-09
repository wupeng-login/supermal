<template>
  <div>
    <h2>分类</h2>
    <div class="wrapper">
      <ul class="content">
        <li>吴朋1</li>
        <li>吴朋2</li>
        <li>吴朋3</li>
        <li>吴朋4</li>
        <li>吴朋5</li>
        <li>吴朋6</li>
        <li>吴朋7</li>
        <li>吴朋8</li>
        <li>吴朋9</li>
        <li>吴朋10</li>
        <li>吴朋11</li>
        <li>吴朋12</li>
        <li>吴朋13</li>
        <li>吴朋14</li>
        <li>吴朋15</li>
        <li>吴朋16</li>
        <li>吴朋17</li>
        <li>吴朋18</li>
        <li>吴朋19</li>
        <li>吴朋20</li>
        <li>吴朋21</li>
        <li>吴朋22</li>
        <li>吴朋23</li>
        <li>吴朋24</li>
        <li>吴朋25</li>
        <li>吴朋26</li>
        <li>吴朋27</li>
        <li>吴朋28</li>
        <li>吴朋29</li>
        <li>吴朋30</li>
        <li>吴朋31</li>
        <li>吴朋32</li>
        <li>吴朋33</li>
        <li>吴朋34</li>
        <li>吴朋35</li>
        <li>吴朋36</li>
        <li>吴朋37</li>
        <li>吴朋38</li>
        <li>吴朋39</li>
        <li>吴朋40</li>
        <li>吴朋41</li>
        <li>吴朋42</li>
        <li>吴朋43</li>
        <li>吴朋44</li>
        <li>吴朋45</li>
        <li>吴朋46</li>
        <li>吴朋47</li>
        <li>吴朋48</li>
        <li>吴朋49</li>
        <li>吴朋50</li>
        <li>吴朋51</li>
        <li>吴朋52</li>
        <li>吴朋53</li>
        <li>吴朋54</li>
        <li>吴朋55</li>
        <li>吴朋56</li>
        <li>吴朋57</li>
        <li>吴朋58</li>
        <li>吴朋59</li>
        <li>吴朋60</li>
        <li>吴朋61</li>
        <li>吴朋62</li>
        <li>吴朋63</li>
        <li>吴朋64</li>
        <li>吴朋65</li>
        <li>吴朋66</li>
        <li>吴朋67</li>
        <li>吴朋68</li>
        <li>吴朋69</li>
        <li>吴朋70</li>
        <li>吴朋71</li>
        <li>吴朋72</li>
        <li>吴朋73</li>
        <li>吴朋74</li>
        <li>吴朋75</li>
        <li>吴朋76</li>
        <li>吴朋77</li>
        <li>吴朋78</li>
        <li>吴朋79</li>
        <li>吴朋80</li>
        <li>吴朋81</li>
        <li>吴朋82</li>
        <li>吴朋83</li>
        <li>吴朋84</li>
        <li>吴朋85</li>
        <li>吴朋86</li>
        <li>吴朋87</li>
        <li>吴朋88</li>
        <li>吴朋89</li>
        <li>吴朋90</li>
        <li>吴朋91</li>
        <li>吴朋92</li>
        <li>吴朋93</li>
        <li>吴朋94</li>
        <li>吴朋95</li>
        <li>吴朋96</li>
        <li>吴朋97</li>
        <li>吴朋98</li>
        <li>吴朋99</li>
        <li>吴朋100</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
      return {
          scroll:null
      }
  },
  mounted() {
    this.scroll = new BScroll('.wrapper',{
        probeType:2,
        pullUpLoad: true
    })
    this.scroll.on('scroll',position => {
        console.log(position)
    })
    this.scroll.on("pullingUp",()=>{
        console.log('上拉加载更多')
    })
  }
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>