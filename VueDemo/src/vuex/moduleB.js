const moduleB = {
    namespaced: true,
    state:{
        counter: 5
    },
    mutations: {
        //递增
        increase(state) {
            console.log("moduleB-increase")
            state.counter++
        },
        //递减
        decrementAction(state) {
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
        doubleCounter(state){
            return state.counter*state.counter
        }
    }
}

export default moduleB