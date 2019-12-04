<script>
	import ClickCard from './ClickCard.svelte';
	import * as fetch from 'd3-fetch';
	import { onMount } from 'svelte';

	let w;
	let data = [];
	let loaded = false;

	onMount(() => {
		fetch.csv('books.csv').then((d) => {
			console.log(d);

			data = d.sort((a,b) => {
				return parseInt(a['Color Order']) - parseInt(b['Color Order']);
			}).map(v => {
				let title = v['Title'];
				let slug = title
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^\w\-]+/g, '');

				return {
					img: `books/${v['Image']}`,
					title: title,
					author: v['Author'],
					background: '#1fa898',
					slug: slug,
				}
			});

			console.log(data);
		})

		console.log(w);

		loaded = true;
	})


</script>

<style>
	.card-container {
		padding: 1em;
	}

	.wrapper {
		 display: flex;
  		flex-wrap: wrap;
	}
</style>

<div class='wrapper' bind:clientWidth={w}>
	{#if loaded}
		{#each data as prop}
		<div class='card-container'>
			<ClickCard props={prop}/>
		</div>
		{/each}
	{/if} 
</div>