<template>
	<div class="wrapper">
        <input type="file" id="file" style="display:none;"  @change="getFile">
        <i class="fas fa-image"></i>

		<form @submit.prevent="sendMessage" @keyup.enter.exact="sendMessage" class="align">
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
			selectedFile: null
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
		},

		// getFile(event){
		// 	this.selectedFile=event.target.files[0];
		// 	db.collection
		// },

		// fileUpload(){
			
		// }
	},
}
</script>

<style scoped>

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

.far, .fas{
	font-size: 2.1rem;
	padding: 10px;
	color: coral;
	border: 1px solid #ddd;
}

.align{
    flex-grow: 1;
}

.wrapper{
	display: flex;
}
</style>