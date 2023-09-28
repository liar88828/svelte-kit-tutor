<script>
	export let data;
	const title = data.title;
	const item = data.items
  console.log(item);
</script>

<h1>Item Details {title}</h1>
<div class="">
	<h2>{item.title}</h2>
	<p>{item.description}</p>
</div>
