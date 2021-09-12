<template>
	<div class="card" :class="isFocus ? 'is-focus' : 'not-focus'" :style="{ background: color }" @click="jumpTo">
		<div class="label__container">
			{{ label }}
		</div>
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
	padding: 15px;
	.size(20rem, 20rem);
	margin: 10px;
	border-radius: 50px;
	position: relative;
	overflow: hidden;
	&.not-focus::after,
	&.not-focus::before {
		content: '';
		position: absolute;
		.size(75%, 75%);
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}
	&.not-focus::before {
		right: -5%;
		top: -40%;
	}
	&.not-focus::after {
		right: -40%;
		top: 5%;
	}
	.label__container {
		border-radius: 50%;
		background-color: #fff;
		.size(35%, 35%);
		.flex();
		color: v-bind(color);
		font-weight: bold;
		font-size: 4rem;
	}
}
</style>
