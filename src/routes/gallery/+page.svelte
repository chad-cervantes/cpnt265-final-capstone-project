<script context="module" lang="ts">
  import ImageCarousel from "../../lib/components/ImageCarousel.svelte";

  // export const prerender = true

  let images = [
    {title: 'Bboy Pose', src:'/images/gallery/gallery-photo-1.jpg'},
    {title: 'Jazz Dance', src:'/images/gallery/gallery-photo-2.jpg'},
    {title: 'Hair flip', src:'/images/gallery/gallery-photo-3.jpg'},
    {title: 'Production Show', src:'/images/gallery/gallery-photo-4.jpg'},
    {title: 'Jump Pose 1', src:'/images/gallery/gallery-photo-5.jpg'},
    {title: 'Ballet Pose 1', src:'/images/gallery/gallery-photo-6.jpg'},
    {title: 'Ballet Pose 2', src:'/images/gallery/gallery-photo-7.jpg'},
    {title: 'Ballet Pose 3', src:'/images/gallery/gallery-photo-8.jpg'},
    {title: 'Jump Pose 2', src:'/images/gallery/gallery-photo-9.jpg'},
    {title: 'Ballet Jump', src:'/images/gallery/gallery-photo-10.jpg'},
    {title: 'Bboy style outfit', src:'/images/gallery/gallery-photo-11.jpg'},
    {title: 'Hip Pop Jump', src:'/images/gallery/gallery-photo-12.png'},
    {title: 'Into the Wooden Mirror 1', src:'/images/gallery/portrait-photo-1.jpg'},
    {title: 'Into the Wooden Mirror 2', src:'/images/gallery/protrait-photo-2.jpg'},
    {title: 'Model Pose 1', src:'/images/gallery/portrait-photo-3.jpg'},
    {title: 'Model Pose 2', src:'/images/gallery/portrait-photo-4.jpg'},
    {title: 'Model Pose 3', src:'/images/gallery/portrait-photo-5.jpg'},
    {title: 'Bboy outfit 1', src:'/images/gallery/protrait-photo-6.jpg'},
    {title: 'Bboy outfit 2', src:'/images/gallery/protrait-photo-7.jpg'},
    {title: 'Bboy outfit 3', src:'/images/gallery/protrait-photo-8.jpg'},
  ]

</script>

<h1 class="p-4 text-center text-[50px] font-bold">PERFORMANCE PHOTOS & SELF-PORTRAITS</h1>

<section class="lg:flex flex-col items-center">
    <ImageCarousel {images} />
  <slot />
</section>

<style>
  h1 {
    font-family: 'Khand';
  }
</style>