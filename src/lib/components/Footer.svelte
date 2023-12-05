<script>
  //Footer Navigation
   const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Programs', href: '/programs'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Schedule', href: '/schedule'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'}
  ];

</script>

<!--Footer Nav Links decoration-->
<header class="bg-black text-white text-md flex justify-evenly w-[100%] h-[100%] p-4">
  <div>
    <img src="images/common-ground-dance-logo.png" class="block w-[100px] h-[75px] p-4 mb-5 mt-[20px] bg-cover m-auto" alt="Common Ground Dance logo">
    <p class="mt-[50px] text-center">&copy 2023 Common Ground Dance Inc. All Rights Reserved.</p>
  </div>
  <nav>
    <ul class="lg:grid grid-cols-3 text-lg text-center space-x-12 gap-x-52 gap-y-4 p-4">
      {#each navLinks as {name, href}}
        <div class="hover:bg-purple-600 rounded-[20px] transition duration-150 ease-linear active:bg-rose-600 px-2 rounded-[10px]">
          <li><a {href}>{name}</a></li>
        </div>
      {/each}  
    </ul>
  </nav>
</header>