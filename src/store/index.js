import { createStore } from 'vuex'
import axios from 'axios'
import api from '@/api/index.js'


export default createStore({
  sate:{
    nc:'hjj',
    sj:'111111111111',
    dz:'学生',
    xb:'男',
    qm:'这个人很懒，什么都没写',
    ah:[{0: '睡觉'}],
    booklist:[
      {
        "name": "华为p30",
        "price": 3465,
        "count": 1
      }
    ],
    
    isLogin :false //是否已登录

  },
  mutations:{
    setBookList:function(state,value){
      state.booklist=value
    },
  }
})
