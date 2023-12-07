<script>
  import Card from '$lib/components/Card.svelte';

  import { danceObj } from '$lib/data.js';
</script>

<main>
  <!-- hero section -->
  <div class="grid grid-cols-3 grid-rows-2">
    <img src='images/programs/programs-hero-section-image.jpg' alt='studio choreography' class="col-span-full col-start-1 row-start-1 row-span-full w-screen h-[600px]">
  
    <div class="lg:h-max-[60%] z-10 bg-secondary-100 col-start-2 row-start-2 row-span-full text-slate-50 self-end p-4 overflow-hidden m-auto relative mt-[-270px]">
      <h3 class="flex text-center text-2xl lg:text-4xl pb-2 text-center font-bold">START YOUR DANCE JOURNEY</h3>
      <p class="flex text-center lg:text-center text-2xl">Join the dance revolution to where every step is a celebration of life!</p>
    </div>
</div>
</main>

<h1 class="text-center text-[30px] font-bold p-8">PROGRAMS</h1>

<!--for each loop for cards-->

<section class="lg:grid grid-cols-2 mb-[100px]">
  {#each danceObj as card}
    <Card {...card} />
  {/each}
</section>

<style>
  h1, h3, p {
    font-family: 'Khand';
  }
</style>