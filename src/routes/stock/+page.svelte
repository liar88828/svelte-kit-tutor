<script>
	import { invalidate, invalidateAll } from "$app/navigation";
	export let data;
	function refresh() {
		// tanpa depends di +page.js
		// invalidate("http://localhost:3000/stocks");
		//---
		// dengan depends di +page.js
		// invalidate("stocks:actively-trading");
		//---
    // validate all 
		invalidateAll();
	}
</script>

<h1>Active trending stocks</h1>

{#each data.stocks as stock}
	<h2>{stock.symbol} = ${stock.price}</h2>
{/each}
<button on:click={refresh}>Refresh</button>
