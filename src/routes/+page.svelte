<svelte:head>
  <title>Common Ground Dance</title>
</svelte:head>

<script>
  import FeatureCard from "../lib/components/FeatureCard.svelte";

  import { featureObj } from "../lib/feature.js";
</script>

<main>
  <!-- hero section -->
  <div class="min-h-screen">
    <!-- <img src='images/gallery/gallery-photo-2.jpg' alt='studio choreography' class="col-span-full col-start-1 row-start-1 row-span-full w-screen h-[600px]"> -->
    <section class="relative flex h-[100vh] shrink-0 flex-col items-center justify-center">
      <video autoplay loop muted plays-inline disablepictureinpicture class="absolute w-full h-full object-cover -z-10">
        <source src='/videos/pexels-cottonbro-7975419 (720p).mp4' type='video/mp4'>
      </video>
    </section>
  
    <div class="h-max-[60%] z-10 bg-secondary-100 col-start-2 row-start-2 row-span-full text-slate-50 self-end p-4 overflow-hidden m-auto relative mt-[-470px]">
      <h3 class="text-6xl pb-2 text-center font-bold">COMMON GROUND DANCE</h3>
      <p class="text-center text-2xl">Move to the Rhythm, Dance to Your Heartbeat!</p>
    </div>
  </div>

  <h1 class="text-center text-4xl font-bold p-8">FEATURES</h1>

  <section class="lg:grid grid-cols-3">

    {#each featureObj as feature}
     <FeatureCard {...feature} />
    {/each}

    <!--Video Interview-->
    <div class="m-auto">
      <iframe class="m-auto w-[75%] lg:w-[400px] h-[60vh] border-[10px] border-purple-400 rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/KlaMIRcy4lo?si=V6rqk1MJXYEqfsbF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </section>
</main>