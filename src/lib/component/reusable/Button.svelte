<script>
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import MoveRight from "lucide-svelte/icons/move-right";
  export let rotateElement = false;
   export let text_size = "";
  export let text_styles = "";
  export let styles = "";
   export let icon = "";
  let moveforward = false;
  export let text = "";
</script>

{#if icon === "Circle"}
  <div
    class=" flex items-center md:justify-center gap-2 font-medium text-[#A72A2F] font-Noto {text_size === 'xl' ? 'text-xl': text_size === 'sm' ? 'text-sm ' : 'text-2xl' } "
    onmouseenter={() => (rotateElement = true)}
    onmouseleave={() => (rotateElement = false)}
    role="button"
    tabindex="0"
  >
    <p class="text-[{text_size}] mt-1">{text}</p>
    <CirclePlus
      class={`mt-2 transform transition-transform duration-300 ${
        rotateElement ? "rotate-90" : "rotate-0"
      }`}
    />
  </div>
{:else if icon === "MoveRight"}
  <div
    class="flex flex-col  {styles} text-center text-[#A72A2F]  {text_size === 'xl' ? 'text-xl': text_size === 'sm' ? 'text-sm mt-1' : 'text-2xl' }"
    role="button"
    tabindex="0"
    onmouseenter={() => (moveforward = true)}
    onmouseleave={() => (moveforward = false)}
  >
   
    <span class="flex gap-2 text-[{text_size}]  items-center"
      >{text} <MoveRight
        class={moveforward
          ? "translate-x-4 mt-[2px] transition-all delay-200 "
          : "ml-0 mt-[2px]"}
      /></span
    >
  </div>
{:else}
  <div
    class=" flex items-center md:justify-center gap-2 font-medium text-[#A72A2F]   font-Noto text-2xl mt-8 pb-16 px-2"
    onmouseenter={() => (rotateElement = true)}
    onmouseleave={() => (rotateElement = false)}
    role="button"
    tabindex="0"
  >
    <p class="{text_styles}">{text}</p>
  </div>
{/if}
