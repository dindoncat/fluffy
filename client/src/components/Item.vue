<script>
export default {
	name: "Item",
	data: () => ({
		itemName: "שם הפריט",
		imgURL: "",
		price: 513
	})
}
</script>

<template>
  <div class="item">
    <object :data="imgURL" :alt="itemName"></object>
    <h3>{{ itemName }}</h3>
		<div class="bottom-line">
			<span class="Price">{{ price }}</span>
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