<header class="layout-header">
	Header

	<a href="/">Home</a>
</header>
<slot />
<header class="layout-footer">Footer</header>

<style>
	.layout-header {
		background-color: rgb(54, 61, 65);
		color: orange;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}

	.layout-footer {
		background-color: rgb(54, 61, 65);
		color: orange;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
