<template>
	<div class="bigbox">
		<ul>
			<li class="color7">
				<img src="../assets/tujian.png" alt="">
				<span>图鉴</span>
			</li>
			<li class="color8">
				<img src="../assets/anniu.png" alt="" class="color8-img">
				<img src="../assets/guangyun.png" alt="" class="color8-aperture">
				<img src="../assets/shouzhi.png" alt="" class="color8-finger">

			</li>
			<li class="color9">
				<img src="../assets/xunzhang.png" alt="">
				<span>礼物</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	li {
		list-style: none;
		display: flex;
		align-items: center;
	}

	.bigbox {
		width: 6.78rem;
		height: 0.96rem;
		background: rgba(255, 255, 255, 0.84);
		border-radius: 0.4rem;
	}

	.bigbox ul {
		display: flex;
	}

	.color7 img {
		width: 0.4rem;
		height: 0.4rem;
	}

	.color8-img {
		width: 2.6rem;
		height: 1rem;
	}

	.color8-aperture {
		position: absolute;
		top: 0.6rem;
		left: 2.14rem;
		width: 0.92rem;
		height: 0.92rem;
	}

	.color8-finger {
		position: absolute;
		top: 0.8rem;
		left: 2.46rem;
		width: 1.04rem;
		height: 1.04rem;
	}

	.color9 img {
		width: 0.4rem;
		height: 0.4rem;
	}

	.color7,
	.color9 {
		width: 1.2rem;
		height: 0.8rem;
		padding-top: 0.08rem;
		margin-left: 0.22rem;
	}

	.color7 span {
		margin-left: 0.2rem;
		width: 0.6rem;
		height: 0.4rem;
		font-size: 0.28rem;
		font-family: Resource-Han-Rounded-CN-Medium, Resource-Han-Rounded-CN;
		font-weight: 500;
		color: #4C5980;
		line-height: 0.4rem;
	}

	.color9 span {
		margin-left: 0.2rem;
		width: 0.6rem;
		height: 0.4rem;
		font-size: 0.28rem;
		font-family: Resource-Han-Rounded-CN-Medium, Resource-Han-Rounded-CN;
		font-weight: 500;
		color: #4C5980;
		line-height: 0.4rem;
	}

	.color8 {
		position: relative;
		width: 3.12rem;
		height: 1.48rem;
		margin-top: -0.26rem;
		margin-left: 0.28rem;
		margin-right: 0.06rem;
	}

	.color8 img {
		margin: 0 auto;
	}
</style>
