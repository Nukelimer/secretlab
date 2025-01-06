<script>
  import MoveRight from "lucide-svelte/icons/move-right";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
    import Button from "$lib/component/reusable/Button.svelte";
  let moveforward = false;


  const detailsData = [
    {
      title: "Go from work to play and everything in betweens",
      text: "Our ergonomic chairs and desks are built to encourage movement for a more healthful routine. Together with ergonomic consultants and experts in biomechanics, physical therapy, and more, we designed Secretlab TITAN Evo to deliver responsive comfort that moves with you across everything you do. Together with our MAGNUS Pro standing desks, build a setup that lets you switch from work to play without missing a beat.",
      image: "./images/details/work-and-play-titan-evo.png",
      image_left: "./images/details/home-wnp-left.png",
      image_right: "./images/details/home-right.png",
      alt: "The Best Ergonomic Chairs and Desks",
    },
    {
      title:
        "Ergonomic design for today’s gamers, creators, and hybrid workers",
      text: "Our award-winning seats are ergonomically crafted to support you across multiple activities. Because today, no one should buy a chair built for just one task. Whether you’re hosting a meeting or fragging out on the server, feel better than ever with comfort that adapts to you.",
      image: "./images/details/home-page-ergonomics-chair.png",
      imageside: "./images/details/home-page-ergonomics-desk.jpeg",
      alt: "The Best Ergonomic Chairs and Desks",
    },
  ];
</script>

<div class="">
  {#each detailsData as details}
    <div class="flex flex-col items-center justify-center">
      {#if details.image_left}
        <h3 class="text-center font-Noto text-4xl md:text-5xl mt-8 pb-16">
          {details.title}
        </h3>
        <p class="block px-4 text-pretty font-Noto text-lg mt-8 pb-16">
          {details.text}
        </p>

        <div
          class="  relative flex justify-center h-[40em] w-full overflow-hidden"
        >
          <div
            class="absolute z-50 text-white flex justify-evenly w-[90%] top-9 font-Noto"
          >
            <div
              class="flex flex-col text-center"
              role="button"
              tabindex="0"
              onmouseenter={() => (moveforward = true)}
              onmouseleave={() => (moveforward = false)}
            >
              <h3 class="text-3xl font-medium mb-2">Work</h3>
              <span class="flex gap-2"
                >Learn More <MoveRight
                  class={moveforward
                    ? "translate-x-4 mt-[2px] transition-all delay-200 "
                    : "ml-0 mt-[2px]"}
                /></span
              >
            </div>

            <div
              class="flex flex-col text-center"
              role="button"
              tabindex="0"
              onmouseenter={() => (moveforward = true)}
              onmouseleave={() => (moveforward = false)}
            >
              <h3 class="text-3xl font-medium mb-2">Play</h3>
              <span class="flex gap-2"
                >Learn More <MoveRight
                  class={moveforward
                    ? "translate-x-4 mt-[2px] transition-all delay-200"
                    : "ml-0 mt-[2px]"}
                /></span
              >
            </div>
          </div>

          <img
            src={details.image}
            alt={details.alt}
            class="top-0 z-30 h-full absolute"
          />
          <img
            src={details.image_left}
            alt={details.alt}
            class="w-1/2 cursor-pointer transition-all duration-300 hover:brightness-50 hover:scale-105"
          />

          <img
            src={details.image_right}
            alt={details.alt}
            class="w-1/2 cursor-pointer transition-all duration-300 hover:brightness-50 hover:scale-105"
          />
        </div>
      {:else}
        <div class="">
          <h3 class="text-left px-2 font-Noto text-5xl mt-8 pb-16">
            {details.title}
          </h3>
          <p class="text-pretty px-2 font-Noto text-lg mt-8 pb-16">
            {details.text}
          </p>
        </div>

        <div class="flex flex-row item-center justify-center">
          <img
            src={details.imageside}
            alt={details.alt}
            class="hidden md:block md:w-[65%] px-2"
          />
          <img
            src={details.image}
            alt={details.alt}
            class="w-full bg-cover md:w-[35%] px-2"
          />
        </div>
      {/if}
    </div>
  {/each}

  <!-- <div
    class=" flex items-center md:justify-center gap-2 font-medium text-[#A72A2F] font-Noto text-2xl mt-8 pb-16 px-2"
    onmouseenter={() => (rotateElement = true)}
    onmouseleave={() => (rotateElement = false)}
    role="button"
    tabindex="0"
  >
    <p>More Ergonomics</p>
    <CirclePlus
      class={`mt-2 transform transition-transform duration-300 ${
        rotateElement ? "rotate-90" : "rotate-0"
      }`}
    />
  </div>
</div> -->
</div>
<div class="mt-8 pb-8 px-2">

  <Button rotateElement={false} text='More Ergonomic' icon='Circle' />
</div>

<!-- #A72A2F -->
