<template>
	<div class="layout">
		<Header />
		<RouterView />
	</div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';

export default {
	components: { Header }
}
</script>

<style scoped></style>
