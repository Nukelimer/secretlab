<script>
  import Carousel from "svelte-carousel";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  const differencesData = [
    {
      heading: "Relentless pursuit",
      heading_span: "of the best",
      body_before:
        "Led by our founders Ian and Alaric - both former professional gamers - we’ve built a team of",
      body: "world-class specialist designers and engineers",
      body_after:
        "at Secretlab who work tirelessly in pursuit of the planet’s best performance gaming chair and standing desk.",
      img: "  /images/inspired/icon-difference-chair.png",
    },
    {
      heading: " No middlemen. No unnecessary markups.",
      heading_span: "All value for you.",
      body_before: " We keep your costs down by selling online",
      body: "direct to you",
      body_after: "An ergonomic chair and standing desk this durable sold",

      sec_body_before: "without middlemen",

      sec_body_after:
        "who are not part of our business means you get the maximum value straight from our lab to your home. And that's our guarantee.",

      img: " /images/inspired/icon-difference-directpricing.png",
    },

    {
      heading: " Purposeful design",
      heading_span: "backed by ergonomics.",
      body_before: " An ergonomic chair",
      body: "migrates stress",
      body_after:
        "from tissue to tissue to prevent it from building up at a single point. Every feature of our gaming chairs is carefully designed to encourage natural movement as you shift in your chair throughout the day, while providing full ergonomic support.",
      img: "  /images/inspired/icon-difference-ergonomics.png",
    },
  ];
  import { onMount } from "svelte";
  let isClient = false;
  onMount(() => {
    isClient = true;
  });
</script>
 <!-- let:showPrevPage
      let:showNextPage
      let:currentPageIndex
      let:pagesCount
      let:showPage -->

<div class=" md:hidden cursor-pointer select-none  ">
  {#if isClient}
    <Carousel
     
    >
      <div slot="prev" class=""></div>
     {#each differencesData as data, index}
  {#if data.sec_body_after === undefined}
    <div class={`bg-[#F2F2F2]  pl-6 pr-14 py-4 rounded mr-6 font-Noto ${index === 0 ? '!ml-0' : ''}`}>
      <img src={data.img} alt={data.img} />
      <h3 class="font-semibold text-lg my-2">
        {data.heading}
        <span class="text-[#BB3338]">{data.heading_span}</span>
      </h3>

      <p class={`mb-6 pr-8 text-sm  text-justify  ${index === 2 ? 'pr-16' : ''}`}>
        {data.body_before} <span class="font-semibold text-sm">{data.body}</span>
        {data.body_after}
      </p>
    </div>
  {:else}
   <div class={`  bg-[#F2F2F2]  pl-6 pr-10 py-4 rounded mr-6 font-Noto `}>
      <img src={data.img} alt={data.img} />
      <h3 class="font-semibold text-lg my-2">
        {data.heading}
        <span class="text-[#BB3338]">{data.heading_span}</span>
      </h3>

      <p class='mb-6 pr-4 text-sm'>
        {data.body_before} <span class="font-semibold text-sm">{data.body}</span>
        {data.body_after} <span class='font-semibold'>{data.sec_body_before}</span> {data.sec_body_after}
      </p>
    </div>
  {/if}
{/each}


      <div slot="next">
        <!-- -->
      </div>
    </Carousel>
  {/if}
</div>
