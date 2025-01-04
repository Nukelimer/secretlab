<script>
  import Button from "$lib/component/reusable/Button.svelte";
  import {
    Carousel,
    Thumbnails,
    Button as FlowbiteButton,
    Indicator,
  } from "flowbite-svelte";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  let index = 0;
  let forward = true;
  let moveforward = false;
  let moveback = false;
  let image;
  const images = [
    {
      alt: "Arcane",
      text: "In a city divided, make your stand.",
      src: "/images/showoff/lg/home-featured-arcane-lg.png",
      url: "https://secretlab.co/pages/arcane",
      logo: "/images/showoff/logo/arcane.png",
      sm_src: "/images/showoff/sm/arcane.png",
    },
    {
      alt: "Dragon Ball Z",
      text: "Go Super Saiyan.",
      src: "/images/showoff/lg/home-featured-dragonballz-lg.png",
      url: "https://secretlab.co/pages/dragonballz",
      logo: "/images/showoff/logo/dbz.png",
      sm_src: "/images/showoff/sm/dragonballz.png",
    },

    {
      alt: "Lamborghini",
      text: "Own a piece of the ultimate trill.",
      src: "/images/showoff/lg/home-featured-lb-edition-lg.png",
      url: "https://secretlab.co/pages/automobili-lamborghini",
      logo: "/images/showoff/logo/lb.png",
      sm_src: "/images/showoff/sm/lb-edition.png",
    },

    {
      alt: "Head the Crystal's Call.",
      text: "Head the Crystal's Call.",
      src: "/images/showoff/lg/ffxiv-home-feature-lg.png",
      url: "https://secretlab.co/collections/promotions",
      logo: "/images/showoff/logo/ffxiv.png",
      sm_src: "/images/showoff/sm/ffxiv.png",
    },

    {
      alt: "Warhammer",
      text: "Wear the Armor of the Adeptus",
      src: "/images/showoff/lg/home-featured-warhammer-lg.png",
      url: "https://secretlab.co/pages/warhammer40000",

      logo: "/images/showoff/logo/warharmmer.png",
      sm_src: "/images/showoff/sm/warharmmer.png",
    },
    {
      alt: "Demon Slayer Hashira Collection",
      text: "Join the Demon Slayer Corps. Protect humanity from demonkind.",
      src: "/images/showoff/lg/ds-logo-demonslayer-hashira-collection.png",
      url: "https://secretlab.co/pages/demonslayer",
      logo: "/images/showoff/logo/demonslayer.png",
      sm_src: "/images/showoff/sm/demonslayer.png",
    },

    {
      alt: "Monster Hunter",
      text: "Never leave for a hunt without the right gear.",
      src: "/images/showoff/lg/home-featured-monthunt-lg.png",
      url: "https://secretlab.co/pages/monsterhunter",
      logo: "/images/showoff/logo/monster.png",
      sm_src: "/images/showoff/sm/monthunt.png",
    },

    {
      alt: "Overwatch",
      text: "Unleash the hero within",
      src: "/images/showoff/lg/home-featured-overwatch-lg.png",
      url: "https://secretlab.co/collections/promotions",
      logo: "/images/showoff/logo/overwatch.png",
      sm_src: "/images/showoff/sm/overwatch.png",
    },
    {
      alt: "Oracle Red Bull Racing",
      text: "Keep your foot on the pedal.",
      src: "/images/showoff/lg/home-featured-orbr-lg.png",
      url: "https://secretlab.co/pages/oracleredbullracing",
      logo: "/images/showoff/logo/orbr.png",
      sm_src: "/images/showoff/sm/orb.png",
    },

    {
      alt: "Jujutsu Kaisen",
      text: "Create your own domain.",
      src: "/images/showoff/lg/home-featured-jjk-lg.png",
      url: "https://secretlab.co/pages/jujutsukaisen",
      logo: "/images/showoff/logo/jjk.png",
      sm_src: "/images/showoff/sm/jjk.png",
    },

    {
      alt: "VALORANT REYNA JETT",
      text: "Everything you need for the Road for Radiant.",
      src: "/images/showoff/lg/home-featured-VALORANTREYNAJETT-lg.png",
      url: "https://secretlab.co/pages/valorant",
      logo: "/images/showoff/logo/VALORANT.png",
      sm_src: "/images/showoff/sm/VALORANT.png",
    },

    {
      alt: "Diablo IV",
      text: "Gear up for the enternal conflict.",
      src: "/images/showoff/lg/home-featured-diabloiv-lg.png",
      url: "https://secretlab.co/pages/diabloiv",
      logo: "/images/showoff/logo/diabloiv.png",
      sm_src: "/images/showoff/sm/diabloiv.png",
    },
    {
      alt: "Deadmau5",
      text: "Feel every drop of the beat.",
      src: "/images/showoff/lg/home-featured-deadmau5-lg.png",
      url: "https://secretlab.co/pages/deadmau5",
      logo: "Deadmau5",
      sm_src: "/images/showoff/sm/deadmau5.png",
    },

    {
      alt: "Walk the path of the Shinobi.",
      text: "Walk the path of the Shinobi.",
      src: "/images/showoff/lg/home-featured-naruto-lg.png",
      url: "https://secretlab.co/pages/naruto",
      logo: "/images/showoff/logo/naruto.png",
      sm_src: "/images/showoff/sm/naruto.png",
    },

    {
      alt: "Assassin's Creed",
      text: "Bear the insignia of the Assassin and honor the Creed in award winning comfort.",
      src: "/images/showoff/lg/home-featured-AC-lg.png",
      url: "https://secretlab.co/pages/assassinscreed",
      logo: "/images/showoff/logo/AC.png",
      sm_src: "/images/showoff/sm/AC.png",
    },

    {
      alt: "DC",
      text: "Superhero, or villian? Make your choice with the Secretlab DC Collection.",
      src: "/images/showoff/lg/home-featured-dc-lg-min.png",
      url: "https://secretlab.co/pages/dc",
      logo: "/images/showoff/logo/dc.png",
      sm_src: "/images/showoff/sm/superhero-dc.png",
    },

    {
      alt: "Harry Potter",
      text: "Step back into the wizarding world.",
      src: "/images/showoff/lg/home-featured-harrypotter-lg-min.png",
      url: "https://secretlab.co/pages/harrypotter",
      logo: "/images/showoff/logo/harrypotter.png",
      sm_src: "/images/showoff/sm/harrypotter.png",
    },

    {
      alt: "League of Legend",
      text: "Choose your champion.",
      src: "/images/showoff/lg/home-featured-lol2-lg-min.png",
      url: "https://secretlab.co/pages/leagueoflegends",
      logo: "/images/showoff/logo/lol.png",
      sm_src: "/images/showoff/sm/lol.png",
    },

    {
      alt: "Softweave  ",
      text: "Work, play and create in comfort.",
      src: "/images/showoff/lg/home-featured-softweave-lg-min-2.png",
      url: "https://secretlab.co/pages/softweave",
      logo: "Softweave &#8482; Plus",
      sm_src: "/images/showoff/sm/softweave.png",
    },

    {
      alt: "Cyberpunk",
      text: "Gear up and take on the gangs of the Night City.",
      src: "/images/showoff/lg/home-featured-cyberpunk-lg-min.png",
      url: "https://secretlab.co/pages/cyberpunk2077",
      logo: "/images/showoff/logo/cyberpunk.png",
      sm_src: "/images/showoff/sm/cyberpunk.png",
    },
    {
      alt: "Minecraft",
      text: "Gather the mobs.",
      src: "/images/showoff/lg/home-featured-minecraft-lg.png",
      url: "https://secretlab.co/pages/minecraft",
      logo: "/images/showoff/logo/minecraft.png",
      sm_src: "/images/showoff/sm/minecraft.png",
    },

    {
      alt: "GOT",
      text: "A seat fit for the Lord of the Seven Kingdoms.",
      src: "/images/showoff/lg/home-featured-got-lg-min.png",
      url: "https://secretlab.co/pages/gameofthrones",
      logo: "/images/showoff/logo/GOT.png",
      sm_src: "/images/showoff/sm/GOT.png",
    },
  ];
</script>

<div class="mt-16 mb-0">
  <h3 class="text-center text-3xl font-semibold mb-3">
    Show off who you really are
  </h3>
  <p class="text-center text">
    Stand out with designs inspired by your favorite games, shows, superheroes,
    and more. With a unique seat for every personality, express yourself without
    ever compromising on performance.
  </p>
  <Button
    text="View All Partnerships"
    icon="MoveRight"
    styles=" font-bold justify-center uppercase items-center mt-6"
    text_size="sm"
  />
</div>
<!-- Large Screen-->
<div
  class="max-w-full my-7 space-y-4 relative hidden md:flex justify-center item-center flex-col"
>
  <Carousel
    disableSwipe={false}
    {images}
    {forward}
    let:Indicators
    let:Controls
    bind:index
    imgClass="h-full "
    class="h-full min-h-[600px] lg:min-h-[800px]   relative "
    on:change={({ detail }) => {
      console.log(detail);

      image = detail;
    }}
  >
    <a
      slot="slide"
      href={images[index]?.url}
      target="_blank"
      let:Slide
      let:index
      class=" relative h-[600px] lg:h-[800px] border-2 w-[100%]"
    >
      <Slide image={images[index]} class=" " />

      <div
        class="absolute bottom-20 flex items-center flex-col justify-between w-full"
      >
        {#if images[index].logo == "Softweave &#8482; Plus"}
          <h2
            class="text-white font-bold text-6xl items-center justify-center mb-4 flex text-center"
          >
            <span class="flex font-mono leading-[1.1] font-light"
              >Softweave</span
            > &#8482; Plus
          </h2>
        {:else if images[index].logo == "Deadmau5"}
          <h2 class="text-white font-bold text-6xl text-center mb-4">
            Deadmau5
          </h2>
        {:else}
          <img
            class="max-w-[calc(90px + 2vw)] w-44 m-auto justify-self-center"
            src={images[index].logo}
            alt={images[index].alt}
          />
        {/if}

        <!-- Slide Text -->
        <p class="text-center w-full text-white font-Noto font-medium">
          {images[index]?.text}
        </p>

        <!-- Button -->
        <Button
          text="Learn More"
          styles="text-white text-sm font-bold uppercase flex mx-auto mt-4"
          text_styles="text-white "
          icon="MoveRight"
        />
      </div>
    </a>
    <Controls let:changeSlide>
      <FlowbiteButton
        onmouseenter={() => (moveback = true)}
        onmouseleave={() => (moveback = false)}
        pill
        class="p-2 z-10 absolute top-1/2  -translate-y-1/2 start-4 font-bold"
        on:click={() => changeSlide(false)}
        ><ChevronLeft
          size="60"
          class={moveback
            ? "-translate-x-4 mt-[2px] transition-all delay-300 "
            : "ml-0 mt-[2px]"}
        />
      </FlowbiteButton>

      <FlowbiteButton
        onmouseenter={() => (moveforward = true)}
        onmouseleave={() => (moveforward = false)}
        pill
        class="p-2 z-10 absolute top-1/2 -translate-y-1/2 end-4 font-bold"
        on:click={() => changeSlide(true)}
        ><ChevronRight
          size="60"
          class={moveforward
            ? "translate-x-4 mt-[2px] transition-all delay-300 "
            : "ml-0 mt-[2px]"}
        />
      </FlowbiteButton>
    </Controls>

    <Indicators let:selected let:index>
      <Indicator
        color={selected ? "gray" : "dark"}
        class="w-2 h-2 text-white border border-white {selected
          ? 'opacity-100'
          : 'opacity-80'}"
      ></Indicator>
    </Indicators>
  </Carousel>
</div>

<div class="flex flex-row md:hidden h-[500px] w-full overflow-scroll mt-6">
  {#each images as { alt, logo, sm_src, text, url }}
    <a
      href={url}
      class="max-h-full flex flex-col flex-shrink-0 w-full h-full pr-4 relative"
    >
      <div
        class="absolute bottom-20 flex items-center flex-col justify-between w-full"
      >
        {#if logo == "Softweave &#8482; Plus"}
          <h2
            class="text-white font-bold text-3xl items-center justify-center mb-4 flex text-center"
          >
            <span class="flex font-mono leading-[1.1] font-light"
              >Softweave</span
            > &#8482; Plus
          </h2>
        {:else if logo == "Deadmau5"}
          <h2 class="text-white font-bold text-3xl text-center mb-4">
            Deadmau5
          </h2>
        {:else}
          <img
            class="max-w-[calc(90px + 2vw)] w-44 max-h-24 m-auto object-scale-down"
            src={logo}
            {alt}
          />
        {/if}

        <!-- Slide Text -->
        <p class="text-center w-full text-white font-Noto font-medium">
          {images[index]?.text}
        </p>

        <!-- Button -->
        <Button
          text="Learn More"
          styles="text-white text-sm font-bold uppercase flex mx-auto mt-4"
          text_styles="text-white "
          icon="MoveRight"
        />
      </div>
      <img
        src={sm_src}
        {alt}
        class="block w-full h-full object-cover rounded-md mx-4"
      />
    </a>
  {/each}
</div>
