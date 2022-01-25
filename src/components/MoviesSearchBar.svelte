<script context="module">
	let searchTerm;
	import { goto } from '$app/navigation';
	const handleSubmit = () => {
		goto(`/search/${searchTerm}`);
		searchTerm = '';
	};
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<input bind:value={searchTerm} type="text" placeholder="Search Movies" />
		<input type="submit" value="Search" />
	</form>
</div>

<style>
	form {
		display: flex;
		justify-content: center;
	}
	input[type='submit'] {
		background: white;
		border-radius: 0.25rem;
		border: 1px solid white;
		padding: 0.25rem 0.5rem;
		margin: 0 0.5rem;
	}
	input[type='submit']:hover {
		border: 1px solid lightgray;
	}
</style>
