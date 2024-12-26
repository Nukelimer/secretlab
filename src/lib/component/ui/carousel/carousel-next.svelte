<script>
	import ChevronRight  from "lucide-svelte/icons/chevron-right";
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/component/ui/button/index.js";
	let className = undefined;
	export { className as class };
	export let variant = "outline";
	export let size = "icon";
	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext("<Carousel.Next/>");
</script>

<Button
	{variant}
	{size}
	class={cn(
		"absolute bg-transparent  h-12 w-12 border-none hover:bg-transparent",
		$orientation === "horizontal"
			? " -right-8 md:-right-12 top-1/2 -translate-y-1/2"
			: "-right-2  md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>

	<ChevronRight  class="h-8 w-8 text-white" />
	<span class="sr-only">Next slide</span>
</Button>
