<template>
	<ul class="list__container">
		<li class="list__item" v-for="(item, index) in data" :key="item.id">
			<span>{{ index + 1 }}. </span>
			{{ item.topic }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { Topics } from '@/interface';
import { defineProps } from 'vue';

defineProps<{ data: Topics[] }>();
</script>

<style lang="less">
.list__container {
	padding: 0;
	.list__item {
		list-style: none;
		padding: 10px 15px;
		border-radius: 8px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		& > span {
			color: #2080f0;
			font-weight: bold;
		}
		& + .list__item {
			margin-top: 2rem;
		}
	}
}
</style>
