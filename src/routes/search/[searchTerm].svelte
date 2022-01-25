<script context="module">
	export const load = async ({ fetch, params }) => {
		const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${
			import.meta.env.VITE_TMDB_API_KEY
		}&query=${params.searchTerm}`;
		const res = await fetch(endPoint);
		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					movies: data.results,
					params: params
				}
			};
		}
	};
</script>

<script>
	import MoviesList from '../../components/MoviesList.svelte';
	export let movies;
	export let params;
	const searchTerm = params.searchTerm.replaceAll('%20', ' ');
</script>

<svelte:head>
	<title>{`Search results for '${searchTerm}'`}</title>
</svelte:head>

<div><MoviesList {movies} /></div>
