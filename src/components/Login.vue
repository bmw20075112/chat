<template>
	<div class="bg">
		<div class="modal-dialog content" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<form @submit.prevent="login">
						<div class="form-group">
							<label for="message-text" class="col-form-label">你的ID:</label>
							<input class="form-control" id="message-text" v-model="userID">
						</div>
					</form>
				</div>
				<button type="button" @click="login" class="btn btn-primary btn-block">登入</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed:{
		userID:{
			get(){
				return this.$store.state.userID;
			},

			set(payload){
				this.$store.dispatch('userIDChangeAction',payload);
			}
		}
	},

	methods: {
		login(){
			if(this.userID){
				this.$router.push({name:'Chat'});
			}else{
				
			}
		}
	},
}
</script>

<style>
.bg {
	display: flex;
  	z-index: 0; /* Sit on top */
	left: 0;
	top: 0;
	width: 100vw; /* Full width */
	height: 100vh; /* Full height */
	background-color: rgb(0,0,0); /* Fallback color */
	background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
	justify-content: center;
}

.content{
	align-self: center;
}
</style>