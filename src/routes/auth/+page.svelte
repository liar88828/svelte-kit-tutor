<script>
	let username = "";
	let password = "";
	let message = "";

	const handlerSubmit = async () => {
		message = "";
		const res = await fetch("/auth", {
			method: "POST",
			body: JSON.stringify({ username, password })
		});

		const data = await res.json();
    console.log(data);
		message = data.message;
	};
</script>

<form on:submit|preventDefault={handlerSubmit}>
	<p>{message}</p>
	<input type="text" name="username" placeholder="Username" bind:value={username} />
	<input type="password" name="password" placeholder="Password" bind:value={password} />
	<button type="submit">Login</button>
</form>
