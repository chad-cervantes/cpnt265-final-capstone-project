<script>
  //Primary Navbar
   const navLinks = [
    {name: 'PROGRAMS', href: '/programs'},
    {name: 'GALLERY', href: '/gallery'},
    {name: 'SCHEDULE', href: '/schedule'},
    {name: 'ABOUT', href: '/about'},
    {name: 'CONTACT', href: '/contact'}
  ];

  import Icon from '@iconify/svelte';

  // For menu toggle
  import AnimatedHamburger from '$lib/components/AnimatedHamburger.svelte';
  import { fly } from 'svelte/transition';

  export let open = false;
  export let onClick = () => {
    open = !open
  }

  import DesktopNav from '$lib/components/DesktopNav.svelte';
  import Logo from './Logo.svelte';
</script>

<!--Primary Nav Links decoration-->
  <header class="bg-violet-400 text-white text-xl flex justify-center w-[auto] h-[auto] p-4">
    <div class="block w-[100px] h-[75px] bg-cover hover:fill-fuchsia-500 ease-linear duration-150 transition">
      <a href='/'>
        <Logo />
     </a>
    </div>
   
    <div class="lg:hidden block">
      <AnimatedHamburger {open} {onClick} />
    </div>
      <DesktopNav />
 
    {#if open}
      <nav transition:fly={{ y: -200, duration:400 }}>
        <ul class="lg:flex text-xl space-x-12 gap-2 p-4 mt-2">
          {#each navLinks as {name, href}}
            <div class="hover:bg-purple-600 rounded-[20px] p-[2px] transition duration-150 ease-linear active:bg-rose-600 px-2 rounded-[20px] lg:hidden">
              <li><a {href}>{name}</a></li>
            </div>
          {/each}  

               <!--Social Media-->
          <div class="flex gap-4 lg:hidden">
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
    {/if}
</header> 
