<script>
  import Button from "$lib/component/reusable/Button.svelte";
  import {
    Carousel,
    Thumbnails,
    Button as FlowbiteButton,
    Indicator,
  } from "flowbite-svelte";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  let index = 0;
  let forward = true;
  let image;
  const images = [
    {
      alt: "Arcane",
      text: "In a city divided, make your stand.",
      src: "/images/showoff/lg/home-featured-arcane-lg.png",
      url: "https://secretlab.co/pages/arcane",
    },
    {
      alt: "Dragon Ball Z",
      text: "Go Super Saiyan.",
      src: "/images/showoff/lg/home-featured-dragonballz-lg.png",
      url: "https://secretlab.co/pages/dragonballz",
    },

    {
      alt: "Lamborghini",
      text: "Own a piece of the ultimate trill.",
      src: "/images/showoff/lg/home-featured-lb-edition-lg.png",
      url: "https://secretlab.co/pages/automobili-lamborghini",
    },

    {
      alt: "Head the Crystal's Call.",
      text: "Head the Crystal's Call.",
      src: "/images/showoff/lg/ffxiv-home-feature-lg.png",
      url: "https://example.com/ffxiv-home-feature",
    },

    {
      alt: "Warhammer",
      text: "Wear the Armor of the Adeptus",
      src: "/images/showoff/lg/home-featured-warhammer-lg.png",
      url: "https://secretlab.co/pages/warhammer40000",
    },
    {
      alt: "Demon Slayer Hashira Collection",
      text: "Join the Demon Slayer Corps. Protect humanity from demonkind.",
      src: "/images/showoff/lg/ds-logo-demonslayer-hashira-collection.png",
      url: "https://secretlab.co/pages/demonslayer",
    },

    {
      alt: "Monster Hunter",
      text: "Never leave for a hunt without the right gear.",
      src: "/images/showoff/lg/home-featured-monthunt-lg.png",
      url: "https://secretlab.co/pages/monsterhunter",
    },

    {
      alt: "Overwatch",
      text: "Unleash the hero within",
      src: "/images/showoff/lg/home-featured-overwatch-lg.png",
      url: "https://example.com/overwatch",
    },
    {
      alt: "Oracle Red Bull Racing",
      text: "Keep your foot on the pedal.",
      src: "/images/showoff/lg/home-featured-orbr-lg.png",
      url: "https://secretlab.co/pages/oracleredbullracing",
    },

    {
      alt: "Jujutsu Kaisen",
      text: "Create your own domain.",
      src: "/images/showoff/lg/home-featured-jjk-lg.png",
      url: "https://secretlab.co/pages/jujutsukaisen",
    },

    {
      alt: "VALORANT REYNA JETT",
      text: "Everything you need for the Road for Radiant.",
      src: "/images/showoff/lg/home-featured-VALORANTREYNAJETT-lg.png",
      url: "https://secretlab.co/pages/valorant",
    },

    {
      alt: "Diablo IV",
      text: "Gear up for the enternal conflict.",
      src: "/images/showoff/lg/home-featured-diabloiv-lg.png",
      url: "https://secretlab.co/pages/diabloiv",
    },
    {
      alt: "Deadmau5",
      text: "Feel every drop of the beat.",
      src: "/images/showoff/lg/home-featured-deadmau5-lg.png",
      url: "https://secretlab.co/pages/deadmau5",
    },

    {
      alt: "Walk the path of the Shinobi.",
      text: "Walk the path of the Shinobi.",
      src: "/images/showoff/lg/home-featured-naruto-lg.png",
      url: "https://secretlab.co/pages/naruto",
    },

    {
      alt: "Assassin's Creed",
      text: "Bear the insignia of the Assassin and honor the Creed in award winning comfort.",
      src: "/images/showoff/lg/home-featured-AC-lg.png",
      url: "https://secretlab.co/pages/assassinscreed",
    },

    {
      alt: "DC",
      text: "Superhero, or villian? Make your choice with the Secretlab DC Collection.",
      src: "/images/showoff/lg/home-featured-dc-lg-min.png",
      url: "https://secretlab.co/pages/dc",
    },

    {
      alt: "Harry Potter",
      text: "Step back into the wizarding world.",
      src: "/images/showoff/lg/home-featured-harrypotter-lg-min.png",
      url: "https://secretlab.co/pages/harrypotter",
    },

    {
      alt: "League of Legend",
      text: "Choose your champion.",
      src: "/images/showoff/lg/home-featured-lol2-lg-min.png",
      url: "https://secretlab.co/pages/leagueoflegends",
    },

    {
      alt: "Softweave",
      text: "Work, play and create in comfort.",
      src: "/images/showoff/lg/home-featured-softweave-lg-min-2.png",
      url: "https://secretlab.co/pages/softweave",
    },

    {
      alt: "Cyberpunk",
      text: "Gear up and take on the gangs of the Night City.",
      src: "/images/showoff/lg/home-featured-cyberpunk-lg-min.png",
      url: "https://secretlab.co/pages/cyberpunk2077",
    },
    {
      alt: "Minecraft",
      text: "Gather the mobs.",
      src: "/images/showoff/lg/home-featured-minecraft-lg.png",
      url: "https://secretlab.co/pages/minecraft",
    },

    {
      alt: "GOT",
      text: "A seat fit for the Lord of the Seven Kingdoms.",
      src: "/images/showoff/lg/home-featured-got-lg-min.png",
      url: "https://secretlab.co/pages/gameofthrones",
    },
  ];
</script>

<div class="">
  <div class="my-16">
    <h3 class="text-center text-3xl font-semibold mb-3">
      Show off who you really are
    </h3>
    <p class="text-center text">
      Stand out with designs inspired by your favorite games, shows,
      superheroes, and more. With a unique seat for every personality, express
      yourself without ever compromising on performance.
    </p>
    <Button
      text="View All Partnerships"
      icon="MoveRight"
      styles=" font-bold justify-center uppercase items-center mt-6"
      text_size="sm"
    />
  </div>

  <div class="max-w-4xl my-7 space-y-4 relative">
    <Carousel
      {images}
      {forward}
      let:Indicators
      let:Controls
      bind:index
      imgClass="h-full"
      class="h-full min-h-[700px]"
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
        class=" relative h-[700px]"
      >
        <Slide image={images[index]} />
      </a>
      <Controls let:changeSlide let:ControlButton>
        <ControlButton
          name="Previous"
          forward={false}
          on:click={() => changeSlide(false)}
          class="bg-red-300/50 dark:bg-red-400/50"
        />
        <FlowbiteButton
          pill
          class="p-2 absolute top-1/2 -translate-y-1/2 end-4 font-bold"
          on:click={() => changeSlide(true)}
          ><ChevronRight size="60" />
        </FlowbiteButton>

       

        
      </Controls>
      
      <p
        class=" absolute text-center w-full text-white font-Noto bottom-20 font-medium"
      >
        {images[index]?.text}
      </p>

      <Indicators />
    </Carousel>
  </div>
</div>
