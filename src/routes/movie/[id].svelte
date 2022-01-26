<script context="module">
	export const load = async ({ fetch, params }) => {
		const endPoint = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
			import.meta.env.VITE_TMDB_API_KEY || process.env.API_KEY
		}&language=en-US`;
		const res = await fetch(endPoint);
		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					movie: data
				}
			};
		} else {
			return {
				props: {
					movie: {}
				}
			};
		}
	};
</script>

<script>
	import { baseImgUrl } from '../../components/MovieItem.svelte';
	export let movie;
	const getYearFromDate = (date) => date.split('-')[0];
</script>

<svelte:head>
	<title>{movie.title}</title>
</svelte:head>

<div>
	<div class="banner">
		<div class="imgContainer">
			<img src={`${baseImgUrl}${movie.backdrop_path}`} alt={movie.title} />
		</div>
		<div class="overlay">
			<div class="about">
				<h2>{movie.title} ({getYearFromDate(movie.release_date)})</h2>
				<div class="genreAndRuntime">
					{#each movie.genres as genre}
						<i>{genre.name}</i>
					{/each}
					<i>{movie.runtime}m</i>
				</div>
				<div class="overview">
					<h3>Overview</h3>
					<p>{movie.overview}</p>
				</div>
				<div class="ratingBar">
					<div class="rating" style="width: {movie.vote_average * 10}%" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.banner {
		max-width: 60rem;
		margin: auto;
	}
	.imgContainer img {
		width: 100%;
		object-fit: contain;
		display: block;
	}
	.overlay {
		color: white;
		height: 100%;
		width: 100%;
		background: rgb(0, 0, 0);
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 1) 30%,
			rgba(0, 0, 0, 0.30325633671437324) 83%
		);
		display: none;
	}
	.about {
		width: 60%;
	}
	.about h2 {
		margin: 1rem 0;
	}
	.about {
		margin: 1rem;
	}
	.genreAndRuntime i {
		margin: 0.25rem 0.5rem 0.25rem 0;
	}
	.overview {
		margin: 0.5rem 0;
	}
	.ratingBar {
		width: 10rem;
		height: 0.5rem;
		background: white;
		border-radius: 0.25rem;
		overflow: hidden;
	}
	.rating {
		height: 100%;
		background: tomato;
	}
	@media only screen and (min-width: 600px) {
		.banner {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			position: relative;
		}
		.imgContainer {
			width: 80%;
			height: 100%;
		}
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			display: inline-block;
		}
	}
</style>
