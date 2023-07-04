<template>
  <div>
    <showtop Text="我的"></showtop>
    <top-nav style="position: fixed; bottom: 0px"></top-nav>

    <n-layout has-sider style="width: 348px; height: 200px">
      <n-layout-sider style="width: 148px">
        <img
          src="@/assets/img/ss2.png"
          style="position: fixed; left: 0px; top: 50px; height: 150px"
          @click="$router.push('/makep')"
        />
      </n-layout-sider>

      <n-layout>
        <n-layout-header> 昵称:&nbsp; {{ nc }} </n-layout-header>

        <n-layout-content content-style="padding: 24px;">
          性别:&nbsp; {{ xb }}
        </n-layout-content>

        <n-layout-content content-style="padding: 24px;">
          电话: &nbsp;{{ sj }}
        </n-layout-content>
        <n-layout-header> 职业: &nbsp;{{ dz }} </n-layout-header>
      </n-layout>
    </n-layout>

    <n-layout embedded content-style="text-align:center; padding: 24px;">
      <n-card>
        {{ qm }}   </n-card>
    </n-layout>

    <n-layout-footer> 兴趣爱好: </n-layout-footer>
    <n-layout v-for="(item, index) in ah" :key="index" embedded>
      <n-card>
        {{ item }}
      </n-card>
    </n-layout>

    <div class="cart" style="position: fixed; bottom: 60px; left: 15px">
      <img
        src="../assets/img/购物车.png"
        alt=""
        style="width: 40px; height: 40px; border-radius: 15px 50px 30px 40px"
        id="carweizhi"
        @click="$router.push('/car')"
      />
    </div>
  </div>
</template>
<script>
import showtop from "../components/showtop.vue";
import TopNav from "@/components/topNav.vue";
import { reactive, ref, onMounted, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import store from "@/store/index.js";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      nc: "hjj",
      sj: "111111111111",
      dz: "学生",
      xb: "男",
      qm: "这个人很懒，什么都没写",
      ah: [{ 0: "睡觉" }],
    });
    const change = () => {
      router.push("/makep");
    };
    onMounted(() => {
      state.nc = store.state.nc;
      state.sj = store.state.sj;
      state.dz = store.state.dz;
      state.xb = store.state.xb;
      state.ah = store.state.ah;
      state.qm = store.state.qm;
      console.log(state.ah);
    });

    return {
      ...toRefs(state),
      change,
      router,
    };
  },

  components: {
    TopNav,
    showtop,
    TopNav,
  },
};
</script>
 
<style >
.zong {
  margin: 0 auto;
  padding-left: 20px;
}
.zong > li {
  margin-top: 20px;
}
.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
.t1 {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  margin: auto;
}
</style>