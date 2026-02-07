<template>
	<div class="logo">
		<router-link to="/">
			<div class="logo-container">
				<h1 class="logo">fluffy</h1>
				<img src="@/assets/logo.png" alt="Logo" />
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Logo'
}
</script>

<style scoped>
.logo {
	display: flex;
	justify-content: center;
}
.logo-container{
	user-select: none;
	display: flex;
	align-items: center;
}
.logo img {
	height: 40px;
	width: auto;
	display: block;
}
.logo h1{
	font-family: 'Pacifico', cursive;
	font-size: 1.5rem;
	margin: 0;
	color: inherit;
	text-transform: uppercase;
	text-align: center;
	display: inline-block;
}

</style>
