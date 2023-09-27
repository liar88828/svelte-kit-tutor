<script>
	import { page } from "$app/stores";
	const greeting = {
		en: "Hello",
		es: "Hola",
		fa: "Bonjour"
	};

	const { lang = "en" } = $page.params;
	const greet = greeting[lang];
</script>

<h1>{greet}</h1>
