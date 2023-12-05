<script>
  import Icon from '@iconify/svelte';
</script>

<main class="min-h-[110vh]">
  <!-- hero section -->
  <div class="grid grid-cols-3 grid-rows-2 ">
    <img src='images/contact/contact-image-1.jpg' alt='studio choreography' class="col-span-full col-start-1 row-start-1 row-span-full w-screen h-[600px]">
  
    <div class="h-max-[60%] z-10 bg-secondary-100 col-start-2 row-start-2 row-span-full text-slate-50 self-end p-4 overflow-hidden m-auto relative mb-[390px] ml-[-480px]">
      <h3 class="text-4xl pb-2 text-center font-bold">CONTACT INFO</h3>
    </div>
  </div>
<!-- 
  <h1 class="text-[30px] text-center font-bold p-8 mt-[-340px]">ANY QUESTIONS?</h1> -->

</main>

<section class="flex w-full min-h-screen justify-center items-center mt-[-440px]">
  <div class="flex flex-col space-y-6 bg-pink-400 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
    
    <div class="flex flex-col space-y-8 justify-between">
      <div>
        <h1 class="font-bold text-4xl tracking-wide">Contact Me</h1>
        <p class="pt-2 text-md">Whether you have general or specific questions, inquire here!</p>
      </div>
      
      <div class="flex gap-4">
        <Icon icon="ph:phone-light" width="30" />
        <span>Toll Free: 1-877-5-DANCE-5</span>
      </div>
      
      <div class="flex gap-4">
        <Icon icon="ic:outline-email" width="30" />
        <span>commongrounddance@gmail.com</span>
      </div>

      <div class="flex gap-4">
        <Icon icon="mdi:location" width="30" />
        <span>Calgary, AB</span>
      </div>

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
   </div>
 <div>
</section>