<script>
	export let data;
</script>

<h1>Today Headlines</h1>
{#each data.news as article (article.id)}
	<h2>{article.title}</h2>
{/each}

