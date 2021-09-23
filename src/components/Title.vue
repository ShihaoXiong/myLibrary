<template>
	<div class="head">{{ text }}</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
	text: {
		type: String,
		required: true
	}
});
</script>

<style lang="less">
.head {
	color: #2080f0;
	font-size: 20px;
	font-weight: bold;
	margin-top: 20px;
}
</style>
