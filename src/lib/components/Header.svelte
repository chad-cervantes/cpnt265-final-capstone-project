<script>
  //Primary Navbar
   const navLinks = [
    {name: 'HOME', href: '/'},
    {name: 'PROGRAMS', href: '/programs'},
    {name: 'GALLERY', href: '/gallery'},
    {name: 'SCHEDULE', href: '/schedule'},
    {name: 'ABOUT', href: '/about'},
    {name: 'CONTACT', href: '/contact'}
  ];

</script>

<!--Primary Nav Links decoration-->
<header class="bg-violet-400 text-white text-xl flex justify-center w-[auto] h-[100px] p-4">
  <div><img src="images/common-ground-dance-logo.png" class="block w-[100px] h-[75px] p-4 mb-5 bg-cover" alt="Common Ground Dance logo"></div>
  <nav>
    <ul class="lg:flex text-xl space-x-12 gap-2 p-4 mt-2">
      {#each navLinks as {name, href}}
        <div class="hover:bg-purple-600 rounded-[20px] transition duration-150 ease-linear active:bg-rose-600 px-2 rounded-[20px]">
          <li><a {href}>{name}</a></li>
        </div>
      {/each}  
    </ul>
  </nav>
</header>