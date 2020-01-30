<template>
	<div>
		<form @submit.prevent="sendMessage" @keyup.enter.exact="sendMessage">
			<div class="form-group mb-0 text-input">
				<textarea type="text" class="form-control" 
				v-model="message"></textarea>
				<i class="far fa-paper-plane bg-white" @click.prevent="sendMessage"></i>
			</div>
		</form>
	</div>
</template>

<script>
import db from '../firebase';
export default {
	data() {
		return {
			
		}
	},

	computed:{
		message:{
			get(){
				return this.$store.state.message;
			},

			set(payload){
				this.$store.dispatch('inputChangeAction',payload);
			}
		}
	},

	methods: {
		sendMessage(){
			if(this.message){
				db.collection('messages').add({
				id: this.$store.state.userID,
				content: this.$store.state.message,
				timestamp: Date.now()
			});
	
				this.message='';
			}
		}
	},
}
</script>

<style>

.text-input{
	display: flex;
	align-items:center;
}

.form-control:focus {
  border-color: #007bff;
}

.form-control{
	height: 55px;
}

.far{
	font-size: 2.5rem;
	padding: 10px;
	color: #007bff;
	border: 1px solid #ddd;
}
</style>