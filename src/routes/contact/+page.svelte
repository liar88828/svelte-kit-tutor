<script>
	let name = "";
	let email = "";
	let message = "";

	export const snapshot = {
		capture: () => {
			return {
				name,
				email,
				message
			};
		},
		restore: (data) => {
			console.log(data);
			name = data.name;
			email = data.email;
			message = data.message;
		}
	};
	const resetHandler = () => {
		console.log(name);
		name = "";
		email = "";
		message = "";
	};
</script>

<h1>Contact form</h1>

<form method="post">
	<input type="text" name="name" placeholder="Name" bind:value={name} />
	<input type="email" name="email" placeholder="Email" bind:value={email} />
	<input type="text" name="message" placeholder="Message" bind:value={message} />
	<button>Send</button>
	<a href="/">Cancel</a>
	<button type="button" on:click={resetHandler}>Reset</button>
</form>
