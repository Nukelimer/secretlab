<script >

  const trustedClientData = [
    {
      image: "images/trusted/c9.png",
    },
    {
      image: "images/trusted/deadmau5.png",
    },
    {
      image: "images/trusted/f0rsaken.png",
    },
    {
      image: "images/trusted/hanszimmer.png",
    },
    {
      image: "images/trusted/t1.png",
    },
    {
      image: "images/trusted/tenz.png",
    },
  ];

  import { Marquee } from "@selemondev/svelte-marquee";
  import "@selemondev/svelte-marquee/dist/style.css";
</script>

<div class=" bg-[#27272A]">
  <h2 class="text-center pt-8 pb-4 text-3xl text-white">
    Trusted by the best in the business
  </h2>
  <Marquee
    Marquee
    class="py-4 motion-reduce:overflow-auto [--duration:60s]"
    innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
  >
    {#each [...trustedClientData, ...trustedClientData] as data, index}
      <img
        src={data.image}
        alt="client {data.image}"
        class="w-80 h-80 object-cover"
        
        style="flex-shrink: 0;"
      />
    {/each}
  </Marquee>

































</div>
<!-- 
<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style> -->
