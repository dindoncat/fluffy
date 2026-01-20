<script>
</script>

<template>
  <div class="item">
    <object data="" alt=""></object>
    <h3>שם פריט</h3>
		<div class="bottom-line">
			<span class="Price">513</span>
			<button class="Pink Label">🛒</button>
		</div>
  </div>
</template>

<style scoped>
	.item {
		padding: 15px;
		width: 50%;
		aspect-ratio: 3/2;
		background-color: hsl(var(--beige)var(--ultra));
		border-radius: 30px;
	}

	object {
		width: 100%;
		aspect-ratio: 1/1;
	}

	.bottom-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>