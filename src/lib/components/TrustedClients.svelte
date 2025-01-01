<script>
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
  import * as Card from "../component/ui/carousel/index";

  import * as Carousel from "$lib/component/ui/carousel/index.js";
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
  import { Marquee } from "@selemondev/svelte-marquee";
  import "@selemondev/svelte-marquee/dist/style.css";

  import Autoplay from "embla-carousel-autoplay";

 
  const reviews = [
    {
      profile_image: "./images/trusted/avatar/hanszimmer.png",
      review:
        "Now everyone I know has this chair. Each composer close to me has one. Because we've discovered it's",
      sub_review: "phenomenally ergonomic",
      end_review: "for composing music. ",
      name: "Hans Zimmer",
      bio: "Academy Award-winning composer",
    },
    {
      profile_image: "./images/trusted/avatar/t1.png",
      review:
        "Secretlab chairs are an essential part of my performance toolkit, allowing me to focus on what really matters: winning.",
      name: "Lee ‘Faker’ Sang-hyeok",
      bio: "T1 | 5x League of Legends Worlds champion",
    },
    
    {
      profile_image: "./images/trusted/avatar/deadmau5.png",
      review:
        "I’ve had a Secretlab chair with me over the last couple of years, and it’s ",
      name: "Joel 'deadmau5' Zimmerman",
      bio: "Award-winning electronic music producer & DJ",
    },

    {
      profile_image: "./images/trusted/avatar/puppey.png",
      review: "Keeps me ",
      sub_review: "perfectly positioned for peak performance",
      end_review: "so I never have to worry about having the right support.",
      name: "Puppey",
      secondary_bio: "Team Secret Captain",
      bio: "The International 2021 second runner-up",
    },

    {
      profile_image: "./images/trusted/avatar/tenz.png",
      review: "Of all the gaming chairs I’ve tried,",
      sub_review: "nothing is better than a Secretlab chair",
      name: 'Tyson "Tenz" Ngo',
      secondary_bio: "Professional VALORANT Player for Sentinels",
      bio: "MVP of VALORANT Champions Tour 2021 Masters 2 Reykjavik",
    },
  ];
</script>

<div class=" bg-[#27272A] ">
  <h2 class="text-center pt-8 pb-4 text-3xl text-white ">
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

  <div class="">
    <div
      class="flex justify-center items-center max-h-[600px] w-full  mx-auto relative"
    >
      <Carousel.Root
     
        class="  w-full flex  justify-center items-center max-w-[60%] "
    
        opts={{ loop: true }}
      >
        <Carousel.Content class="p-1 ">
          {#each reviews as review}
            {#if review?.sub_review == undefined}
              <Carousel.Item>
                <div>
                  <Card.Root class="">
                    <Card.Content
                      class="flex flex-col aspect-square items-center justify-center p-6 font-Noto "
                    >
                      <p
                        class="text-[#8a8484] text-center text-sm md:text-xl before:content-['”'] after:content-['”']"
                      >
                        {review?.review}
                      </p>
                      <img
                        src={review?.profile_image}
                        alt="company logo"
                        class="rounded-full h-20 w-20"
                      />

                      <p
                        class="text-sm text-white text-center mt-2"
                      >
                        {review?.name}lll
                      </p>

                       <p
                        class="text-sm text-[#8a8484] text-center mt-2"
                      >
                        {review?.bio}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {:else}
              <Carousel.Item>
                <div class="w-full ">
                  <Card.Root class="">
                    <Card.Content
                      class="flex flex-col aspect-square items-center justify-center p-6 font-Noto"
                    >
                      <p
                        class="text-[#fff] text-center text-sm md:text-xl my-4 review-before review-after"
                        data-review={`"${review.review}`}
                        data-end-review={`${review.end_review ? review.end_review: ''}"`}
                      >
                        {""}
                        {review?.sub_review}
                        {""}
                      </p>

                      <img
                        src={review?.profile_image}
                        alt="company logo"
                        class="rounded-full h-20 w-20"
                      />

                      <p class="text-sm text-white text-center mt-2">
                        {review?.name}
                      </p>
                      <p class="text-sm text-[#8a8484] text-center mt-2">
                        {review?.secondary_bio}
                      </p>
                      <p class="text-sm text-[#8a8484] text-center mt-2">
                        {review?.bio}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/if}
          {/each}
        </Carousel.Content>

        <Carousel.Previous />

        <Carousel.Next />
      </Carousel.Root>
    </div>
  </div>
</div>

<style>
  .review-before::before {
    content: attr(data-review);
    color: #8a8484;
  }

  .review-after::after {
    content: attr(data-end-review);
    color: #8a8484;
  }
</style>
