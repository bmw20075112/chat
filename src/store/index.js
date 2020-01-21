import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userID:'',
		message:''
	},

	mutations: {
		userIDChange(state,payload){
			state.userID=payload;
		},

		inputChange(state,payload){
			state.message=payload;
		}
	},
	actions: {
		userIDChangeAction({ commit }, payload){
			commit('userIDChange',payload);
		},

		inputChangeAction({commit},payload){
			commit('inputChange',payload);
		}
	},
	modules: {
	}
})
