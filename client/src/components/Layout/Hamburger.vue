<template>
	<button class="hamburger" @click="mainStore.toggleMenu">
		<Menu v-if="!mainStore.isMenuOpen" />
		<X v-else />
	</button>
</template>

<script>
import { Menu, X } from 'lucide-vue-next';
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';

export default {
	components: { Menu, X },
	computed: {
		...mapStores(useMainStore),
	}
}
</script>

<style scoped>
.hamburger {
	background: none;
	border: none;
	cursor: pointer;
	padding: 5px;
}
</style>