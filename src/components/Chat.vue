<template>
    <div class="all">
		<div class="header vw-100">
			<router-link to="/" tag="button" class="btn btn-secondary mb-0">登出</router-link>
			<h1 class="text-center mt-0 d-inline-block">聊天室</h1>
		</div>

		<div class="body">
			<div class="wrapper" v-for="message in messages">
				<div class="container-margin" v-if="message.name==userID">
					<div class="d-flex justify-content-end">
						<div class="align-self-end mr-1">
							<small class="mb-0 text-muted">{{message.timestamp}}</small>
						</div>

						<div class="message-box">
							<p class="message-name-self mr-1">{{message.name}}</p>
							<p class="message-content bg-primary text-white">{{message.content}}</p>
						</div>

						<div class="head-image mt-2 mr-1">
							<img src="https://www.teepr.com/wp-content/uploads/2019/08/%E7%A6%AE%E8%B2%8C%E5%81%87%E7%AC%91%E8%B2%931.jpg" alt="">
						</div>
					</div>
				</div>
			
			
			
				<div v-if="message.name != userID" class="container-margin">
					<div class="d-flex justify-content-start">
						<div class="head-image mt-2 mr-2">
							<img src="https://www.teepr.com/wp-content/uploads/2019/08/%E7%A6%AE%E8%B2%8C%E5%81%87%E7%AC%91%E8%B2%931.jpg" alt="">
						</div>

						<div class="message-box">
							<p class="message-name-others ml-1">{{message.name}}</p>
							<p class="message-content-others text-dark">{{message.content}}</p>
						</div>

						<div class="align-self-end">
							<small class="mb-0 text-muted">{{message.timestamp}}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="footer">
			<app-input></app-input>
		</div>
		
    </div>
</template>

<script scoped>
import db from '../firebase';
import moment from 'moment';
import Input from '../components/Input.vue';
export default {
	components:{
		'app-input':Input
	},

	data() {
		return {
			userID: this.$store.state.userID,
			messages:[]
		}
	},

	methods: {
		scrollDown(){
			let wrapper=this.$el.querySelector('.wrapper');
			wrapper.scrollTop=wrapper.scrollHeight;
		}
	},

	created(){
		let ref=db.collection('messages').orderBy('timestamp');
		ref.onSnapshot(snapshot=>{
			snapshot.docChanges().forEach(change=>{
				if(change.type=='added'){
					let doc=change.doc;
					this.messages.push({
						id : doc.id,
						name: doc.data().id,
						content:doc.data().content,
						timestamp:moment(doc.data().timestamp).format('H:mm')
					})
				}
			})
		});
	},

	updated(){
		const wrapper=document.querySelector('.wrapper');
		wrapper.scrollTop=wrapper.scrollHeight;
	}
}
</script>

<style>
.container-margin{
	margin-bottom:20px;
}

.header{
	background: coral;
	height: 50px;
}

.head-image{
	max-width: 3.5rem;
}

.head-image img{
	width: 100%;
	border-radius: 100%;
}

.message-name-others{
	text-align:left;
}

.message-name-self{
	text-align:right;
}

.message-box{
	padding: 0 0.5rem 0 0;
	max-width: 15rem;
	word-wrap: break-word;
}

.message-content{
	margin: -15px 0;
	padding: 10px;
	border-radius: 15px;
}

.message-content-others{
	margin: -15px 0;
	padding: 10px;
	border-radius: 15px;
	background-color: #ccc;
}

.wrapper{
	overflow: auto;
}

.body{
	flex-grow: 1;
	background-color: cornsilk;
	overflow-x: hidden;
	overflow-y: auto;
}

.footer{
	height: 6.7rem;
}

.all{
	display: flex;
	flex-direction: column;
	 height: 100vh;
}
</style>