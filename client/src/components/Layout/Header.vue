<template>
	<header class="header">
		<div class="header-content">
			<div class="left-section">
				<Hamburger v-if="mainStore.isMobile" />
				<Logo />
			</div>

			<Links v-if="!mainStore.isMobile" />

			<div class="right-section">
				<RouterLink to="/cart" class="cart-link">
					<ShoppingBag :size="24" />
				</RouterLink>
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<Transition name="slide">
			<div v-if="mainStore.isMobile && mainStore.isMenuOpen" class="mobile-menu">
				<Links />
			</div>
		</Transition>
	</header>
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

<style scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 1000;
	background-color: hsla(var(--pink) var(--ultra) / 0.85);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid hsla(var(--pink) var(--mid) / 0.1);
}

.header-content {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0.75rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.left-section {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.right-section {
	display: flex;
	align-items: center;
}

.cart-link {
	color: #333;
	transition: transform 0.2s ease;
}

.cart-link:hover {
	transform: scale(1.1);
}

.mobile-menu {
	position: fixed;
	top: 60px;
	background-color: var(--bg);
	padding: 2rem;
	z-index: 999;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateY(-100%);
}
</style>
