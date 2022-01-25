<script>
	import MovieItem from '../components/MovieItem.svelte';
	export let movies;
</script>

<div class="moviesList">
	{#each movies as movie}
		<MovieItem {movie} />
	{/each}
</div>

<style>
	.moviesList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1rem;
	}
</style>
