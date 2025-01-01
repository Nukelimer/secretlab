<script>
  import Button from "$lib/component/reusable/Button.svelte";
  import * as Accordion from "$lib/component/ui/accordion";
  // @ts-ignore
  import C_Accordion from "$lib/components/C_Accordion.svelte";

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

<div class="">
  <h1 class="text-3xl text-center pt-16 font-medium">
    Engineering <span class="text-[#C4AD65]">Award-Winning</span> comfort
  </h1>
</div>
