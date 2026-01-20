<template>
	<div class="app">
		<Layout />
	</div>
</template>

<script>
import Layout from './layout/Layout.vue';
import useMainStore from './stores/main';

export default {
	components: { Layout },

	created() {
		useMainStore()
	}
}
</script>

<style scoped></style>
