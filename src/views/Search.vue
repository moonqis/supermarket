<template>
<div>
    <div id="searchPage">
    <showtop Text="商品搜索"></showtop>      
    <top-nav style="position:fixed;bottom:0px"></top-nav>
     <n-input-group style="position:fixed;top:50px;left: 20px;">
      <n-button type="primary">
        搜索
      </n-button>
      <input :style="{ width: '50%' }" v-model="phone" id="username" type="text" placeholder="搜索" />
      <n-button type="primary" ghost @click="activate('bottom')">
        搜索
      </n-button>
    </n-input-group>
    </div>
  <div
    id="drawer-target"
    style="
      position: relative;
      width: 100%;
      height: 450px;
      border: 1px solid rgba(128, 128, 128, 0.2);
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    "
  >
  </div>
  <n-drawer
    v-model:show="active"
    :width="200"
    :height="400"
    :placement="placement"
    :trap-focus="false"
    :block-scroll="false"
    to="#drawer-target"
  >
    <n-drawer-content title="搜索结果">
      
    <div v-if="phone==='手机'">
     <goods-1></goods-1>
    </div>
    <div v-else-if="phone==='平板'">
      <goods-2></goods-2>
    </div>
    <div v-else-if="phone==='锅'">
      <goods-3></goods-3>
    </div>
    <div v-else-if="phone==='吸尘器'">
      <goods-4></goods-4>
    </div>
    <div v-else-if="phone==='家具'">
      <goods-5></goods-5>
    </div>
    <div v-else-if="phone==='装修'">
      <goods-6></goods-6>
    </div>
    <div v-else>
      <h4>出错了.. 为您推荐以下产品</h4>
     <goodslist></goodslist>
    </div>

    </n-drawer-content>
  </n-drawer>
</div>
</template>

<script>
import SearchTop from '@/components/SearchTop.vue'
import TopNav from '../components/topNav.vue'
import showtop from '../components/showtop.vue' 
import { defineComponent, ref } from "vue";
import goodslist from '@/components/goodslist.vue';
import Goods1 from '@/components/goods/goods1.vue';
import Goods2 from '@/components/goods/goods2.vue';
import Goods3 from '@/components/goods/goods3.vue';
import Goods4 from '@/components/goods/goods4.vue';
import Goods5 from '@/components/goods/goods5.vue';
import Goods6 from '@/components/goods/goods6.vue';


export default {
    data:function(){
        return {
            phone:"",
        }
    },
    setup(){
    const active = ref(false);
    const placement = ref("right");
    const activate = (place) => {
      active.value = true;
      placement.value = place;
    };
    return {
      active,
      placement,
      activate
    };
    },
    components:{
        SearchTop,
        TopNav,
        showtop,
        goodslist,
        Goods1,
        Goods2,
        Goods3,
        Goods4,
        Goods5,
        Goods6

    }
}
</script>