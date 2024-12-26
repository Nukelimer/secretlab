<script>
  import Autoplay from "embla-carousel-autoplay";
  import * as Card from "../component/ui/carousel/index";
  import * as Carousel from "$lib/component/ui/carousel/index.js";

  import Star from "lucide-svelte/icons/star";

  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

  const reviews = [
    {
      logo: "./images/press_logo_techradar.svg",
      review: "It’s the most comfortable chair we've ever used.",
      type: "Best In Class Award",
      url: "https://www.techradar.com/sg/reviews/secretlab-titan-evo-2022",
    },
    {
      logo: "./images/press_logo_businessinsider.svg",
      review: `...I can’t imagine going back to a regular office chair.`,
      type: "",
      url: "https://www.businessinsider.in/i-replaced-my-traditional-office-chair-with-a-360-gaming-chair-and-im-never-going-back/articleshow/69507806.cms",
    },
    {
      logo: "./images/press_logo_t3.svg",
      review: "The best gaming chair just got better.",
      type: "Platinum Award",
      url: "https://www.t3.com/reviews/secretlab-titan-evo-review-2022",
    },
  ];
</script>

<div class="bg-[#35353D] flex justify-center flex-col items-center">
  <p
    class="leading-[1.1] px-4 py-5 text-[1.8em] hidden md:block md:text-[3em] pt-6 text-white font-semibold text-center font-Noto"
  >
    We make the <span class="highlight text-[#D2BD78]"
      >best ergonomic chairs and desks</span
    > in the world
  </p>

  <p
    class="leading-[0.8] font-Noto mt-14 flex md:hidden justify-center items-center gap-2 text-white"
  >
    Great 4.0 out of 5 <Star
      size="28"
      fill="#20B77B"
      class=" p-[1px] flex"
      color="#35353D"
    /> Trustpilot.
  </p>
  <p
    class="hidden mt-4 leading-[0.8] font-Noto md:flex justify-center items-center gap-2 text-white"
  >
    Great <span class="flex items-center"
      ><Star
        size="22"
        fill="white"
        class="bg-green-400 p-[1px]"
        color="green"
      /><Star
        size="22"
        fill="white"
        class="bg-green-400 p-[1px]"
        color="green"
      /><Star
        size="22"
        fill="white"
        class="bg-green-400 p-[1px]"
        color="green"
      /><Star
        size="22"
        fill="white"
        class="bg-green-400 p-[1px]"
        color="green"
      /><Star
        size="22"
        fill="white"
        class="bg-gray-400 p-[1px]"
        color="green"
      /></span
    > 9,682 reviews on Trustpilot
  </p>

  <div class="flex items-center justify-center">
    {#each reviews as review}
     <div
  class="hidden md:flex flex-col items-center justify-center text-center h-full"
>
  <p class="flex flex-col h-full min-h-[305px] items-center justify-center p-6">
    <img src={review.logo} alt="company logo" class="max-h-16 mb-4" />
    <a href={review.url} target="_blank" class="flex flex-col items-center">
      <span class="text-[#D2BD78] uppercase font-bold my-4 block">
        {review.type}
      </span>
      <span
        class="text-sm font-semibold text-white before:content-['“'] after:content-['”']"
      >
        {review.review}
      </span>
    </a>
  </p>
</div>

    {/each}
  </div>

  <div class="flex justify-center items-center w-full md:hidden mx-auto relative  ">
    <Carousel.Root
      plugins={[plugin]}
      class="  w-full flex  justify-center items-center max-w-[60%] "
      on:mouseenter={plugin.stop}
      on:mouseleave={plugin.reset}
      opts={{ loop: true }}
    >
      <Carousel.Content class="p-1 ">
        {#each reviews as review, i}
          <Carousel.Item >
            <div >
              <Card.Root class=''>
                <Card.Content
                  class="flex flex-col aspect-square items-center justify-center p-6"
                >
                  <img src={review.logo} alt="company logo" />
                  <a href={review.url} target="_blank">
                    <p class="text-[#D2BD78] text-center uppercase font-bold my-4">
                      {review.type}
                    </p>
                    <p
                      class="text-sm text-white text-center before:content-['“'] after:content-['”']"
                      >{review.review}</p
                    >
                  </a>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>

      <Carousel.Previous />

      <Carousel.Next />
    </Carousel.Root>
  </div>
</div>
