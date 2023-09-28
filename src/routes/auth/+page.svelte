<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	// ------- for +server.js
	// let username = "";
	// let password = "";
	// let message = "";
	// const handlerSubmit = async () => {
	// 	message = "";
	// 	const res = await fetch("/auth", {
	// 		method: "POST",
	// 		body: JSON.stringify({ username, password })
	// 	});
	// 	const data = await res.json();
	//   console.log(data);
	// 	message = data.message;
	// };
	// -------
	export let form;

	const redirectTo = $page.url.searchParams.get("redirectTo") || "/";
</script>

<!-- for +server.js -->
<!-- <form on:submit|preventDefault={handlerSubmit}> -->
<form method="post" action={`?/login&redirectTo=${redirectTo}`} use:enhance>
	<p>{form?.message || ""}</p>
	<!--  ------- for +server.js -->
	<!-- <input type="text" name="username" placeholder="Username" bind:value={username} /> 
	<input type="password" name="password" placeholder="Password" bind:value={password} />  -->
	<!--  -->
	<!-- value will save a when error -->
	<input type="text" name="username" placeholder="Username" value={form?.username ?? ""} />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
	<button formaction={`?/register&redirectTo=${redirectTo}`}>Register</button>
</form>
