import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

// vuex 中的计算属性 getters  能够修改掉数据源中的数据
const getters = {
    abc: () =>{
        return state.count += 100
    }
}

const mutations = {
    add(state) {
        state.count ++
    },
    // 括号中的参数可以随便定义 但是定义的参数 就是 state中的内容
    reduce(state) {
        state.count--
    }
}

const actions = {   // 提交mutations里面的方法
    addAction(context) {
        context.commit('add')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})