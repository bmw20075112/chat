import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '../store/index'
const Login=()=>import('../components/Login');
const Chat=()=>import('../components/Chat');

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},

	{
		path:'/chat',
		name:'Chat',
		component:Chat,
		beforeEnter: (to, from, next) => {
			if(store.state.userID){
				next();
			}else{
				next({name:'Login'});
			}
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
