<script>
  import DisplayCategory from "$lib/component/reusable/DisplayCategory.svelte";

  const chairs = [
    {
      heading: "Secretlab TITAN Evo",
      sub_heading: "Our flagship ergonomic chair",
      body: "Our most advanced ergonomic features. Crafted to support your longest days, across multiple activities and postures.",
      btnArray: ["Learn More", "Shop Now"],
      img: "",
      banner: {
        img: "",
        status: 'New'
        heading: 'TITAN Evo NanoGen™ Edition out now.'
        btn: "Learn More"

      },
    },

    {
      heading: "Secretlab TITAN Evo LITE",
      sub_heading: "All the core features, for less",
      body: "The most essential functions of our flagship TITAN Evo. At a more accessible price.",
      btnArray: ["Learn More", "Shop Now"],
      img: "",},


       {
      heading: "Secretlab SKINS",
      sub_heading: "Your brand new chair all over again",
      body: "Slip on. Slot in. Zip up. Switching up the look of your TITAN Evo is that easy.",
      btnArray: ["Learn More", "Shop Now"],
      img: "",}
  ];

   const desks = [
    {
      heading: " Secretlab MAGNUS",
      sub_heading: "Discover a new way to get organized",
      body: "The quintessential modern metal desk for work, play, and everything in between..",
      btnArray: ["Learn More", "Shop Now"],
      img: "",
      banner: {
        img: "",
        status: 'New'
        heading: 'TITAN Evo NanoGen™ Edition out now.'
        btn: "Learn More"

      },
    },

    {
      heading: "Secretlab TITAN Evo LITE",
      sub_heading: "All the core features, for less",
      body: "The most essential functions of our flagship TITAN Evo. At a more accessible price.",
      btnArray: ["Learn More", "Shop Now"],
      img: "",},


       {
      heading: "Secretlab SKINS",
      sub_heading: "Your brand new chair all over again",
      body: "Slip on. Slot in. Zip up. Switching up the look of your TITAN Evo is that easy.",
      btnArray: ["Learn More", "Shop Now"],
      img: "",}
  ];
</script>

<DisplayCategory categoryName={"Secretlab Chairs"} />
<DisplayCategory categoryName={"Secretlab Desks"} />
<DisplayCategory categoryName={"Secretlab Accessories"} />
