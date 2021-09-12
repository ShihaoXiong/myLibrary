import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/library',
		name: 'Library',
		component: () => import('@/views/Library.vue')
	},
	{
		path: '/subject',
		name: 'Subject',
		component: () => import('@/views/Subject.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
