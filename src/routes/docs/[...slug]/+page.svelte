<script>
	import { page } from '$app/stores';
	const slugArg = $page.params.slug;
	const slug = slugArg.split('/');
</script>

{#if slug.length === 1}
	<h1>Docs home page {slug[0]}</h1>
{/if}
