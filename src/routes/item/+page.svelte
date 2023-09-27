<script>
	export let data;
	const products = data.items;
</script>

<h1>List of Items</h1>
<p>{data.title}</p>
<ul>
	{#each products as p (p.title)}
		<li>{p.title}</li>
		<p>{p.description}</p>
		<hr />
	{/each}
</ul>
