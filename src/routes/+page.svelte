<script>
  import Categories from "$lib/components/Categories.svelte";
  import Details from "$lib/components/Details.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import HeroReview from "$lib/components/HeroReview.svelte";
  import InspiredByOurCommunity from "$lib/components/InspiredByOurCommunity.svelte";

  import ShowCaseAccordion from "$lib/components/ShowCase_Accordion.svelte";
  import ShowOffWhoYouAre from "$lib/components/ShowOffWhoYouAre.svelte";
  import TrustedClients from "$lib/components/TrustedClients.svelte";
  import Products from "$lib/components/Products.svelte";
    import Reviews from "$lib/components/Reviews.svelte";
    import ProductPerks from "$lib/components/Product_Perks.svelte";
    import ContactUs from "$lib/components/ContactUs.svelte";
</script>

<div class="">
  <Hero />
  <HeroReview />
  <Categories />
  <Details />
  <TrustedClients />
  <ShowCaseAccordion />
  <ShowOffWhoYouAre />
  <InspiredByOurCommunity />
  <Products/>
  <Reviews/>
  <ProductPerks/>
  <ContactUs/>
</div>
