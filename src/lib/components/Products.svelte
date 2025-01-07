<script>
  import DisplayCategory from "$lib/component/reusable/DisplayCategory.svelte";

  const chairs = [
    {
      heading: "Secretlab TITAN Evo",
      sub_heading: "Our flagship ergonomic chair",
      body: "Our most advanced ergonomic features. Crafted to support your longest days, across multiple activities and postures.",
      btnArray: ["Learn More", "Shop Now"],
      img: "images/product/home-page-titan-evo.png",
      banner: {
        img: "images/product/homepage-nanogen-banner.png",
        img_lg: "images/product/homepage-nanogen-banner-sm.png",
        status: "New",
        heading: "TITAN Evo NanoGen™ Edition out now.",
        btn: "Learn More",
      },
    },

    {
      heading: "Secretlab TITAN Evo LITE",
      sub_heading: "All the core features, for less",
      body: "The most essential functions of our flagship TITAN Evo. At a more accessible price.",
      btnArray: ["Learn More", "Shop Now"],
      img: "images/product/home-page-titan-evo-lite.png",
    },

    {
      status: "New",
      heading: "Secretlab SKINS",
      sub_heading: "Your brand new chair all over again",
      body: "Slip on. Slot in. Zip up. Switching up the look of your TITAN Evo is that easy.",
      btnArray: ["Learn More", "Shop Now"],
      img: "images/product/home-page-skin.png",
    },
  ];

  const desks = [
    {
      heading: " Secretlab MAGNUS PRO",
      sub_heading: "Performance that rise to the occasion",
      body: "The world's best cable management system,. Now electrified",
      btnArray: ["Learn More", "Shop Now"],
      img: "images/product/home-page-magnus-pro.png",
    },

    {
      heading: "Secretlab MAGNUS",
      sub_heading: "Discover a new way to get organized",
      body: "The quintessential modern metal desk for work, play, and everything in between.",
      btnArray: ["Learn More", "Shop Now"],
      img: "images/product/home-page-magnus.png",
    },

    {
      heading: "Secretlab Desk Add-Ons",
      sub_heading: "Modular, secure, and easy to use",
      body: "Boost productivity and performance with our exclusive add-ons.",
      btnArray: ["Shop Now"],
      img: "images/product/home-page-desk-add-on.png",
    },
  ];

  const accessories = [
    {
      status: "New",
      heading: " Secretlab Skins",
      sub_heading: "Refresh your chair",
      body: "Explore a new world of chair customization with fresh aesthetics and 360° protection.",
      btnArray: ["Shop Now"],
      img: "images/product/home-page-accessories-skins.png",
    },

    {
      heading: "Secretlab Chair Add-Ons",
      sub_heading: "Personalize your Secretlab experience",
      body: "Sit the way you want with exclusive accessories and add-ons for your chair.",
      btnArray: ["Shop Now"],
      img: "images/product/home-page-accessories-chair-addon.png",
    },

    {
      heading: "Secretlab Footrests and Recliner Add-on",
      sub_heading: "Put your feet up",
      body: "Enjoy dedicated ergonomic support for your legs and feet.",
      btnArray: ["Shop Now"],
      img: "images/product/homepage-products-recliner.png",
    },
  ];
</script>

<DisplayCategory
  categoryName={"Secretlab Chairs"}
  text={"Shop All Ergonomic Chairs"}
  categoryData={chairs}
/>
<DisplayCategory
  categoryName={"Secretlab Desks"}
  text={"Shop All Desk"}
  categoryData={desks}
/>
<DisplayCategory
  text={"Shop All  Accessories"}
  categoryName={"Secretlab Accessories"}
  categoryData={accessories}
/>
