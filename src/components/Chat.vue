<template>
	<div class="out">
		<div class="spinner-align" v-if='!isShow'>
			<div class="spinner-border" role="status" style="width:5rem;height:5rem;">
				<span class="sr-only">Loading...</span>
			</div>
		</div>

		<div class="all" v-if="isShow">
			<app-header></app-header>

			<div class="body">
				<transition-group name="fade" mode="out-in">
					<div class="wrapper" v-for="message in messages" :key="message.id">
						<div class="container-margin" v-if="message.name==userID">
							<div class="d-flex justify-content-end">
								<div class="timeAlign">
									<div class="align-self-end mr-2 time-self">
										<small class="text-muted">{{message.timestamp}}</small>
									</div>

									<div class="message-box">
										<p class="message-content bg-primary text-white">{{message.content}}</p>
									</div>
								</div>
							</div>
						</div>
				
						<div v-if="message.name != userID" class="container-margin">
							<div class="d-flex justify-content-start">
								<div class="head-image mr-2 mt-1">
									<img src="https://cdn2.ettoday.net/images/3454/3454344.jpg" alt="?">
								</div>

								<div class="timeAlign">
									<div class="message-box">
										<p class="message-name-others ml-1">{{message.name}}</p>
										<p class="message-content-others text-dark">{{message.content}}</p>
									</div>

									<div class="align-self-end time-others">
										<small class="mb-0 text-muted">{{message.timestamp}}</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</transition-group>
			</div>
			
			<div class="footer">
				<app-input></app-input>
			</div>	
		</div>
	</div>
</template>

<script scoped>
import db from '../firebase';
import moment from 'moment';
import Input from '../components/Input.vue';
import Header from '../components/Header';
export default {
	components:{
		'app-input':Input,
		'app-header':Header
	},

	data() {
		return {
			userID: this.$store.state.userID,
			messages:[],
			isShow:false
		}
	},

	methods: {
		
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
						timestamp:moment(doc.data().timestamp).format('HH:mm')
					})
				}
			});

			this.isShow=true;
		});
	},

	updated(){
		const toBottom=document.querySelector('.body');
		toBottom.scrollTop=toBottom.scrollHeight;
	}
}
</script>

<style>
.container-margin{
	margin:5px 0;
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

.message-box{
	padding: 0 0.8rem 0 0;
	max-width: 15rem;
	word-wrap: break-word;
}

.message-content, .message-content-others{
	padding: 10px;
	margin: -15px 0 0 0;
	border-radius: 15px;
	white-space: pre-line;
}

.message-content{
	margin: 0;
}

.message-content-others{
	background-color: #ccc;
}

.timeAlign{
	display: flex;
	align-items: flex-end;
}

.time-others{
	padding: 0 10px 0 0;
	margin-left: -6px;
}

.time-self{
	padding: 0 0 0 10px;
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

.spinner-align{
	color: coral;
	line-height: 100vh;
}

.out{
	display: flex;
	justify-content: center;
}

.all{
	display: flex;
	flex-direction: column;
	height: 100vh;
}

/* animation */
.fade-enter{
	opacity: 0;
}

.fade-leave{
	opacity: 100;
}

.fade-enter-active, .fade-leave-active{
	transition: opacity 0.8s;
}
</style>