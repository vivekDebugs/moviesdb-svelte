<script context="module">
	export const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
	export const baseImgUrlOriginal = 'https://image.tmdb.org/t/p/original/';
</script>

<script>
	import { goto } from '$app/navigation';
	export let movie;
	let isHover = false;
	const setIsHover = (bool) => {
		isHover = bool;
	};

	const handleClick = (movieId) => {
		goto(`/movie/${movieId}`);
	};
</script>

<div
	on:mouseenter={() => setIsHover(true)}
	on:mouseleave={() => setIsHover(false)}
	on:click={() => handleClick(movie.id)}
	class="movieCard"
>
	<img src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
	<div class="description {isHover ? 'show' : ''}">
		<h3>{movie.title}</h3>
	</div>
</div>

<style>
	h3 {
		margin: 0.25rem 0;
	}

	.description {
		padding: 0.25rem 0.75rem 1rem;
		position: absolute;
		height: 100%;
		width: 100%;
		bottom: 0;
		left: 0;
		display: none;
		color: white;
		background: rgb(0, 0, 0);
		background: rgb(0, 0, 0);
		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 20%,
			rgba(0, 0, 0, 0.10157566444546573) 100%
		);
	}

	.description.show {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.movieCard {
		width: 12rem;
		display: inline-block;
		margin: 0.25rem;
		border-radius: 1rem;
		overflow: hidden;
		transition: all 0.3s ease;
		position: relative;
		cursor: pointer;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.movieCard:hover {
		transform: scale(1.05);
	}
</style>
