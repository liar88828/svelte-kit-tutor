<script>
	import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

	const handleClick = () => {
		console.log("placing your order");
		goto("/products", { replaceState: false });
	};

	beforeNavigate((navigate) => {
		console.log({ before: navigate });
	});

  
	afterNavigate((navigate) => {
		console.log({ after: navigate });
	});
  
</script>

<h1>welcome home</h1>
<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place order</button>
