<template>
	<n-layout-sider collapse-mode="width" :collapsed="collapsed" :collapsed-width="90" content-style="padding: 25px 15px">
		<div class="logo">
			<img :src="require('@/assets/img/logo.png')" alt="" />
		</div>
		<n-menu
			:collapsed="collapsed"
			:options="menuOptions"
			:collapsed-width="60"
			:collapsed-icon-size="32"
			v-model:value="activeKey"
		/>
	</n-layout-sider>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { NLayoutSider, NMenu, MenuOption } from 'naive-ui';
import { HamburgerButton, HomeTwo, Ring } from '@icon-park/vue-next';
import { RouterLink } from 'vue-router';

const menuOptions: MenuOption[] = [
	{
		icon: () => h(HamburgerButton, { onclick: setCollapsed, size: 25 }),
		key: 'icon'
	},
	{
		title: '首页',
		label: () => h(RouterLink, { to: '/home' }),
		key: 'home',
		icon: () => h(HomeTwo)
	},
	{
		title: '库',
		label: () => h(RouterLink, { to: '/library' }),
		key: 'library',
		icon: () => h(Ring)
	}
];
let activeKey = ref<string>('home');

let collapsed = ref<boolean>(false);
const setCollapsed = () => (collapsed.value = !collapsed.value);
</script>

<style lang="less">
.n-layout-sider {
	min-height: 100vh;
}
.logo {
	text-align: center;
}
</style>
