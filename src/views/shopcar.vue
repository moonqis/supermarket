<template>
<div>
    <top-nav style="position:fixed;bottom:0px"></top-nav>
    <showtop Text="购物车"></showtop>      



 <n-space vertical>
    <n-table striped v-show="tab==1" align="center" width="340">
      <thead>
        <tr>
          <th width="85">名称</th>
          <th width="85">单价</th>
          <th width="85">数量 </th>
          <th width="85">操作</th>
        </tr>
      </thead>
<tbody >
        <tr v-for="(item, index) in books" :key="index" align="center">
          <td style="height: 60px">{{ item.name }}</td>
          <td style="height: 60px">{{ filter(item.price) }}</td>

          <td style="height: 60px">
            <button class="b1" @click="decrement(index)" v-bind:disabled="item.count <= 0">
              -
            </button>
            {{ item.count }}
            <button class="b1" @click="increment(index)">+</button>
          </td>
          <td style="height: 60px">
            <button class="button1" @click="removeHandle(index)">删除</button>
          </td>
        </tr>

      </tbody>
    </n-table>
  </n-space>
    <!-- <table v-show="tab==1" align="center" width="340" >
      <caption>
      </caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="(item, index) in books" :key="index" align="center">
          <td style="height: 60px">{{ item.name }}</td>
          <td style="height: 60px">{{ filter(item.price) }}</td>

          <td style="height: 60px">
            <button class="b1" @click="decrement(index)" v-bind:disabled="item.count <= 0">
              -
            </button>
            {{ item.count }}
            <button class="b1" @click="increment(index)">+</button>
          </td>
          <td style="height: 60px">
            <button class="button1" @click="removeHandle(index)">移除</button>
          </td>
        </tr>

      </tbody>

    </table> -->
    <div >
    <div style="position: fixed; bottom:160px ;height:2px;background-color: black;width: 400px;">

    </div>
    <n-space justify="space-around" size="large" style="position: fixed; bottom:130px ;left: 80px">
          <span>总价格       </span>&nbsp;&nbsp;&nbsp;
          <span>{{ filter(computedName) }}</span>
     </n-space>
      <n-space justify="space-around" size="large" style="position: fixed; bottom:100px ;">
     </n-space>
    </div>
</div>
</template>

<script>
import { reactive, ref, onMounted,toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import store from "@/store/index.js"
import topNav from '@/components/topNav.vue'
import showtop from '../components/showtop.vue' 


export default {
    data () {
		return {

        }
    },

     setup() {
    const router=useRouter()
    const state = reactive({
      books: [],
      tab: 1,
      data: [],
      checked: false
    });
    onMounted(() => {
        state.books = store.state.booklist
        console.log(state.books)
    })
    const decrement = (index) => {
      state.books[index].count--; // index指定图书对象的id值减１
    };
    const increment = (index) => {
      state.books[index].count++; // index指定图书对象的id值加１
    };
    const removeHandle = (index) => {
      state.books[index].count=1;
      state.books.splice(index, 1); // 删除index指定的图书对象
    };
    const remove = () => {
      state.books=[]; // 删除所有的图书对象
    };
    const add1 =() =>{ 
    //   return this.$router.push('/car')
    router.push('/car')
    }

    const changeAllChecked = () => {
      var all = document.getElementsByName("all");
      for (var i = 0; i < all.length; i++) {
        all[i].checked = state.checked;
      }
    };
    const filter = (price) => {
      return "￥" + price.toFixed(2);
    };
    const computedName = computed(() => {
      let totalPrice = 0; // 初始化总价为０
      for (let i = 0; i < state.books.length; i++) {
        // 把数组中的每个元素的价格*数量，再相加到totalPrice
        totalPrice += state.books[i].price * state.books[i].count;
      }
      return totalPrice; // 返回总价
    });
    const computedPrice = computed((index) => {
      let totalPrice = 0;
        totalPrice = state.books[index].price * state.books[index].count;
      return totalPrice;
    });
    return {
      ...toRefs(state),
      computedName,
      decrement,
      increment,
      removeHandle,
      filter,
      remove,
      computedPrice,
      add1,
      changeAllChecked
    };
  },
    components:{
      topNav,
      showtop
    }
}

</script>


<style lang="less" scoped>
.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4eb7c1; /* Green */
    border-radius: 8px;
}
.b1 {
    background-color: white;
    color: black;
    border: 2px solid white; /* Green */
}
</style>