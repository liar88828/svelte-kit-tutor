<script>
	import { page } from "$app/stores";
	import Footer from "$lib/footer.svelte";
	import Header from "$lib/header.svelte";
	export let data;
	const username = data.username;
</script>

<Header />
<svelte:head>
	<title>{$page.data.title || "Codevolution"}</title>
</svelte:head>
{#if $page.data.notification}
	<p>Notification Banner {$page.data.notification}</p>
{/if}
<h1>Welcome, {username}</h1>
<slot />
<Footer />
