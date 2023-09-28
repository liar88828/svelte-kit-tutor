<script>
	// import Item from "./Item.svelte";
	export let data;
	const products = data.items;
	const Component = data.Component;
	// console.log(products);
</script>

<h1>List of Items</h1>

<p>{data.title}</p>
<ul>
	{#each products as item (item.title)}
		<li>
			<Component {item} />
			<!-- <Item {item} /> -->
		</li>
	{/each}
</ul>
