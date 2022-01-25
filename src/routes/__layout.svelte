<script>
	import global from '../global.css';
</script>

<svelte:head>
	<title>Movie DB</title>
	<meta name="description" content="Get info about most popular movies" />
</svelte:head>

<nav>
	<a href="/">Home</a>
</nav>
<slot />

<style>
	a {
		text-decoration: none;
		display: inline-block;
		margin: 1rem;
		padding: 0.25rem 0.5rem;
		border: 1px solid white;
		border-radius: 0.25rem;
		color: black;
	}

	a:hover {
		border: 1px solid lightgrey;
	}
</style>
