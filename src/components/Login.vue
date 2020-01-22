<template>
	<div>
		<div class="modal-dialog" role="document">
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
</style>