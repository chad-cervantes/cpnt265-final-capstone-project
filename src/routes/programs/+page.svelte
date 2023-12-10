<script>
  import Card from '$lib/components/Card.svelte';

  import { danceObj } from '$lib/data.js';
</script>

<main>
  <!-- hero section -->
  <div class="grid grid-cols-3 grid-rows-2">
    <img src='images/programs/programs-hero-section-image.jpg' alt='studio choreography' class="col-span-full col-start-1 row-start-1 row-span-full w-screen h-[600px]">
  
    <!--hero section title-->
    <div class="h-max-[60%] z-10 bg-secondary-100 col-start-2 row-start-2 row-span-full text-slate-50 self-end p-4 overflow-hidden m-auto relative mt-[-270px]">
      <h1 class="ml-[-17px] text-4xl text-center font-bold ">START YOUR DANCE JOURNEY</h1>
    </div>
  </div>
</main>

<!--Programs Section-->
<h2 class="text-center text-4xl font-bold p-8">PROGRAMS</h2>

<!--for each loop for program cards-->

<section class="lg:grid grid-cols-2 mb-[100px]">
  {#each danceObj as card}
    <Card {...card} />
  {/each}
</section>

<!--styling hero-section title-->
<style>
  h1 {
    font-family: 'Khand';
  }
</style>