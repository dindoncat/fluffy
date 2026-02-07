<template>
	<div class="header">
		<Menu v-if="mainStore.isMobile && !mainStore.isMenuOpen" @click="mainStore.toggleMenu"/>
		<X v-if="mainStore.isMobile && mainStore.isMenuOpen" @click="mainStore.toggleMenu"/>
		<Logo />
		<Links v-if="!mainStore.isMobile || mainStore.isMenuOpen" />
		<RouterLink to="/cart">
			<ShoppingBag />
		</RouterLink>
	</div>
</template>

<script>
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';
import Logo from './Logo.vue';
import Links from './Links.vue';
import { ShoppingBag ,Menu, X } from 'lucide-vue-next';

export default {
	components: { Logo, Links, ShoppingBag, Menu, X },

	computed: {
		...mapStores(useMainStore),
	}
}
</script>

<style>
.header {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
