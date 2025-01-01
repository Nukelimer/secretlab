<script>
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import ChevronDown from "lucide-svelte/icons/chevron-down";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export let level = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<ChevronDown strokeWidth={0.5}  size={48} class="h-6 w-6 transition-transform duration-200 " />
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
