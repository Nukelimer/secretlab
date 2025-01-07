<script>
  export let card;
  export let index;
import { CircleCheck } from 'lucide-svelte';



  // @ts-ignore
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.slice(0, lastSpaceIndex) + '...';
  };
</script>

<div class="card font-Noto !w-[400px] swiper-slide text-center max-h-[730px] min-h-[400px]  md:max-w-[300px] md:h-[350px] md:min-h-[600px]  rounded-b shadow-lg">
  <img 
    src="{card.img}" 
    alt="{card.title}" 
    class="max-h-   object-cover aspect-square rounded-t" 
  />
  <h3 class="text-pretty px-2 text-left font-bold my-3 text-base mr-12">
    "{card.title}"
  </h3>
  <p class="text-left font-medium text-sm px-2">
    {truncateDescription(card.description, 150)}
  </p>

  <button class="text-left  px-2 w-full text-[#C41A25] mt-14 mb-6 ">{card.continue_reading}</button>
  <h4 class="font-semibold flex px-2 items-center gap-1">{card.name} <CircleCheck class='text-white' size='32' fill='#1A7A39'  absoluteStrokeWidth  /></h4>
  <h5 class="text-slate-400 text-start px-2 ">{card.country} </h5>
</div>

<style>
  .card {
    width: 100%; 

  }
</style>


