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

    <!--CBC Calgary Article-->
    <!-- <article class="lg:w-[550px] bg-purple-300 bg-contain  bg-cover text-xl text-center border-solid scale-75 m-auto rounded-[5%] p-8 hover:bg-pink-400 active:bg-yellow-500 transition ease-linear duration-150">
      <a href="https://www.cbc.ca/amp/1.6464049">
        <img src="/images/home/home-photo-1.jpg" class="w-[500px] h-[350px] m-auto rounded-[5%]" alt="dance class">
        <h3 class="p-4 text-6xl">CBC Calgary</h3>
        <p>This is an article from CBC Calgary about how I used my financial background to grow the arts community here in Calgary</p>
      </a>
    </article> -->

    <!--Dance Resume-->
    <!-- <article class="lg:w-[550px] bg-red-300 bg-contain  bg-cover text-xl text-center border-solid scale-75 m-auto rounded-[5%] p-8 hover:bg-orange-400 active:bg-teal-500 transition ease-linear duration-150">
      <a href="/documents/dance-resume.pdf">
        <img src="/images/home/home-photo-2.jpg" class="w-[500px] h-[350px] m-auto rounded-[5%]" alt="dance class">
        <h3 class="p-4 text-6xl">Dance Resume</h3>
        <p>Here is a document of all of my previous and current dance experiences!</p>
      </a>
    </article> -->

    {#each featureObj as feature}
     <FeatureCard {...feature} />
    {/each}

    <!--Video Interview-->
    <div class="m-auto">
      <iframe class="m-auto w-[75%] lg:w-[400px] h-[60vh] border-[10px] border-purple-400 rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/KlaMIRcy4lo?si=V6rqk1MJXYEqfsbF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </section>
</main>