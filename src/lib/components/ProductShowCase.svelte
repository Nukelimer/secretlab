<script>
  import Carousel from "svelte-carousel";
  import { onMount } from 'svelte';
  let isClient = false;

    onMount(() => {
    isClient = true; 
  });
  const colors = [
    { color: "#FF0000", text: "Red Color" },
    { color: "#0000FF", text: "Blue Color" },
    { color: "#008000", text: "Green Color" },
    { color: "#FFFF00", text: "Yellow Color" },
    { color: "#800080", text: "Purple Color" },
    { color: "#FFA500", text: "Orange Color" },
  ];
</script>

<div class="mt-20 hidden">
  <h1>Secretlab Chairs</h1>
<div class="">

  {#if isClient}
 <Carousel>
  {#each colors as { color, text } (color)}
   <div>{text}</div>
  {/each}
</Carousel>

{/if}
</div>
</div>
