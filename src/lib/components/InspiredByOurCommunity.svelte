<script>
  import ZoomIn from "lucide-svelte/icons/zoom-in";
  import Fullscreen from "lucide-svelte/icons/fullscreen";
  import * as Card from "../component/ui/carousel/index";
  import * as Carousel from "$lib/component/ui/carousel/index.js";
  import Button from "$lib/component/reusable/Button.svelte";
import  NewCarousel  from "$lib/component/reusable/NewCarousel.svelte";



 

  let isZoomed = false;
  let isFullscreen = false;
  let isShowFullSingleCarousel = false;
  let isSemiFullscreen = false;
  let showImage = false;
  let selectedImage = "";



 
  const images = [
    {
      mid: "/images/inspired/carousel/mid/ugc-aileenvillondo.png",
      lg: "/images/inspired/carousel/lg/ugc-aileenvillondo.png",
      sm: "/images/inspired/carousel/sm/first.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-catlee1010.png",
      lg: "/images/inspired/carousel/lg/ugc-catlee1010.png",
      sm: "/images/inspired/carousel/sm/ugc-eighth.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-edwardtanujayaa.png",
      lg: "/images/inspired/carousel/lg/ugc-edwardtanujayaa.png",
      sm: "/images/inspired/carousel/sm/ugc-eleven.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-edwardtanujayaa2.png",
      lg: "/images/inspired/carousel/lg/ugc-edwardtanujayaa2.png",
      sm: "/images/inspired/carousel/sm/ugc-fifth.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-elicitus.png",
      lg: "/images/inspired/carousel/lg/ugc-elicitus.png",
      sm: "/images/inspired/carousel/sm/ugc-first-nie.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-imbasauce.png",
      lg: "/images/inspired/carousel/lg/ugc-imbasauce.png",
      sm: "/images/inspired/carousel/sm/ugc-fourth.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-infinitypvnk.png",
      lg: "/images/inspired/carousel/lg/ugc-infinitypvnk.png",
      sm: "/images/inspired/carousel/sm/ugc-nie.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-jp.pops.png",
      lg: "/images/inspired/carousel/lg/ugc-jp.pops.png",
      sm: "/images/inspired/carousel/sm/ugc-second.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-philippinooy.png",
      lg: "/images/inspired/carousel/lg/ugc-philippinooy.png",
      sm: "/images/inspired/carousel/sm/ugc-seeventh.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-PNW_Tech.png",
      lg: "/images/inspired/carousel/lg/ugc-PNW_Tech.png",
      sm: "/images/inspired/carousel/sm/ugc-sixth.jpg",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-xciixii.png",
      lg: "/images/inspired/carousel/lg/ugc-xciixii.png",
      sm: "/images/inspired/carousel/sm/ugc-ten.png",
    },
    {
      mid: "/images/inspired/carousel/mid/ugc-agathafeelingg.reads.png",
      lg: "/images/inspired/carousel/lg/ugc-agathafeelingg.reads.png",
      sm: "/images/inspired/carousel/sm/ugc-third.png",
    },
  ];

  // @ts-ignore
  function handleImageClick(image) {
    selectedImage = image.lg;
    showImage = true;
  }

  function closeModal() {
    showImage = false;
    isFullscreen = false;
    isSemiFullscreen = false;
    isShowFullSingleCarousel = false;
  }

  const imageArray = [
    "/images/inspired/partnerships_logo_lolesports.png",
    "/images/inspired/partnerships_logo_valorant_champion-min.png",
    "/images/inspired/partnerships_logo_international-min.png",
    "/images/inspired/partnerships_logo_pglmajor.png",
  ];

</script>

<div class="pt-6 pb-12 border-b border-black">
  <div class="relative">
    <img
      src="/images/inspired/bg-esports.png"
      alt="es-sport"
      class="max-h-[600px] h-[40vh]"
    />

    <div
      class="absolute top-0 flex flex-col mx-auto w-full h-full justify-evenly items-center"
    >
      <div class="w-full flex flex-col justify-center items-center">
        <h2 class="text-white text-2xl text-center md:text-4xl">
          <span class="text-[#C2AD69]">The ultimate performance seat.</span> Trusted
          by champions.
        </h2>
        <p
          class="font-semibold text-white mt-2 mb-6 text-[.8rem] md:text-[1rem]"
        >
          The premier choice for pro-grade comfort on the world stage.
        </p>

        <Button
          text="Learn More"
          icon="MoveRight"
          styles="text-white text-sm uppercase font-semibold"
          text_styles=""
        />
      </div>

      <div class=" grid-cols-2 md:grid-cols-4 justify-items-center grid w-full">
        {#each imageArray as src}
          <img {src} alt="es-sport" class="w-40" />
        {/each}
      </div>
    </div>
  </div>

  
  <div class="text-center mt-16">
    <h2 class="text-4xl font-medium mb-2">
      Get inspired by Secretlab setups from our community
    </h2>

    <p class="text-lg font-medium">
      For a chance to be featured, tag @Secretlab and #Secretlab on Instagram.
    </p>
  </div>
  <div class=" border-b border-black mb-16">
    <div class="w-full my-12">
      <Carousel.Root class="w-full md:max-w-[90%] mx-auto ">
        <Carousel.Content class="  p-0 m-0 w-full">
          {#each images as { lg, mid, sm }, i}
            <Carousel.Item
              class="basis-1/4 lg:basis-1/5 rounded-lg -ml-3 flex cursor-wait"
            >
              <div class=" pr-2">
                <Card.Root>
                  <Card.Content
                    class="flex  aspect-square  items-center justify-center"
                  >
                    <button
                      class="cursor-zoom-in p-0 m-0"
                      on:click={() => handleImageClick({ lg, mid, sm })}
                    >
                      <img
                        src={mid}
                        alt={mid}
                        class="!hidden md:flex rounded p-0 m-0"
                      />
                      <img
                        src={mid}
                        alt={mid}
                        class="!flex md:hidden rounded p-0 m-0"
                      />
                    </button>
                  </Card.Content>
                </Card.Root>
              </div>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <Carousel.Previous
          class="!bg-black rounded-full w-10 h-10 md:ml-2 left-1 z-10"
        />
        <Carousel.Next
          class="!bg-black rounded-full w-10 h-10 md:mr-2 right-1 z-10"
        />
      </Carousel.Root>
    </div>

    {#if isShowFullSingleCarousel}
      <div class="w-full h-screen flex fixed -top-12 bg-black z-[60] my-12">
        <div class="absolute top-4 right-2 flex gap-4">
          <!-- <button
        class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
        on:click={() => {
          console.log("fired isZoomed", isZoomed);

       
          handleImageClick()
        }}
      >
        ⛶
      </button> -->

          <button
            class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
            on:click={() => {
              console.log("fired isZoomed", isZoomed);

              isZoomed = !isZoomed;
            }}
          >
            <ZoomIn />
          </button>

          <button
            class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
            on:click={closeModal}
          >
            ✖
          </button>
        </div>
        <Carousel.Root class="w-full md:max-w-[90%] mx-auto my-auto">
          <Carousel.Content class="  p-0 m-0 w-full ">
            {#each images as { lg, mid, sm }, i}
              <Carousel.Item class="rounded-lg w-screen flex  cursor-wait">
                <div class=" ">
                  <Card.Root>
                    <Card.Content
                      class="flex w-screen  items-center justify-center"
                    >
                      <button
                        class="cursor-zoom-in {isZoomed ? 'scale-150' : ''}"
                        on:click={() => {
                          isZoomed = !isZoomed;
                          handleImageClick({ lg, mid, sm });
                        }}
                      >
                        <img
                          src={mid}
                          alt={mid}
                          class=" rounded p-0 m-0 max-w-[80%] w-screen"
                        />
                      </button>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/each}
          </Carousel.Content>
          <Carousel.Previous
            class="!bg-black rounded-full w-10 h-10 md:ml-2 left-1 z-10"
          />
          <Carousel.Next
            class="!bg-black rounded-full w-10 h-10 md:mr-2 right-1 z-10"
          />
        </Carousel.Root>
      </div>
    {/if}

    {#if showImage}
      <div
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      >
        <div
          class="relative w-full h-full"
          class:fullscreen={isFullscreen}
          class:semi-fullscreen={isSemiFullscreen}
        >
          <img
            src={selectedImage}
            alt="Fullscreen Images"
            class="object-contain w-full h-full {isZoomed
              ? 'scale-150 transition-all delay-300'
              : null}"
          />

          <div class="absolute top-4 right-2 flex gap-4">
            <button
              class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
              on:click={() => {
                console.log("fired isZoomed", isZoomed);

                isShowFullSingleCarousel = !isShowFullSingleCarousel;
              }}
            >
              <Fullscreen />
            </button>

            <button
              class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
              on:click={() => {
                console.log("fired isZoomed", isZoomed);

                isZoomed = !isZoomed;
              }}
            >
              <ZoomIn />
            </button>

            <button
              class=" text-white bg-gray-700 p-2 h-10 w-10 rounded-full"
              on:click={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <div class=" px-6">
    <h2 class="text-3xl font-semibold mb-2">The Secretlab Difference</h2>
    <p class="font-medium mb-16">
      Established in 2014, Secretlab redefined an entire industry and what
      people think of gaming chairs and standing desks.
    </p>

    <div class="hidden gap-4 font-Noto md:flex">
      <div class="bg-[#F2F2F2] p-6 rounded-sm">
        <img
          src="  /images/inspired/icon-difference-chair.png"
          alt="Relentless pursuit of the best"
        />
        <h3 class="font-bold text-xl my-2">
          Relentless pursuit <span class="text-[#BB3338]"> of the best </span>
        </h3>
        <p>
          Led by our founders Ian and Alaric - both former professional gamers -
          we’ve built a team of <span class="font-semibold"
            >world-class specialist designers and engineers</span
          > at Secretlab who work tirelessly in pursuit of the planet’s best performance
          gaming chair and standing desk.
        </p>
      </div>

      <div class="bg-[#F2F2F2] p-6 rounded-sm">
        <img
          src="  /images/inspired/icon-difference-directpricing.png"
          alt="Relentless pursuit of the best"
        />
        <h3 class="font-bold text-xl my-2">
          No middlemen. No unnecessary markups. <span class="text-[#BB3338]"
            >All value for you.</span
          >
        </h3>

        <p>
          We keep your costs down by selling online <span>direct to you</span>.
          An ergonomic chair and standing desk this durable sold
          <span class="font-semibold">without middlemen</span> who are not part of
          our business means you get the maximum value straight from our lab to your
          home. And that’s our guarantee.
        </p>
      </div>

      <div class="bg-[#F2F2F2] p-6 rounded-sm">
        <img
          src="  /images/inspired/icon-difference-ergonomics.png"
          alt="Relentless pursuit of the best"
        />
        <h3 class="font-bold text-xl my-2">
          Purposeful design <span class="text-[#BB3338]"
            >backed by ergonomics.</span
          >
        </h3>

        <p>
          An ergonomic chair <span class="font-semibold">migrates stress</span> from
          tissue to tissue to prevent it from building up at a single point. Every
          feature of our gaming chairs is carefully designed to encourage natural
          movement as you shift in your chair throughout the day, while providing
          full ergonomic support.
        </p>
      </div>
    </div>

    <div class=" ">
 <NewCarousel/>
    </div>
  </div>
</div>

<style>
  .fullscreen {
    width: 100%;
    height: 100%;
  }
  .semi-fullscreen {
    width: 75%;
    height: 75%;
  }
</style>
