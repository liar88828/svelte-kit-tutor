<script>
	export let data;
	const username = data.username;
	const title = data.title;
	const featuredItems = data.featuredItems;
</script>

<slot />
<hr />
<h2>{title} for {username}</h2>
{#each featuredItems as item}
	<div class="product-item">
		<h2>{item.title}</h2>
		<p>{item.description}</p>
	</div>
{/each}

<style>
	.product-item {
		display: inline-block;
		width: 17rem;
		margin: 1rem;
		border: 1px solid gray;
		padding: 1rem;
	}
</style>
