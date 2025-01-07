<script>
  import Button from "$lib/component/reusable/Button.svelte";

  const dataPerks = [
    {
      icon: "images/FAQ/icon-delivery.svg",
      header: "Fast, Direct Shipping",
      content:
        "To provide you with the very best experience, we ship each Secretlab product directly to you. Enjoy quicker responses and greater savings with no retailer or distributor markups",
      btn_text: "Learn about delivery",
    },
    {
      icon: "images/FAQ/icon-faq.svg",
      header: "Frequently Asked Questions",
      content: "Got a question? Let us help you.",
      btn_text: "Frequently asked questions",
    },
    {
      icon: "images/FAQ/logo_affirm.svg",
      header: "Flexible financing available",
      content: "Financing options available through Affirm.",
      btn_text: "Learn about affirm",
    },
  ];
</script>

<div
  class="bg-[#F2F2F2] px-16 gap-12 flex flex-col md:flex-row py-32 font-Noto justify-center items-stretch"
>
  {#each dataPerks as data}
    <div class="w-full lg:w-1/3 flex flex-col justify-between items-start gap-4 p-6 bg-transparent md:bg-white rounded shadow-lg">
      <img
        src={data.icon}
        alt={data.header}
        class="max-w-20 
          {data.icon.includes('logo_affirm.svg') && '!mb-4 w-20'}  
          {data.icon.includes('icon-faq.svg') && 'w-14'}"
      />
      <div>
        <h2 class="font-bold text-lg">{data.header}</h2>
        <p class="text-sm mt-2 text-gray-600 ">{data.content}</p>
      </div>
      <Button text={data.btn_text} styles="text-sm mt-auto text-nowrap" icon="MoveRight" />
    </div>
  {/each}
</div>

