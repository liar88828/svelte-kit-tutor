<script>
	export let item;
</script>

<div>
	<a href={`/item/${item.id}`}>
		<p>{item.title}</p>
	</a>
	<p>{item.description}</p>
	<hr />
</div>
