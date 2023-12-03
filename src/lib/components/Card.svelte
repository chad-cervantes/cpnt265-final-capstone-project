<script>
  export let img;
  export let title;
  export let cta;
  export let url;
</script>

<article class="lg:w-[550px] bg-red-300 bg-contain  bg-cover text-xl text-center border-solid scale-75 m-auto rounded-[5%] p-8 hover:bg-orange-400 active:bg-teal-500 transition ease-linear duration-150">
  <a href={url}>
    <img src={img} class="w-[500px] h-[350px] m-auto rounded-[5%]" alt="dance class">
    <h3>{title}</h3>
    <p>{cta}</p>
  </a>
</article>