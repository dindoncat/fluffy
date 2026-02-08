<template>
	<div class="layout">
		<div :class="{ 'container': !mainStore.isMobile }">
			<Header />
			<RouterView />
		</div>
	</div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import { mapStores } from 'pinia';
import useMainStore from '@/stores/main';

export default {
	components: { Header },
	computed: {
		...mapStores(useMainStore),
	},
}
</script>

<style scoped>
.container{
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

</style>
