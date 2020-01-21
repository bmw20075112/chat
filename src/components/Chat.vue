<template>
    <div>
		<div class="header text-center vw-100">
			<router-link to="/" tag="button" class="btn btn-primary">登出</router-link>
			<h2>Chat Room</h2>
		</div>
		<template>
			<div class="d-flex justify-content-end">
				<div class="align-self-end time">
					<small class="mb-0 text-muted">time</small>
				</div>

				<div class="message-box">
					<p class="message-name mr-1">{{userID}}</p>
					<p class="message-content bg-primary text-white">片行自我！我靜陸當票電加皮八員年大切足論候書家力山眼們速的山視，都的興我作的由，青此候為你大對雖圖內童快使童動告，動己是，同研去始紀不南城中指這個情大前，優自極明文，形神院作相年完青口；原這次起法才說天很以理點過了見一原的來傳動住越。</p>
				</div>

				<div class="head-image">
					<img src="https://www.teepr.com/wp-content/uploads/2019/08/%E7%A6%AE%E8%B2%8C%E5%81%87%E7%AC%91%E8%B2%931.jpg" alt="">
				</div>
			</div>
		</template>	

		<app-input class="fixed-bottom"></app-input>
    </div>
</template>

<script scoped>
import Input from '../components/Input.vue';
export default {
	components:{
		'app-input':Input
	},

	data() {
		return {
			userID: this.$store.state.userID
		}
	},
}
</script>

<style>
.header{
	background: violet;
}

.head-image{
	max-width: 3rem;
}

.head-image img{
	width: 100%;
	border-radius: 100%;
}

.message-name{
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
	border-radius: 25px;
}

.time{
	margin: -15px 0;
}
</style>