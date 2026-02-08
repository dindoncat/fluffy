<template>
	<nav class="links" :class="{ 'mobile': mainStore.isMobile }" @click="mainStore.isMenuOpen = false">
		<RouterLink to="/">בית</RouterLink>
		<RouterLink to="/dolls">בובות</RouterLink>
		<RouterLink to="/candle">נרות</RouterLink>
		<RouterLink to="/about">אודות</RouterLink>
	</nav>
</template>

<script>
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';

export default {
	computed: {
		...mapStores(useMainStore),
	}
}
</script>

<style scoped>
.links {
	display: flex;
	gap: 2rem;
}

.links.mobile {
	flex-direction: column;
	gap: 1rem;
}

.links a {
	color: #333;
	font-weight: 500;
}

.links a.router-link-active {
	color: hsl(var(--pink)var(--low));
}
</style>