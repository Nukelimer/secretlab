<script>
  import Button from "$lib/component/reusable/Button.svelte";
  import * as Accordion from "$lib/component/ui/accordion";
  import LgAccordion from "./LGAccordion.svelte";
  import MdAccordion from "./MDAccordion.svelte";
  import { browser } from "$app/environment";
  let isLargeScreen = false;

  if (browser) {
    const updateScreenSize = () => {
      isLargeScreen = window.innerWidth >= 1024;
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
  }
</script>

<div class=" border-b-black/50 border pb-28">
  <h1 class="text-3xl text-center pt-16 font-medium">
    Engineering <span class="text-[#C4AD65]">Award-Winning</span> comfort
  </h1>

  {#if isLargeScreen}
    <div class=" pt-12"><LgAccordion /></div>
  {:else}
    <div><MdAccordion /></div>
  {/if}
</div>
