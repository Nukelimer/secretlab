<script>
  import "../app.css";

  import SalesBanner from "$lib/components/SalesBanner.svelte";
  import Header from "$lib/components/Header.svelte";
</script>


<div class="relative top-0 z-50">

  <SalesBanner />
<Header />
</div>

<slot />
