<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  import Card from "./Card.svelte";

  let swiper = null;
  let active_Index = 0;

  const cards = [
    {
      img: "/images/review/one-of-the-best.png",
      id: 1,
      title: "One of my best purchase ever",
      description:
        "This product is amazing. Packaging is of high-quality, the materials are of high-quality too. I don't recall having back problems anymore eversince using this product. Highly recommended.",
      continue_reading: "",
      name: "Reyel B",
      country: "Australia",
    },

    {
      img: "/images/review/excellent-chair.png",
      id: 2,
      title: "Excellent chair really helping with my bad back",
      description:
        "I am super happy with my purchase. I was upgrading from a high end gaming chair without adjustable lumbar support. This new Secretlab chair has helpled loads with this. Used for work all day and then a few hours or gaming each evening. Love the magnetic cushion too.",
      continue_reading: "",
      name: "Nyssa A.",
      country: "United Kingdom",
    },
    {
      img: "/images/review/the-best.png",
      id: 3,
      title: "The best!",
      description:
        'At the beginning I was a little hesitant and skietic about spending so much for a "gaming" chair. But after almost a month I can say that it was a good investment, thanks also to the lumbar support, it is possible to spend hours and hours maintaining an ergonomic position that does not create back pain. Plus the magnetic pillow is an excellent extra and very very comfortable. The quality of the materials is very good and you can see the quality of the brand in every well-groomed and finished detail.',
      continue_reading: "",
      name: "Vasile A.",
      country: "Europe",
    },
    {
      img: "/images/review/first-ever.png",
      id: 4,
      title: "First ever Gaming Chair",
      description:
        "Been reading and watching reviews on Secretlab Chair. Waited the right time to get the latest version and it paid off! Loving the chair while working and when playing :)",
      continue_reading: "",
      name: "Naz M.",
      country: "Australia",
    },
    {
      img: "/images/review/secret-lab-titan.png",
      id: 5,
      title: "Secretlab TITAN Evo [small] Chair",
      description:
        "I love this seat, the compression of the head pillow is amazing and it is already helping fix my posture.",
      continue_reading: "",
      name: "Leanne A.",
      country: "Australia",
    },
    {
      img: "/images/review/so-solid.png",
      id: 6,
      title: "So solid. I approve.",
      description:
        "A solid built chair that I really enjoy using. Everything just feels very premium, not to mention the usage of sexy magnets on the pillow and the arm rests. My most beloved feature is the 165-degree recline, perfect for that quick snooze after lunch!",
      continue_reading: "",
      name: "Kalvert Y.",
      country: "Singapore",
    },
    {
      img: "/images/review/ex-last.png",
      id: 7,
      title: "Excellent chair!",
      description:
        "It is the best chair I have ever sit on it. It is what you expect from a 500$ chair.",
      continue_reading: "",
      name: "Efastathios K.",
      country: "Europe",
    },
    {
      img: "/images/review/stealth-home.png",
      id: 8,
      title: "Stealth home office",
      description:
        "Fantastic table and chair. Blown away by the attention to detail and craftsmanship.",
      continue_reading: "",
      name: "Marc C.",
      country: "United Kingdom",
    },
    {
      img: "/images/review/hq-chair.png",
      id: 9,
      title: "High quality chair",
      description:
        "I already had a gamer chair, AKRACING and the coating was pealing, along with the padding basically shot, it was an decent chair. I got the Secretlab as reviews said it was great, once I got mine and unboxed it, I was shocked at the quality of packaging it came in, along side what was a high quality chair, I have the fabric version as its hot in my area, and the material is VERY thick and strong, minor details everywhere and the lumber support is VERY good, I used a lumber pillow on my old chair, this chair doesn't need a lumbar pillow, inbuilt adjustments I have it set perfect! the top pillow is magnetic! These chairs cost a lot and I was worried it was all because of the big name, NO this chair is QUALITY.",
      continue_reading: "",
      name: "Nathan.",
      country: "Australia",
    },
    {
      img: "/images/review/b-c-had.png",
      id: 10,
      title: "Best chair I've Had",
      description:
        "This is chair is very comfortable and easy to build and use. I love the magnetic cushion for my head.",
      continue_reading: "",
      name: "Elliot D.",
      country: "United Kingdom",
    },
    {
      img: "/images/review/B-C-Rachel.png",
      id: 11,
      title: "Best chair ever",
      description:
        "After many months of contemplation, I’ve finally thrown in the towel and went ahead to purchase my very first gaming chair - Secretlab Titan Evo 2022. This chair has helped me a lot in my sitting posture with its built in lumbar support and its flexibility to adjust the backrest. Best investment ever and my only regret was not purchasing it earlier.",
      continue_reading: "",
      name: "Rachel T.",
      country: "Singapore",
    },
    {
      img: "/images/review/origfinal-Titan.png",
      id: 12,
      title: "Original TITAN XL to TITAN Evo",
      description:
        "Had the original Titan XL and was hesitant at first to upgrade to the 2022 version but I'm so glad I did. The leather seems softer than the original model (never had the 2020 model so I'm not sure with that one). The arm rests are also much more comfortable than the original. The lumbar system is definitely much better. The magnetic head pillow is a game changer than the original. Overall, everything seems and feels more refined. It's like upgrading an already great product to an even better product. It's definitely a step to the right direction. Thank you Secretlab!",
      continue_reading: "",
      name: "Adam G.",
      country: "Singapore",
    },
    {
      img: "/images/review/g-g-c.png",
      id: 13,
      title: "Great gaming chair",
      description:
        "Overall this is been an excellent purchase. My previous chair was about 6 years old now and thought it was time to upgrade, so i took the plunge and went with Secretlab and their Titan Evo 2022 model.",
      continue_reading: "",
      name: "William W.",
      country: "United Kingdom",
    },
    {
      img: "/images/review/a-c-4-dad.png",
      id: 14,
      title: "Awesome Chair for Dads!",
      description:
        "Overall this is been an excellent purchase. My previous chair was about 6 years old now and thought it was time to upgrade, so i took the plunge and went with Secretlab and their Titan Evo 2022 model.",
      continue_reading: "",
      name: "Marvin C.",
      country: "United Kingdom",
    },
    {
      img: "/images/review/comfortable.png",
      id: 15,
      title: "Comfortable!",
      description:
        "I love the built-in lumbar support feature - haven't had any back pain since I started using the Titan Evo! And it doesn't hurt that it comes in a lovely mint green color to match my PC case :3",
      continue_reading: "",
      name: "Simone A.",
      country: "Singapore",
    },
    {
      img: "/images/review/t-a-c.png",
      id: 16,
      title: "Truly Amazing Chair",
      description:
        "For the amount of hours I spend sitting being a gamer, although the chair is expensive it is 100% worth it. It is much more sturdy and well constructed than my previous DXRacer, easy to build and very comfortable to use. 10/10.",
      continue_reading: "",
      name: "Jaime G.",
      country: "Europe",
    },
    {
      img: "/images/review/softweave.png",
      id: 17,
      title:
        "Secretlab TITAN Evo - Regular - Secretlab SoftWeave™ Plus Fabric",
      description:
        "Excellent chair! Fabric feels better after 2 weeks of usage, lumbar support keeps my lower back in check after hours and hours of sitting.",
      continue_reading: "",
      name: "Justin S.",
      country: "Singapore",
    },

    {
      img: "/images/review/the-best-18.png",
      id: 18,
      title: "The Best!",
      description:
        "Bought this chair after my partner purchased his and both of us were in amazement at how good this chair actually is. Very comfortable and soft and definitely worth every penny that I paid.",
      continue_reading: "",
      name: "April G..",
      country: "United Kingdom",
    },
  ];

  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

    }
    return array;
  }
  function stripCards(card) {
    const shuffleCard = shuffleCards(card);
    return shuffleCard.slice(0, 7);
  }

  const randomCards = stripCards(cards);

  console.log(randomCards);

  onMount(() => {
    swiper = new Swiper(".swiper-container ", {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      on: {
        slideChange: () => {
          // @ts-ignore
          active_Index = swiper.realIndex;
        },
      },
    });
  });

  // @ts-ignore
  function goToSlide(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }
</script>

<div class="relative my-16">
  <div
    class="absolute top-0 bottom-0 left-0 w-10 md:w-64 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
  ></div>
  <div class="swiper-container w-full pt -5">
    <div class="swiper-wrapper cursor-pointer">
      {#each randomCards as card, index}
        <Card {card} index={card} />
      {/each}
    </div>
  </div>
  <div
    class="absolute top-0 bottom-0 right-0 w-10 md:w-80 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
  ></div>

  <div class="indicators flex justify-center items-center mt-5 gap-2">
    {#each randomCards as x, index}
      <button
        class="indicator w-12 h-[2px] rounded"
        class:active={index === active_Index}
        on:click={() => goToSlide(index)}
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>
</div>

<style>
  .indicator {
    background-color: rgb(59, 58, 58);
    margin-top: 2em;
    cursor: pointer;
    transition:
      background-color 0.9s,
      border-color 0.3s;
  }

  .indicator.active {
    background-color: #bb3338;
    border-color: #bb3338;
    height: 4px;
  }

  .swiper-container {
    position: relative;
    overflow: hidden;
  }

  .swiper-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
</style>
