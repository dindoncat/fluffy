<script>
</script>

<template>
  <div class="item-card">
    <object data="" alt=""></object>
    <h3>שם פריט</h3>
		<div class="bottom-line">
			<span class="price">513</span>
			<button>🛒</button>
		</div>
  </div>
</template>

<style scoped>
	.item-card {
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