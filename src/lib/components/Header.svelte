<script>
  //Primary Navbar
   const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'Programs', href: '/'},
    {name: 'Gallery', href: '/'},
    {name: 'Schedule', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'}
  ];

</script>

<!--Primary Nav Links decoration-->
<header class="bg-violet-600 text-white text-xl flex justify-center p-4">
  <div>logo</div>
  <nav>
    <ul class="flex justify-around gap-4">
      {#each navLinks as {name, href}}
        <div class="hover:text-cyan-200 active:text-emerald-500">
          <li><a {href}>{name}</a></li>
        </div>
      {/each}  
    </ul>
  </nav>
</header>