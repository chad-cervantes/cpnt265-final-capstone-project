<script>
  //Primary Navbar
   const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Programs', href: '/programs'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Schedule', href: '/schedule'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'}
  ];

</script>

<!--Primary Nav Links decoration-->
<header class="bg-violet-600 text-white text-xl flex justify-center w-[auto] h-[100px] p-4">
  <div><img src="images/common-ground-dance-logo.png" class="block w-[100px] h-[75px] p-4 mb-5 bg-cover" alt="Common Ground Dance logo"></div>
  <nav>
    <ul class="lg:flex text-2xl space-x-12 gap-4 p-4">
      {#each navLinks as {name, href}}
        <div class="hover:text-cyan-200 active:text-emerald-500">
          <li><a {href}>{name}</a></li>
        </div>
      {/each}  
    </ul>
  </nav>
</header>