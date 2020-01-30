<template>
	<div>
		<div class="header">
            <button class="logout btn btn-secondary" @click="logout">登出</button>
            <p class='title'>「{{this.$store.state.userID}}」的聊天室</p>
        </div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods:{
        logout(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.title{
    text-align: center;
    line-height: 50px;
}


.header{
    position: relative;
	background: coral;
	height: 50px;
	width: 100vw;
}

.logout{
    height: 50px;
    width: 4rem;
    position: absolute;
}
</style>