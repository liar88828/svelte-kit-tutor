<script>
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
</script>

<!-- for +server.js -->
<!-- <form on:submit|preventDefault={handlerSubmit}> -->
<form method="post">
	<p>{form?.message||""}</p>
	<!--  ------- for +server.js -->
	<!-- <input type="text" name="username" placeholder="Username" bind:value={username} /> 
	<input type="password" name="password" placeholder="Password" bind:value={password} />  -->
	<!--  -->
	<!--  -->
	<input type="text" name="username" placeholder="Username" />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
</form>
