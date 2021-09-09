import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: {
			label: '首页'
		}
	},
	{
		path: '/library',
		name: 'Library',
		component: () => import('@/views/Library.vue'),
		meta: {
			label: '库'
		}
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
