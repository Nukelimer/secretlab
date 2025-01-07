<script>
// @ts-nocheck

    import ChevronLeft from "lucide-svelte/icons/chevron-left";
    import ChevronRight from "lucide-svelte/icons/chevron-right";

  // @ts-nocheck

  const heroData = [
    {
      path: "/video_chrismas.mp4",
      banner: false,
      header: "Christmas Sale",
      body: "Tis the season to treat yourself",
      btn: ["Shop sale", `https://google.com`],
    },
    {
      path: "/titan.webm",
      banner: false,
      header: "TITAN Evo",
      body: "Award-winning ergonomic comfort. Engineered to support your every move",
      btn: ["Shop sale", `https://google.com`],
    },
    {
      path: "/magnus.webm",
      banner: false,
      header: "MAGNUS Pro",
      body: "Our flagship sit-to-stand desk. Made for best-in-class cable management.",
      btn: ["Shop Now", `https://google.com`],
    },
    {
      path: "nanogen.webm",
      banner: true,
      header: "Secret TITAN Evo NanoGen ™ Edition",
      body: "Next Generation materials. Now on our flagship chair",
      btn: ["Learn More", `https://google.com`],
    },
  ];

  let currentIndex = 0;
  let nextIndex = (currentIndex + 1) % heroData.length;
  // @ts-ignore
  let progressBars = [];


  function updateProgress() {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      const progress = (videoElement.currentTime / videoElement.duration) * 100;
      // @ts-ignore
      const allProgressBars = document.querySelectorAll(
        ".progress-bar .progress-fill",
      );
      const activeProgressBar = document.querySelector(
        `.progress-bar[data-index="${currentIndex}"] .progress-fill`,
      );
      if (activeProgressBar) {
        // @ts-ignore
        activeProgressBar.style.width = `${progress}%`;
      }
    }

    updateProgress2();
  }

  function updateProgress2() {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      const progress = (videoElement.currentTime / videoElement.duration) * 100;
      // @ts-ignore
      const allProgressBars = document.querySelectorAll(
        ".progress-bar2 .progress-fill2",
      );

      const activeProgressBar = document.querySelector(
        `.progress-bar2[data-index="${currentIndex}"] .progress-fill2`,
      );
      if (activeProgressBar) {
        // @ts-ignore
        activeProgressBar.style.width = `${progress}%`;
        // @ts-ignore
        activeProgressBar.style.backgroundColor = `linear-gradient(to right, white ${progress}%, red ${progress}%)`;
      }
    }
  }

  function handleVideoEnded() {
    currentIndex = nextIndex;
    nextIndex = (currentIndex + 1) % heroData.length;
    const videoElement = document.querySelector("video");
    // @ts-ignore
    videoElement.src = heroData[currentIndex].path;
    // @ts-ignore
    videoElement.play();
    updateProgress();
    updateProgress2();
  }

  function onMount() {
    // @ts-ignore
    progressBars = document.querySelectorAll(".progress-fill");
  }
</script>

<div
  class="flex flex-col mt-24 justify-center items-center h-[400px] md:h-[800px] md:min-h-[750px] relative"
  on:mount={onMount}
>
  <video
    src={heroData[currentIndex].path}
    autoplay
    muted
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
    on:ended={handleVideoEnded}
    on:timeupdate={updateProgress}
  >
    <track kind="captions" />
  </video>

  <div
    class=" text-white text-center px-4 py-2 md:p-8 absolute w-full bg bottom-0 select-none bg-gradient-to-t to-80% from-black font-Noto h-[45%]  flex flex-col md:hidden   "
  >
    <div
      class="md:max-w-[60%] ml-[9%] -translate-y-20 flex flex-col justify-start items-start"
      class:-translate-y-16={heroData[currentIndex].header.includes("NanoGen")}
      class:-translate-x-1={heroData[currentIndex].header.includes("NanoGen")}
    >
      {#if heroData[currentIndex].banner}
        <h2 class="bg-white w-fit text-black font-mono py-2 px-4 rounded">
          NEW
        </h2>
      {/if}

      <h1
        class="text-2xl sm:text-2xl md:text-4xl font-bold mb-2 text-nowrap"
        class:text-lg={heroData[currentIndex].header.includes("NanoGen")}
      >
        {heroData[currentIndex].header}
      </h1>

      <p class="text-md md:text-lg text-left mb-4">
        {heroData[currentIndex].body}
      </p>
      <a
        href={heroData[currentIndex].btn[1]}
        class=" bg-slate-50 w-fit text-black font-bold py-2 px-4 items-center rounded-3xl
          hover:bg-gradient-to-r hover:from-white hover:to-yellow-200
          transition-all duration-300 cursor-pointer flex item-center"
      >
        {heroData[currentIndex].btn[0]}
      </a>
    </div>
  </div>
















  

  <!-- Here Big Screen -->
  <div
    class="hidden md:flex font-Noto border-[#52525B] border progress-bars lg:flex absolute bottom-3 space-x-2 justify-center w-[80%] py-2 px-4 rounded-3xl bg-[#18181B]  z-20 items-center"
  >

  <ChevronLeft color='#52525B' size='20' class='mr-2'/>
    {#each heroData as item, i}
      <p
        class="h-fit flex flex-col flex-1 overflow-hidden progress-bar"
        data-index={i}
      >
        <span class="block h-fit bg-[#18181B] text-[.6em] text-white relative"
          >{item.header}
          {#if item.header.includes("NanoGen")}
            <span class="absolute bg-white w-fit ml-1 text-black font-mono py- px-2 rounded">
              NEW
            </span>
          {/if}
        </span>
        {#if i == currentIndex}
          <span
            class="block h-[3px] mt-4 w-4/6 rounded-full bg-white progress-fill"
          ></span>
        {/if}
      </p>
    {/each}

     <ChevronRight color='#52525B' size='20' class='ml-2'/>
  </div>

  <div
    class="hidden md:flex font-Noto border-none border progress-bar2 lg:hidden absolute bottom-3 space-x-2 justify-center w-[80%] py-6 px-4 rounded-3xl  z-[99999] items-center"
  >
    {#each heroData as item, i}
      <p
        class="h-fit flex flex-col flex-1 overflow-hidden progress-bar2"
        data-index={i}
      >
        <span class="block h-fit bg-[white] text-white"
          >{!item.header.length > 10 ? item.header.slice(0, 17) + "..." : ""}
          {#if item.header.includes("Nanogen")}
            <span class="!bg-white w-fit font-mono py-2 px-4 rounded">
              NEW
            </span>
          {/if}
        </span>
        <span
          class="block h-[3px] mt-4 w-4/6 rounded-full bg-white progress-fill2"
        ></span>
      </p>
    {/each}
  </div>
</div>
