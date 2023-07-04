<template>
<div>
  <showtop Text="编辑资料"></showtop>
  <top-nav style="position: fixed; bottom: 0px"></top-nav>
  <ul class="zong">
    <li>
      姓 名
      <input type="text" v-model="nc" />
    </li>
    <li>头 像      <img src="@/assets/img/ss2.png" style="height: 40px" /></li>



    <li>
      昵 称
      <input type="text" v-model="nc" />
    </li>
    <li>
      性 别 <input type="radio" value="男" v-model="xb" />男
      <input type="radio" value="女" v-model="xb" />女
    </li>
    <li>
      爱 好 <input type="checkbox" value="爬山" v-model="ah" />爬山
      <input type="checkbox" value="跑步" v-model="ah" />跑步
      <input type="checkbox" value="打篮球" v-model="ah" />打篮球
      <input type="checkbox" value="羽毛球" v-model="ah" />羽毛球
    </li>
    <li>
      出生日期
      <input type="date" />
    </li>

    <li>
      手机号码
      <input type="text" v-model="sj" @blur="sjh()" placeholder="13515452658" />
    </li>
    <li>
      职业
      <input type="text" v-model="dz"  placeholder="职业" />
    </li>
    <li>
      个性签名
      <input type="text" v-model="qm"  placeholder="个性签名" />
    </li>
  </ul>

  <button class="but" @click="tj()">确认修改</button>
</div>
</template>
<script>
// import citys from './public/city.json'
import showtop from "../components/showtop.vue";
import TopNav from "@/components/topNav.vue";
import { reactive, ref, onMounted, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import store from "@/store/index.js";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      nc: "",
      sj: "",
      dz: "",
      xb: "",
      qm:"",
      ah: [],
    });
    const sjh = () => {
      console.log(state.nc, state.xb, state.ah, state.sj, state.qm,state.dz);
    };
    const tj = () => {
      if (state.sj == "") {
        alert("手机号码不能为空");
      } else {
        store.state.nc = state.nc;
        store.state.sj = state.sj;
        store.state.dz = state.dz;
        store.state.xb = state.xb;
        store.state.qm = state.qm;
        store.state.ah = state.ah;
        
        console.log(store.state.sj);
        router.push('/me')
      }
    };

    return {
      ...toRefs(state),
      tj,
      sjh,
      router,
    };
  },

  components: {
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
.but {
  font-size: 15px;
  position: fixed;
  left: 100px;
  bottom: 150px;
}
</style>