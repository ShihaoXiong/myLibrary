<template>
	<div class="card" :class="isFocus ? 'is-focus' : 'not-focus'" :style="{ background: color }" @click="jumpTo">
		<div class="label__container">
			{{ label }}
		</div>
		<span class="card__decration">{{ label }}</span>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	id: { type: String, requires: true },
	subject: { type: String, required: true },
	color: { type: String, required: true },
	isFocus: { type: Boolean, default: false }
});

const router = useRouter();

const label = computed<string>(() => props.subject.substring(0, 1));
const jumpTo = () => {
	router.push({ path: '/subject', query: { subject: props.id } });
};
</script>

<style lang="less">
.card {
	padding: 1.5rem;
	margin: 10px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	.size(100%, auto);
	.label__container {
		border-radius: 50%;
		background-color: #fff;
		.size(8rem, 8rem);
		.flex();
		color: v-bind(color);
		font-weight: bold;
		font-size: 4rem;
	}
	.card__decration {
		font-size: 10rem;
		color: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: -2.5rem;
		right: 0;
		font-weight: bold;
		font-family: fangsong;
	}
}
</style>
