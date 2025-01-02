<script lang="ts">
  import * as Accordion from "$lib/component/ui/accordion/index.js";

  const accordionData = [
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
      image: "/images/showcase/homepage-engineering-3.png",
    },
  ];
</script>

<Accordion.Root class="w-full sm:max-w-[100%] px-6">
  {#each accordionData as { heading, content, btnText, btnType, image }, i}
    <Accordion.Item value={"item-"+i}>
      <Accordion.Trigger>{heading}</Accordion.Trigger>
      <Accordion.Content>
        <img src={image} alt={heading} class="border mb-6 border-gray-200 rounded" />
        <p class="font-semibold">{content}</p>
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>
