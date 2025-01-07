<script>
  import { Button } from "$lib/component/ui/button/index.js";
  import { Input } from "$lib/component/ui/input/index.js";
</script>

<div class=" pt-20 pb-8 px-16 w-full text-center">
  <h2 class="text-3xl font-semibold mb-4">Be the first to know</h2>
  <p class="text-xl">
    Subscribe to our mailing list and be the first to know about all the latest
    news, deals and product care tips!
  </p>

  <div class="flex w-full">
    <form class="flex w-full max-w-md mx-auto items-center space-x-2 mt-12">
      <Input
        type="email"
        placeholder="Enter your email"
        class="rounded-3xl border-2 border-black"
      />
      <Button type="submit" class="rounded-3xl bg-[#C41A25] px-8"
        >Subscribe</Button
      >
    </form>
  </div>

  
</div>
<div class="hidden lg:flex flex-col  relative">
   
 <img
      src="/images/FAQ/home-newsletter_chairs-min.png"
      alt="images"
      class=" bg-contain w-fit max-w-2xl flex mx-auto z-20 relative translate-y-28 bottom-0"
    />

    <div class="w-full slanted-div relative">

      
    </div>

  </div>

<style>
  .slanted-div {
    position: relative;
    background-color: #E0E0E0; 
    height: 150px;
    clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
    z-index: 1;
    overflow: hidden;
  }


</style>
