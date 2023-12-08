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

  import Logo from './Logo.svelte';
</script>

<!--Footer Nav Links decoration-->
<header class="bg-black text-white text-md flex justify-evenly w-[auto] h-[full] p-4">
  <div class="block w-[full] h-[150px] py-4">
    <div class="ml-[50px] lg:ml-[150px]">
      <a href='/'>
        <Logo />
      </a>
    </div>
     <p class="mt-[40px] lg:mt-[30px] text-center">&copy 2023 Common Ground Dance Inc. All Rights Reserved.</p>
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