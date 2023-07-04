import axios from 'axios';

let baseUrl = 'http://localhost:3000'



// 手机登录
export function phoneLogin(phone,password){
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户的详情
export function userDetail(uid){
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

export default {
    phoneLogin,userDetail
}