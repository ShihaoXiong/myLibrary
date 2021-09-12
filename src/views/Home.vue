<template>
	<div class="page__container page__home">
		<div class="card__container">
			<Card v-for="item in subjects" :key="item.key" :id="item.key" :subject="item.name" :color="item.color"></Card>
		</div>
		<div class="minitor__container"></div>
	</div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue';
import { subjects } from '@/configs/global';
</script>

<style lang="less">
.page__home {
	.flex;
	& > div {
		padding: 20px;
		.border-box;
	}
	.card__container {
		.size(70%);
		.flex(@w: wrap, @j: space-around);
	}
	.minitor__container {
		flex-grow: 1;
		height: 100%;
	}
}
</style>
