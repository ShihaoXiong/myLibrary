<template>
	<div class="page__container page__home">
		<div class="card__container">
			<Card v-for="item in subjects" :key="item.key" :id="item.key" :subject="item.name" :color="item.color"></Card>
		</div>
		<div class="home__animate" ref="animationContainer"></div>
	</div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';
import { subjects } from '@/configs/global';
import animationData from '@/assets/Blogging.json';
import lottie, { AnimationConfigWithData } from 'lottie-web';
import { onMounted, ref } from 'vue';

const animationContainer = ref();
onMounted(() => {
	const params: AnimationConfigWithData = {
		container: animationContainer.value,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData: animationData
	};

	lottie.loadAnimation(params);
});
</script>

<style lang="less">
.page__home {
	@media (min-width: 1000px) {
		.card__container {
			.size(30%, 100vh);
			.flex(@d: column, @j: space-between);
			.border-box;
			padding: 20vh 5vw;
		}
		.home__animate {
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 70%;
		}
	}
	@media (max-width: 999px) {
		.card__container {
			.size;
			.border-box;
			padding: 5vh 10%;
			& > div {
				margin-bottom: 10rem;
			}
		}
		.home__animate {
			width: 100%;
		}
	}
}
</style>
