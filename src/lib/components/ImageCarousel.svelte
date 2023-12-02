<script lang="ts">
  type ImageType = {
    title: string
    src: string
  }
  export let images: ImageType[]
</script>

<ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] p-4">
  {#each images as {title,src}}
    <li class="shrink-0 snap-center">
      <img {title} {src} alt={title} class="w-[300px] h-[500px]"/>
    </li>
  {/each}
</ul>