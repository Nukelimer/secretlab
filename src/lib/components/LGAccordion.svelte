<script lang="ts">
    import Button from "$lib/component/reusable/Button.svelte";
  import * as Accordion from "$lib/component/ui/accordion/index.js";

  const accordionInfo = [
    {
      heading: "Powered by R&D",
      content:
        "Over 25,000 hours of research and development, more than 900 prototypes, and a team of world-class experts in design and engineering. Creating the ultimate sitting experience means obsessing over every inch of our chair, engineering and refining it to perform and seat you perfectly.",
      btnText: "Learn More",
      btnType: "Circle",
      image: "/images/showcase/homepage-engineering-1.png",
    },
    {
      heading: "Quality beyond surface",
      content:
        "Our chairs are put through rigorous tests set by internationally recognized standards bodies, and then pushed to the limit in conditions that far exceed anything they’ll face in the real world. All to ensure unmatched durability and performance for years to come.",
      btnText: "Learn More",
      btnType: "Circle",
      image: "/images/showcase/homepage-engineering-2.png",
    },
    {
      heading: "5-Year extended warranty",
      content:
        "Built to go the distance. Enjoy peace of mind with up to a 5-year Extended Warranty on our ergonomic chairs and standing desks.",
      btnText: "Learn More",
      btnType: "MoveRight",
      image: "/images/showcase/support_posture.png.png",
    },
  ];

   let selectedImage = accordionInfo[0]?.image || null;
</script>

<div class="flex px-4">
  
  
    <div class="w-1/2 m-4 flex items-center justify-center   image-container">
    {#if selectedImage}
      <img
        src={selectedImage}
        alt="Selected"
        class="max-w-full max-h-full object-contain visible border rounded-lg"
      />
    {/if}
  </div>
  <div class=" w-1/2 border-gray-300 flex item-center justify-center my-auto">
    <Accordion.Root class="w-full">
      {#each accordionInfo as { heading, content, image, btnText, btnType }, i}
        <Accordion.Item value={`item-${i}`}>
          <Accordion.Trigger
            on:click={() => (selectedImage = image)}
            class="text-lg font-medium  hover:bg-gray-100 cursor-pointer w-full"
          >
            {heading}
          </Accordion.Trigger>
          <Accordion.Content class="p-4">
            <p>{content}</p>

            <p class="flex"><Button icon='{btnType}' text="{btnText}" text_size='sm'/></p>
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>



<style>
  .image-container img {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .image-container img.visible {
    opacity: 1;
    transform: scale(1);
  }
</style>