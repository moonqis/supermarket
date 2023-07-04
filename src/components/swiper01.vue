<template>
    <div>
    <div class="sname">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-remaituijian"></use>   
        </svg>
      <span>热卖</span>
    </div>
    
    <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :autoplay="{
      autoplay:true,
      delay:3000,
      pauseOnMouseEnter:true,
      disableOnInteraction:true,
    }"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide v-for="(item,i) in imgs" :key="i">
      <img :src="item.pic"/>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, A11y, Autoplay } from 'swiper';
  // Import Swiper styles
  import 'swiper/css';
  // 分页器
  import 'swiper/css/pagination';
  // 自动轮播
  import 'swiper/css/autoplay';
  // 左右滑动按钮
  // import 'swiper/css/navigation';
  // 下方滑动条
  // import 'swiper/css/scrollbar';
  

  //*******API */
  // import axios from 'axios';
 // import { getBanner } from '@/api/index'

  export default {
    data: function () {
      return{
        imgs:[
          {pic: require('../assets/img/1.png')},
          {pic: require('../assets/img/2.png')},
          {pic: require('../assets/img/3.png')},
          {pic: require('../assets/img/4.png')},
          {pic: require('../assets/img/5.png')},
        ]
      }
    },
    // async mounted(){
    //   let res = await getBanner(1)
    //   // console.log(res)
    //   this.imgs = res.data.banners
    //   console.log(this.imgs)
    // },
    components: {
      Swiper,
      SwiperSlide,
      Autoplay,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      return {
        onSwiper,
        modules:[Pagination,A11y,Autoplay]
      };
    },
  };
</script>

<style lang="less" >
  .sname{
        display: flex;
        height: 1rem;
        align-items: center;
        padding-left: 20px;
            font-size: 0.3rem;
            font-weight: 600;
            color: red;
        .icon{
          padding-right: 10px;
                width: 0.6rem;
                height: 0.5rem;
        }

  }
  .swiper{
    z-index: 0;
    width: 7rem;
    height: 2.8rem;
    border-radius: 0.1rem;

  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background-color: orangered;
  }
</style>