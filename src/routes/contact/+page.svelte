<script>
  import Icon from '@iconify/svelte';
</script>

<main>
  <!-- hero section -->
  <div class="grid grid-cols-3 grid-rows-2 ">
    <!--hero section image-->
    <img src='images/gallery/gallery-photo-2.jpg' alt='studio choreography' class="col-span-full col-start-1 row-start-1 row-span-full w-screen h-[600px] m-auto object-fill">
  
    <!--hero section title-->
    <div class="h-max-[60%] z-10 bg-secondary-100 col-start-2 row-start-2 row-span-full text-slate-50 self-end p-4 overflow-hidden m-auto relative mt-[-270px]">
      <h1 class="ml-[-17px] text-4xl pb-2 text-center font-bold">CONTACT INFO</h1>
    </div>
  </div>
</main>

<!--Contact Forms-->
<section class="flex w-full min-h-screen justify-center items-center mt-[30px] p-8">
  <div class="flex flex-col space-y-6 bg-pink-400 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
    
    <div class="lg:flex flex-col space-y-8 justify-between">
      <div>
        <h2 class="font-bold text-4xl tracking-wide">Contact Me</h2>
        <h3 class="pt-2 text-md text-xl">Whether you have general or specific questions, inquire here!</h3>
      </div>
      
      <!--Phone Number-->
      <div class="flex gap-4">
        <Icon icon="ph:phone-light" width="30" />
        <span>Toll Free: 1-877-5-DANCE-5</span>
      </div>
      
      <!--Email-->
      <div class="lg:flex gap-4">
        <Icon icon="ic:outline-email" width="30" />
        <span>commongrounddance@gmail.com</span>
      </div>

      <!--Location-->
      <div class="flex gap-4">
        <Icon icon="mdi:location" width="30" />
        <span>Calgary, AB</span>
      </div>

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
      
      <!--Contact Form Inputs-->
      <div class="bg-white rounded-xl shadow-lg p-8 text-black">
        <form action="" class="flex flex-col space-y-4">
          <!--Name Input-->
          <div>
            <label for="">Name</label>
            <input type="text" placeholder="Name" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-600 mt-2">
          </div>

          <!--Email Input-->
          <div>
            <label for="">Email</label>
            <input type="text" placeholder="Email" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-600 mt-2">
          </div>

          <!--Message Input-->
          <div>
            <label for="">Message</label>
            <textarea placeholder="Message" rows="5" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-600 mt-2"></textarea>
          </div>

          <!--Submit Button-->
          <button class="inline-block self-end bg-pink-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Submit</button>

        </form>

      </div>
    <div>
</section>

<style>
  h1 {
    font-family: 'Khand';
  }
</style>