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

<style scoped>
.bg {
	display: flex;
  	z-index: 0;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgb(255,248,220);
	justify-content: center;
}

.content{
	align-self: center;
}

.btn-primary{
	background-color:coral; 
	border: rgb(172, 82, 49);
}
</style>