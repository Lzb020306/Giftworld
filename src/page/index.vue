<template>
	<div class="box">
		<div class="content"></div>
		<start class="start"></start>
		<Count class="botton"></Count>
	</div>
</template>

<script>
	import Count from "../components/bottom.vue"
	import start from "../components/start.vue"


	export default {
		data() {
			return {

			}
		},
		components: {
			Count,
			start,

		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.box {
		width: 375px;
		height: 812px;
		background: #FFFFFF;
	}

	.content {
		margin: 0;
		padding: 0;
		width: 375px;
		height: 812px;
		background-image: url(../assets/beijing.png);
		background-size: cover;
	}

	.botton {
		left: 0;
		width: 100%;
		height: 80px;
		background: #FFFFFF;
		box-shadow: 0px -5px 30px 0px rgba(45, 49, 66, 0.1);
		border-radius: 20px 20px 0px 0px;
		position: fixed;
		bottom: 0;

	}

	.start {
		position: absolute;
		top: 491px;
		left: 18px;
	}
	.top{
		position: absolute;
		top: 50px;
		left: 28px;
	}
</style>
