<script>
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  const text = [
    'Free shipping on selected products',
    'Up to $139 OFF select products',
    'Up to additional $124 * OFF bundles'
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % text.length; // Cycle through the array
    }, 5000);

    return () => clearInterval(interval); 
  });
</script>

<section class="bg-[#BB3338] h-14 flex justify-center items-center overflow-hidden">
  {#key currentIndex}
    <p
      class="font-Noto text-white text-center text-lg animate-pulse"
      in:fade={{ duration: 20 }}
      out:slide={{ duration: 0, easing: t => (--t) * t * t + 1 }}
    >
      {text[currentIndex]}
    </p>
  {/key}
</section>

<style>
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-pulse {
    animation: pulse 1.5s ease-in-out;
  }
</style>
