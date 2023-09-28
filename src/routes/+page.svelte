<script>
	import { goto, beforeNavigate, afterNavigate, preloadData, preloadCOde } from "$app/navigation";

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
<!-- <a href="/item" data-sveltekit-preload-code="hover">Item</a> -->
<a href="/item" data-sveltekit-scroll>Item</a>
<button
	on:focus={async () => await preloadData("/item")}
	on:mouseover={async () => await preloadData("/item")}
	on:mouseover={async () => await preloadData("/item")}
	on:click={() => goto("/item")}>Goto Item</button
>
<!-- <a href="/item" data-sveltekit-preload-data="hover">Item</a> -->
<!-- <a href="/item" data-sveltekit-preload-data="tab">Item</a> -->
<!-- <a href="/item" data-sveltekit-preload-data="off">Item</a> -->

<button on:click={handleClick}>Place order</button>
