<script>
  export let props = {
    img: 'books/alittlelife.jpg',
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    age: '4',
    year: '2016',
  }

</script>

<style>
  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 250px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }

  img {
    max-height: 100%;
  }
</style>


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={props.img} alt={props.title} >
    </div>
    <div class="flip-card-back">
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </div>
  </div>
</div>