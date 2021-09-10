<template>
	<n-layout-sider collapse-mode="width" :collapsed="collapsed" :collapsed-width="90" content-style="padding: 25px 15px">
		<div class="logo">
			<img :src="require('@/assets/img/logo.png')" alt />
		</div>
		<div class="collapsed-bar" @click="setCollapsed">
			<hamburger-button theme="outline" size="24" fill="#333" />
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
		label: () => h(RouterLink, { to: '/', text: '首页' }),
		key: 'home',
		icon: () => h(HomeTwo)
	},
	{
		label: () => h(RouterLink, { to: '/library', text: '库' }),
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
	margin-bottom: 20px;
	img {
		width: 50px;
	}
}
.collapsed-bar {
	cursor: pointer;
}
.logo,
.collapsed-bar {
	text-align: center;
}
</style>
