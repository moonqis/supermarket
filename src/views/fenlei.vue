<template>
<div>
<div class="a">

  <top-nav style="position: fixed; bottom: 0px"></top-nav>

  <showtop Text="商品分类"></showtop>
  <n-card style="margin-bottom: 12px; height: 550px">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab-pane name="dianqi" tab="电器">
        <n-tabs
          default-value="oasis"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="shouji" tab="手机">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img1" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                  </td>
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
          <n-tab-pane name="pingban" tab="平板">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img2" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list1" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                    <!-- <label for=index>{{ index+1 }}</label> -->
                  </td>

                  <!-- <td>{{ item.name }}</td>
          <td>{{ filter(item.price) }}</td> -->
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
          <n-tab-pane name="xixhengqi" tab="吸尘器">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img3" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list2" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                    <!-- <label for=index>{{ index+1 }}</label> -->
                  </td>

                  <!-- <td>{{ item.name }}</td>
          <td>{{ filter(item.price) }}</td> -->
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
          <n-tab-pane name="dianfanbao" tab="电饭煲">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img4" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list3" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                    <!-- <label for=index>{{ index+1 }}</label> -->
                  </td>

                  <!-- <td>{{ item.name }}</td>
          <td>{{ filter(item.price) }}</td> -->
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="jiajv" tab="家居">
        <n-tabs
          default-value="oasis"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="jiajv" tab="家具">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img5" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list4" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                    <!-- <label for=index>{{ index+1 }}</label> -->
                  </td>

                  <!-- <td>{{ item.name }}</td>
          <td>{{ filter(item.price) }}</td> -->
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
          <n-tab-pane name="zhuangxiu" tab="装修">
            <n-space justify="space-around" size="large">
              <table>
                <tr v-for="(item, index) in Img6" :key="index" align="center">
                  <td>
                    <img
                      style="width: 100px; height: 100px"
                      :src="item.imgUrl"
                    />
                  </td>
                </tr>
              </table>
              <tbody>
                <tr v-for="(item, index) in list5" :key="index" align="center">
                  <td></td>
                  <td style="width: 80px; height: 100px">{{ item.name }}</td>
                  <td style="width: 80px; height: 100px">
                    <input
                      type="checkbox"
                      name="all"
                      v-model="data"
                      :value="item"
                    />
                    <!-- <label for=index>{{ index+1 }}</label> -->
                  </td>

                  <!-- <td>{{ item.name }}</td>
          <td>{{ filter(item.price) }}</td> -->
                </tr>
              </tbody>
            </n-space>
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="fuzhuang" tab="服装">
        <n-tabs
          default-value="oasis"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="nanzhuang" tab="男装"> 七里香1 </n-tab-pane>
          <n-tab-pane name="nvzhuang" tab="女装"> 七里香2 </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="shipin" tab="食品">
        <n-tabs
          default-value="oasis"
          justify-content="space-evenly"
          type="line"
        >
          <n-tab-pane name="shouji" tab="手机"> 七里香1 </n-tab-pane>
          <n-tab-pane name="pingban" tab="平板"> 七里香2 </n-tab-pane>
          <n-tab-pane name="xixhengqi" tab="吸尘器"> 七里香3 </n-tab-pane>
          <n-tab-pane name="dianfanbao" tab="电饭煲"> 七里香4 </n-tab-pane>
        </n-tabs>
      </n-tab-pane>

    </n-tabs>

  </n-card>

  <div class="cart" style="position: fixed; bottom: 60px; left: 15px">
    <img
      src="../assets/img/购物车.png"
      alt=""
      style="width: 40px; height: 40px; border-radius: 15px 50px 30px 40px"
      id="carweizhi"
      @click="$router.push('/car')"
    />
  </div>

  <div>
    
    <button
      style="position: fixed; bottom: 160px; right: 20px"
      class="add"
      @click="addShopCart($event)"
    >
      添加到购物车
    </button>
  </div>

</div>
  <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
    <div class="ball" v-show="isShow"></div>
  </transition>
</div>
</template>

<script>
import SearchTop from "@/components/SearchTop.vue";
import TopNav from "../components/topNav.vue";
import showtop from "../components/showtop.vue";
import { reactive, ref, onMounted, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import store from "@/store/index.js";

export default {
  data() {
    return {
      Img1: [
        { imgUrl: require("@/assets/img/11.png") },
        { imgUrl: require("@/assets/img/17.png") },
      ],
      Img2: [
        { imgUrl: require("@/assets/img/12.png") },
        { imgUrl: require("@/assets/img/18.png") },
      ],
      Img3: [
        { imgUrl: require("@/assets/img/13.png") },
        { imgUrl: require("@/assets/img/14.png") },
      ],
      Img4: [
        { imgUrl: require("@/assets/img/15.png") },
        { imgUrl: require("@/assets/img/16.png") },
      ],
      Img5: [
        { imgUrl: require("@/assets/img/21.png") },
        { imgUrl: require("@/assets/img/22.png") },
        { imgUrl: require("@/assets/img/23.png") },
        { imgUrl: require("@/assets/img/24.png") },
      ],
      Img6: [
        { imgUrl: require("@/assets/img/25.png") },
        { imgUrl: require("@/assets/img/26.png") },
      ],

      addShow: false,
      carStyle: "",
    };
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      books: [],
      tab: 1,
      data: [],
      checked: false,
      isShow: false

    });
    const addShopCart = (e) =>{
      // let vm = this;
      // vm.carStyle = "top:" + e.clientY + "px; left:" + e.clientX + "px";
      // vm.addShow = true;
      // setTimeout(function () {
      //   let self = document.getElementById("carweizhi");
      //   let leftData =
      //     self.getBoundingClientRect().left +
      //     document.documentElement.scrollLeft;
      //   let topData =
      //     self.getBoundingClientRect().top +
      //     document.documentElement.scrollTop +
      //     self.offsetHeight -
      //     20;
      //   vm.carStyle = "top:" + topData + "px; left:" + leftData + "px";
      // }, 70);
      // setTimeout(function () {
      //   vm.addShow = false;
      // }, 500);


        state.isShow = !state.isShow

        state.books = state.books.concat(state.data);
        unlink(state.books);
        state.checked = false;
        store.commit("setBookList", state.books);
        console.log(store.state.booklist);

    };
    const list = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list.value = res.list;
        });
    });
    const list1 = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list1.value = res.list1;
        });
    });
    const list2 = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list2.value = res.list2;
        });
    });
    const list3 = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list3.value = res.list3;
        });
    });
    const list4 = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list4.value = res.list4;
        });
    });
    const list5 = ref([]);
    onMounted(() => {
      fetch("/test.json")
        .then((res) => res.json())
        .then((res) => {
          list5.value = res.list5;
        });
    });

    const add2 = () => {
      state.books = state.books.concat(state.data);
      unlink(state.books);
      state.checked = false;
      store.commit("setBookList", state.books);
      console.log(store.state.booklist);
    };
    function unlink(arr) {
      for (var i = 0; i < arr.length; i++) {
        // 首次遍历数组
        for (var j = i + 1; j < arr.length; j++) {
          // 再次遍历数组
          if (arr[i].name == arr[j].name) {
            // 判断连个值是否相等
            arr.splice(j, 1); // 相等删除后者
            arr[i].count++;
            j--;
          }
        }
      }
      return arr;
    }
    const changeAllChecked = () => {
      var all = document.getElementsByName("all");
      for (var i = 0; i < all.length; i++) {
        all[i].checked = state.checked;
      }
    };
    const beforeEnter = (el) => {
      el.style.transform='translate(200px,-150px)'
    }
    const enter = (el,done) => {
      el.offsetWidth
      el.style.transform='translate(35px,-20px)'
      el.style.transition='all .5s ease'
      done()
    }
    const afterEnter = () => state.isShow = false

    return {
      ...toRefs(state),
      addShopCart,
      add2,
      list,
      list1,
      list2,
      list3,
      list4,
      list5,
      changeAllChecked,
      beforeEnter,
      enter,
      afterEnter
    };
  },
  mounted() {},

  components: {
    SearchTop,
    TopNav,
    showtop,
    TopNav,

  },
};
</script>


<style scoped>
.a{
    position:relative; 
    z-index:9;
}
.ball{
    position:relative; 
    z-index:99;
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(68, 123, 151);
  }
.Iimg {
  padding-top: 10px;
  height: 100px;
}
.add{
  display: inline-block;
  padding: 15px 25px;
  font-size: 10px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #31cdc09f;
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px #999;
}
.add:hover {background-color: #2682b365}

.add:active {
  background-color: #35bbc2;
  box-shadow: 0 2px #666;
  transform: translateY(4px);
}
#add_img {
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 80px;
  transition: all 0.5s;
  display: block;
  position: fixed;
}

.ul {
  margin-top: 30px;
  width: 100%;
}

.ul div {
  margin-top: 30px;
  text-align: center;
  width: 50%;
  float: left;
}
</style>