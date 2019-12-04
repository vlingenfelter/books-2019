<script>
	import { onMount } from 'svelte';

	export let props = {
	    img: 'books/alittlelife.jpg',
	    title: 'A Little Life',
	    author: 'Hanya Yanagihara',
	    age: '4',
	    year: '2016',   
    	slug: 'a-little-life',
	  }

	let card;
	let el;

	onMount(() => {
		card = document.querySelector(`.${props.slug}`);
		card.addEventListener( 'click', function() {
		  card.classList.toggle('is-flipped');
		});
	});
</script>


<style>
.scene {
  background-color: transparent;
  width: 200px;
  height: 300px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

:global(.card.is-flipped) {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

img {
    max-height: 100%;
  }

.card__face--back {
  background: blue;
  transform: rotateY(180deg);
}

</style>

<div class="scene scene--card">
  <div class={`card ${props.slug}`}>
    <div class="card__face card__face--front">
    	<img src={props.img} alt={props.title} >
    </div>
    <div class="card__face card__face--back">
    	<h1>{props.title}</h1>
      <p>{props.author}</p>
    </div>
  </div>
</div>