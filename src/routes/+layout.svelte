<script>
	import Footer from "$lib/footer.svelte";
	import Header from "$lib/header.svelte";
	export let data
	const username = data.username
</script>

<Header />
<h1>Welcome, {username}</h1>
<slot />
<Footer />
