<script>
  //Footer Navigation
   const navLinks = [
    // {name: 'Home', href: '/'},
    {name: 'Programs', href: '/programs'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Schedule', href: '/schedule'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
  ];

  import Icon from '@iconify/svelte';
</script>

<!--Footer Nav Links decoration-->
<header class="bg-black text-white text-md flex justify-evenly w-[100%] h-[100%] p-4">
  <div>
    <a href='/'>
     <img src="images/common-ground-dance-logo.png" class="block w-[100px] h-[75px] p-4 mb-5 mt-[20px] bg-cover m-auto hover:opacity-50 ease-linear duration-150 transition" alt="Common Ground Dance logo"> 
    </a>
     <p class="mt-[50px] text-center">&copy 2023 Common Ground Dance Inc. All Rights Reserved.</p>
   </div>
  <nav>
    <ul class="lg:grid grid-cols-3 text-lg text-center space-x-2 gap-x-36 gap-y-4 p-4">
      {#each navLinks as {name, href}}
        <div class="hover:bg-purple-600 rounded-[10px] transition duration-150 ease-linear active:bg-rose-600 px-2 rounded-[10px]">
          <li><a {href}>{name}</a></li>
        </div>
      {/each}  

      <!--Social Media-->
      <div class="flex gap-4">
        <a href="https://www.facebook.com/groups/195302860182">
          <Icon icon="ic:baseline-facebook" width="30"  class="hover:opacity-50 transition duration-150 ease-in"/>
        </a>

        <a href="https://www.youtube.com/@CommonGroundDance">
          <Icon icon="mingcute:youtube-line" width="30" class="hover:opacity-50 transition duration-150 ease-in"/>
        </a>

        <a href="https://www.instagram.com/vavooooom/?hl=en">
          <Icon icon="mdi:instagram" width="30" class="hover:opacity-50 transition duration-150 ease-in"/>
        </a>

        <a href="https://www.linkedin.com/in/vanessa-padillo-cpa-cma-743bb635/" class="hover:opacity-50 transition duration-150 ease-in">
          <Icon icon="mdi:linkedin" width="30"/>
        </a>
      </div>
   </ul>
  </nav>
</header>