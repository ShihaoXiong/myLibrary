<template>
	<n-config-provider :theme="theme">
		<n-layout has-sider>
			<Menu />
			<router-view />
		</n-layout>
	</n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Menu from '@/components/Menu.vue';
import { darkTheme, NConfigProvider, useOsTheme, NLayout } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface';

const theme = computed<BuiltInGlobalTheme | null>(() => (useOsTheme().value === 'dark' ? darkTheme : null));
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.n-layout {
	min-height: 100vh;
	width: 100%;
}
</style>
