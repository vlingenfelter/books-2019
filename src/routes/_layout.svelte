<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 90%;
		background-color: #131415;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>