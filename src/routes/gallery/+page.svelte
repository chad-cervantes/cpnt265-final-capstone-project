<script context="module" lang="ts">
  import ImageCarousel from "../../lib/components/ImageCarousel.svelte";

  export const prerender = true

  let images = [
    {title: 'Image 1', src:'/images/gallery/gallery-photo-1.jpg'},
    {title: 'Image 2', src:'/images/gallery/gallery-photo-2.jpg'},
    {title: 'Image 3', src:'/images/gallery/gallery-photo-3.jpg'},
    {title: 'Image 4', src:'/images/gallery/gallery-photo-4.jpg'},
    {title: 'Image 5', src:'/images/gallery/gallery-photo-5.jpg'},
    {title: 'Image 6', src:'/images/gallery/gallery-photo-6.jpg'},
    {title: 'Image 7', src:'/images/gallery/gallery-photo-7.jpg'},
    {title: 'Image 8', src:'/images/gallery/gallery-photo-8.jpg'},
    {title: 'Image 9', src:'/images/gallery/gallery-photo-9.jpg'},
    {title: 'Image 10', src:'/images/gallery/gallery-photo-10.jpg'},
    {title: 'Image 11', src:'/images/gallery/gallery-photo-11.jpg'},
    {title: 'Image 12', src:'/images/gallery/gallery-photo-12.png'},
  ]
</script>

<svelte:head>
  <title>Portraits</title>
</svelte:head>

<section class="flex flex-col items-center">
    <ImageCarousel {images} />
  <slot />
</section>
