<script>
  import Icon from '@iconify/svelte';
  
  const navLinks = [
    {name: 'PROGRAMS', href: '/programs'},
    {name: 'GALLERY', href: '/gallery'},
    {name: 'SCHEDULE', href: '/schedule'},
    {name: 'ABOUT', href: '/about'},
    {name: 'CONTACT', href: '/contact'}
  ];
</script>

<nav>
  <ul class="lg:flex text-xl space-x-12 gap-2 p-4 mt-2 lg:block hidden">
    {#each navLinks as {name, href}}
      <div class="hover:bg-purple-600 rounded-[20px] p-[5px] transition duration-150 ease-linear active:bg-rose-600 px-2 rounded-[20px]">
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