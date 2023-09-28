<script>
	export let data;
</script>

<span>Most active stock - {data.mostActive.symbol} - {data.mostActive.price} </span>
<span>Most gaining stock - {data.topGaining.symbol} - {data.topGaining.price}</span>
<span
	>Most losing stock -
	{data.topLosing.symbol} - {data.topLosing.price}</span
>
<slot />

<style>
	span {
		margin-right: 2rem;
		font-size: 2rem;
	}
</style>
