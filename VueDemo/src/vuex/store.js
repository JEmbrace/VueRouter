import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 1000
    },
    mutations: {
        //递增
        increase(state) {
            console.log("store-increase")
            state.counter++
        },
        //递减
        decrement(state) {
            state.counter--
        }
    },
    actions: {
        increaseAction(context) {
            setTimeout(function(){
                //action通过提交mutation改变共享数据状态
                context.commit('increase');
            },3000)
        },
        decrementAction(context){
            setTimeout(function(){
                //action通过提交mutation改变共享数据状态
                context.commit('decrement');
            },3000)
        }
    },
    getters: {
        doubleCounter(state) {
            return state.counter*state.counter
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
})