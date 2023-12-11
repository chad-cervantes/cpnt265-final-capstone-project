<script>
  export let img;
  export let title;
  export let cta;
  export let url;
</script>

<article class="lg:w-[550px] bg-purple-300 bg-contain  bg-cover text-xl text-center border-solid scale-75 m-auto rounded-[5%] p-8 hover:bg-pink-400 active:bg-yellow-500 transition ease-linear duration-150">
  <a href={url}>
    <img src={img} class="w-[500px] h-[350px] m-auto rounded-[5%]" alt="dance class">
    <h3 class="p-4 text-[40px] lg:p-4 text-blue-600 text-center text-4xl font-extrabold">{title}</h3>
    <p class="p-4 lg:p-4 text-2xl">{cta}</p>
  </a>
</article>
