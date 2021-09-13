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
	padding: 2rem;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0.4rem 2rem 0 v-bind(color);
	z-index: 1;
	.size(100%, auto);
	.border-box;
	.label__container {
		border-radius: 50%;
		background-color: #fff;
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

	@media (min-width: 1000px) {
		.label__container {
			.size(8rem, 8rem);
			font-size: 4rem;
		}
		.card__decration {
			font-size: 10rem;
		}
	}
	@media (max-width: 999px) {
		.label__container {
			font-size: 15rem;
			.size(30rem, 30rem);
		}
		.card__decration {
			font-size: 28rem;
		}
	}
}
</style>
