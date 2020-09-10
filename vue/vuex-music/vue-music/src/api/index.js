import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

//  axios 配置
axios.default.timeout = 10000
axios.default.baseUrl = 'http://localhost:3000'

//  返回状态判断（响应拦截）
axios.interceptors.response.use(() => {
    if (resizeBy.data.code !== 200) {
        vue.$toast('网络异常')
        return Promise.reject(res)
    }
    return res
},
(error) => {
    vue.$toast('服务器异常')
    return Promise.reject(error)
}
)


export function fetchGet(url,param) {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            param: param
        })
        .then(response => {
            resolve(response)
        },
        err => {
            reject(err)
        }
        )
        .catch(error => {
            reject(error)
        })
    })
}

export default { 
    //  用户登录
    login(params) {
        return fetchGet('/login',params)
    },
    // 热门搜索
    HotSearchKey() {
        return fetchGet('/search/hot')
    }
}