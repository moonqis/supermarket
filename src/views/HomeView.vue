<template>
  <div class="home">
   <icon-list></icon-list>
    <swiper-01></swiper-01>
    <top-nav style="position:fixed;bottom:0px"></top-nav>
    <div class="fenjiexian"><span class=midText></span></div>
    <music-list></music-list>
    <goodslist></goodslist>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/topNav.vue'
import swiper01 from '@/components/swiper01.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
import goodslist from '@/components/goodslist.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swiper01,
    iconList,
    musicList,
    goodslist
  }
  // directives:{
  //   swiper :directive
  // }
}
</script>

<style lang="less" scoped>
  .fenjiexian{
    position: relative;
    margin: 0 aoto;
    width: 7.5rem;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101,101,101,1);
    margin-bottom:00.2rem;
  }
  .midText{
    height: 0.15rem;
    position: absolute;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }


</style>