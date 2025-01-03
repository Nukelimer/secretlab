<script>
  import Categories from "$lib/components/Categories.svelte";
    import Details from "$lib/components/Details.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import HeroReview from "$lib/components/HeroReview.svelte";
    import ShowCaseAccordion from "$lib/components/ShowCase_Accordion.svelte";
    import ShowOffWhoYouAre from "$lib/components/ShowOffWhoYouAre.svelte";
    import TrustedClients from "$lib/components/TrustedClients.svelte";
  import { Alert } from 'flowbite-svelte';
     
</script>


<div class="">
  
  
  <Hero />
  <HeroReview />
  <Categories />
  <Details/>
  <div class="p-8 bg-green-300">
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>
<TrustedClients/>

<ShowCaseAccordion/>
<ShowOffWhoYouAre/>













</div>
