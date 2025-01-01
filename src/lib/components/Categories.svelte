<script>
// @ts-nocheck

  import MoveRight from "lucide-svelte/icons/move-right";

  let moveforward = false;
  let moveforward2 = false;
 let hoveredCategoryId = null;
  const categories = [
    { id: crypto.randomUUID(),
      productCategory: "Ergonomic Chairs",
      text: "Science-backed comfort built for maximum performance.",
      image: "./images/categories/shop-secretlab-ergonomic-chairs.png",
      url: "https://secretlab.co/collections/ergonomic-chairs",
      learnMore: `Learn More `,
      classCategory: "Ergonomic Chairs",
    },
    { id: crypto.randomUUID(),
      productCategory: "Ergonomic Chairs",
      text: "Science-backed comfort built for maximum performance.",
      image: "./images/categories/shop-secretlab-magnetic-metal-desks.png",
      url: "https://secretlab.co/collections/ergonomic-chairs",
      learnMore: `Learn More `,
      classCategory: "Metal Desks",
    },
    { id: crypto.randomUUID(),
      productCategory: "Ergonomic Chairs",
      text: "Science-backed comfort built for maximum performance.",
      image: "./images/categories/shop-secretlab-accessories.png",
      url: "https://secretlab.co/collections/accessories",
      learnMore: `Learn More `,
      classCategory: "Accessories",
    },
  ];
</script>

<div class=" pt-16 pb-6 bg-slate-50">
  <h3 class="text-center font-Noto text-5xl mt-8 pb-16">
    Build your dream setup today
  </h3>

  <div class="lg:flex flex-row justify-center">
    {#each categories as category}
      <a
        href={category.url}
        class="text-primary-500 mt-2"
        on:mouseenter={() => (hoveredCategoryId = category.id)}
        on:mouseleave={() => (hoveredCategoryId = null)}
       >
        <div class="relative mx-6 my-4 lg:my-0">
          <div
            class="absolute hidden z-30  lg:flex flex-col justify-center items-center top-6 text-center left-1 right-0 text-white "
          >
            <h4 class="text-2xl font-Noto font-semibold">
              {category.productCategory}
            </h4>
            <p class="text-center mt-5">{category.text}</p>
            <span
              class="flex text-center justify-center items-center gap-3 text-lg"
            >
              {category.learnMore}
              <span
                class={`mt-1 text-center uppercase ${
                  hoveredCategoryId == category.id ? "!ml-6 !transition-all !delay-300 " : ""
                }`}
              >
                <MoveRight size="30" /></span
              >
            </span>
          </div>

          <div
            class="absolute lg:hidden text-4xl font-semibold bottom-0 left-0 right-0 bg-primary-500 text-white text-center py-2"
          >
            <p>{category.classCategory}</p>
            <span
              class="flex text-center justify-center items-center gap-3 text-2xl mt-2"
            >
              {category.learnMore}
              <span
                class={`mt-2 text-center ${
                 hoveredCategoryId == category.id ? "!ml-6 !transition-all !delay-300 " : ""
                }`}
              >
                <MoveRight size="40" /></span
              >
            </span>
          </div>
          <div class="w-full my-8 md:my-0 md:max-h-[40rem] md:overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.productCategory}
              class="w-full h-1/3 md:object-cover md:bg-left-top md:hover:scale-110 hover:transition-all hover:duration-&lsqb;1000ms&rsqb; hover:ease-in-out max-h-[40rem] select-none rounded-lg"
            />
          </div>
        </div>
      </a>
    {/each}
  </div>


<a href="https://secretlab.co/collections" class="mr-2 my-4">
<button
  on:mouseenter={() => (moveforward2 = true)}
  on:mouseleave={() => (moveforward2 = false)}
  class="flex justify-center items-center mt-8 uppercase font-Noto font-bold text-white py-2 px-8 rounded-3xl bg-red-700 mx-auto transition-all duration-500"
>
  View All Products
  <MoveRight class={ moveforward2 ? "ml-4  mt-1" : "ml-2 mt-1"} />
</button>
</a>

</div>
