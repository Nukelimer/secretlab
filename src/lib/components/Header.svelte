<script>
  import Menu from "lucide-svelte/icons/menu";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import X from "lucide-svelte/icons/x";
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<div class="flex justify-between py-4 fixed top-14 bg-white w-full z-50">
  <img src="/logo_secretlab.svg" alt="logo" class="" />

  <div class="flex gap-8 mt-0 mr-2 items-center">
    <div class="h-10 w-10">
      <ShoppingCart size='35' fill='black' />
    </div>

    <div class="">
      <button
        class="z-10 flex items-center justify-center w-10 h-10 rounded focus:outline-none"
        on:click={toggleMenu}
      >
        {#if isOpen}
          <X size='35' class="text-black text-2xl transition-transform duration-1000" />
        {:else}
          <Menu size='35' class="text-black  text-2xl transition-transform duration-500" />
        {/if}
      </button>
    </div>
  </div>
</div>
