<script context="module">
	const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${
		import.meta.env.VITE_TMDB_API_KEY
	}`;
	export const load = async ({ fetch }) => {
		const res = await fetch(endPoint);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { movies: data.results }
			};
		}
	};
</script>

<script>
	import MoviesList from '../components/MoviesList.svelte';
	import MoviesSearchBar from '../components/MoviesSearchBar.svelte';
	export let movies;
</script>

<svelte:head>
	<title>Movie DB: Get info about your favourite movies</title>
	<meta name="description" content="Get info about your favourite movies" />
</svelte:head>

<div>
	<MoviesSearchBar />
	<MoviesList {movies} />
</div>
