<template>
	<div class="page__container page__subject">
		<n-button circle type="info" @click="render++">
			<template #icon>
				<refresh theme="outline" fill="#fff" />
			</template>
		</n-button>
		<div>
			<h2>名词解释</h2>
			<ul :key="render">
				<li v-for="item in getRandomTopic(nonuExplain, 10)" :key="item.id">{{ item.topic }}</li>
			</ul>
			<!-- <Title text="名词解释" /> -->
			<!-- <List :key="render" :data="getRandomTopic(nonuExplain, 10)" /> -->
		</div>
		<div>
			<h2>简答 & 论述</h2>
			<ul :key="render">
				<li v-for="item in getRandomTopic(discuss, 10)" :key="item.id">{{ item.topic }}</li>
			</ul>
			<!-- <Title text="简答 & 论述" /> -->
			<!-- <List :key="render" :data="getRandomTopic(discuss, 10)" /> -->
		</div>
	</div>
</template>

<script lang="ts" setup>
import Title from '@/components/Title.vue';
import List from '@/components/List.vue';
import { Topics, TopicsList } from '@/interface';
import { useRoute } from 'vue-router';
import { NButton } from 'naive-ui';
import { Refresh } from '@icon-park/vue-next';
import { ref } from 'vue';

const route = useRoute();
const render = ref<number>(0);

const subject = route.query.subject as string;
const library: Topics[] = require('@/configs/library.json')[subject];
const { nonuExplain, discuss } = library.reduce(
	(pre: TopicsList, cur: Topics) => {
		cur.type === 'Discuss' ? pre.discuss.push(cur) : pre.nonuExplain.push(cur);
		return pre;
	},
	{
		nonuExplain: [],
		discuss: []
	} as TopicsList
);

const getRandomTopic = (arr: Topics[], count: number): Topics[] => {
	const length = arr.length;
	const res: Topics[] = [];
	while (count-- > 0) {
		const index = ~~(Math.random() * length);
		res.push(arr[index]);
		// arr.splice(index, 1);
	}

	return res;
};
</script>

<style lang="less">
.page__subject {
	padding: 20px;
}
</style>
