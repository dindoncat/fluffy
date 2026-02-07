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
	padding: 0 28vw;
}

</style>
