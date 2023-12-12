<script lang="ts">
  type ImageType = {
    title: string
    src: string
  }
  export let images: ImageType[]
  export const getItemId = (gallery: number) => `carousel-item-${gallery}`
</script>

<ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[5vw] after:shrink-0 after:w-[5vw] p-4 scroll-smooth ">
  {#each images as {title,src}, gallery}
    <li id={getItemId(gallery)} class="shrink-0 snap-center shadow-lg relative">
      <div class="z-10">
        <img {title} {src} alt={title} class="w-[300px] h-[500px] rounded -z-10"/>
        <p class="bg-primary text-white slate-200 px-4 py-2 semibold rounded absolute inset-x-2 drop-shadow-lg shadow-primary mt-[-50px]">{title}</p>
      </div>
    </li>
  {/each}
</ul>

<h2 class="text-center text-xl font-bold p-4">Choose An Image</h2>

<nav>
  <ul class="p-4 mb-2 grid grid-cols-3 gap-4">
    {#each images as {title}, gallery}
      <li class="shrink-0 snap-center hover:opacity-50 transition duration-150 ease-linear text-center">
        <a href={`#${getItemId(gallery)}`}>{title}</a>
      </li>
    {/each}
  </ul>
</nav>