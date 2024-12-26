<script>
  import ChevronLeft from "lucide-svelte/icons/chevron-left";

  import { getEmblaContext } from "./context.js";
  import { cn } from "$lib/utils.js";
  import { Button } from "$lib/component/ui/button/index.js";
  let className = undefined;
  export { className as class };
  export let variant = "outline";
  export let size = "icon";
  const { orientation, canScrollPrev, scrollPrev, handleKeyDown } =
    getEmblaContext("<Carousel.Previous/>");
</script>

<Button
  {variant}
  {size}
  class={cn(
    "bg-transparent absolute h-12 w-12 border-none touch-manipulation hover:bg-transparent ",
    $orientation === "horizontal"
      ? "-left-8 md:-left-12 top-1/2 -translate-y-1/2"
      : "-left-2 -translate-x-1/2 rotate-90",
    className,
  )}
  disabled={!$canScrollPrev}
  on:click={scrollPrev}
  on:keydown={handleKeyDown}
  {...$$restProps}
>
  <ChevronLeft class="h-8 w-8 text-white" />
  <span class="sr-only">Previous slide</span>
</Button>
