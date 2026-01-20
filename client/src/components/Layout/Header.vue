<template>
	<div class="header">
		<Hamburger v-if="mainStore.isMobile"/>
		<Logo />
		<Links />
		<RouterLink to="/cart">
			<ShoppingBag />
		</RouterLink>
	</div>
</template>

<script>
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';
import Hamburger from './Hamburger.vue';
import Logo from './Logo.vue';
import Links from './Links.vue';
import { ShoppingBag } from 'lucide-vue-next';

export default {
	components: { Hamburger, Logo, Links, ShoppingBag },

	computed: {
		...mapStores(useMainStore),
	}
}
</script>

<style scoped></style>
