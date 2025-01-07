<script>
  export let card;
  export let index;

  console.log(index);


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

<div class="card font-Noto !w-[400px] swiper-slide text-center max-h-[430px] min-h-[400px]  md:max-w-[300px] md:h-[350px] md:min-h-[350px]  rounded-b shadow-lg">
  <img 
    src="{card.img}" 
    alt="{card.title}" 
    class="max-h-36  w-full object-cover aspect-square rounded-t" 
  />
  <h3 class="text-pretty text-left font-bold my-3 text-base mr-12">
    "{card.title}"
  </h3>
  <p class="text-left font-medium text-sm px-2">
    {truncateDescription(card.description, 150)}
  </p>
  <h4 class="font-semibold mt-2">{card.name}</h4>
  <h5 class="text-slate-400">{card.country}</h5>
</div>

<style>
  .card {
    width: 100%; 
  }
</style>
