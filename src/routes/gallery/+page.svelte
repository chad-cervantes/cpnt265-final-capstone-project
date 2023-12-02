<!-- <div class="m-auto w-[75%] h-[50%] p-4 gap-4 lg:grid grid-cols-4">
  <imgsrc="/images/gallery-photo-1.jpg" alt="dance photo 1">
  <img src="/images/gallery-photo-2.jpg" alt="dance photo 2">
  <img src="/images/gallery-photo-3.jpg" alt="dance photo 3">
  <img src="/images/gallery-photo-4.jpg" alt="dance photo 4">
  <img src="/images/gallery-photo-5.jpg" alt="dance photo 5">
  <img src="/images/gallery-photo-6.jpg" alt="dance photo 6">
  <img src="/images/gallery-photo-7.jpg" alt="dance photo 7">
  <img src="/images/gallery-photo-8.jpg" alt="dance photo 8">
  <img src="/images/gallery-photo-9.jpg" alt="dance photo 9">
  <img src="/images/gallery-photo-10.jpg" alt="dance photo 10">
  <img src="/images/gallery-photo-11.jpg" alt="dance photo 11">
  <img src="/images/gallery-photo-12.png" alt="dance photo 12">
</div> -->

<script context="module" lang="ts">
  import ImageCarousel from "../../lib/components/ImageCarousel.svelte";

  export const prerender = true

  let images = [
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
    {title: 'Image 1', src:'/images/gallery-photo-1.jpg'},
  ]
</script>

<svelte:head>
  <title>Portraits</title>
</svelte:head>

<section class="flex flex-col items-center">
    <ImageCarousel {images} />
  <slot />
</section>
