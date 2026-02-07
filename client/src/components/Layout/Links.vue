<template>
	<div class="nav-list" :class="{ 'mobile-nav': mainStore.isMobile }">
		<ul>
			<router-link to="/" @click="closeMenu">בית</router-link>
		</ul>
		<ul>
			<router-link to="/products" @click="closeMenu">מוצרים</router-link>
		</ul>
		<ul>
			<router-link to="/about" @click="closeMenu">אודות</router-link>
		</ul>
		<ul>
			<router-link to="/contact" @click="closeMenu">צור קשר</router-link>
		</ul>
	</div>
</template>

<script>
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';

export default {
	computed: {
		...mapStores(useMainStore),
	},
	methods: {
		closeMenu() {
			if (this.mainStore.isMobile) {
				this.mainStore.isMenuOpen = false;
			}
		}
	}
}
</script>

<style scoped>
.nav-list {
	user-select: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	 > ul {
		 list-style: none;
		 display: flex;
		 padding: 0; /* Add this line */
		 margin: 0;  /* Good practice to reset margin too */
	 }
}
.mobile-nav {
	position: absolute;
	top: 47px;
	left: 0;
	background: hsl(var(--pink)var(--low));
	width: 100%;
	height: 45vh;
	flex-direction: column;
	align-items: center;
	z-index: 1000;
	> ul {
		width: 100%;
		text-align: center;
		padding: 1.5rem 0;
		border-bottom: 1px solid hsl(var(--beige)var(--low));
	}
	> ul a {
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
	}
	> ul:last-child {
		border-bottom: none;
	}
}

</style>
