<script lang="ts">
  import { destinationsData } from "./../../stores/index";
  import { selectedDestination } from "./../../stores/selectedDestination";

  $: displayDestination = $destinationsData.find(
    (destination) => destination.name === $selectedDestination
  );
</script>

<div
  class="mt-8 space-y-8 mx-auto 
    md:flex md:space-y-0 md:justify-around md:w-full md:px-24 md:mt-7
    lg:px-0 lg:justify-start lg:space-x-20"
>
  <div class="text-center">
    <span class="text-subh2 font-mono text-brand-primary uppercase"
      >AVG. DISTANCE</span
    >
    <p class="text-subh1 font-serif text-brand-white uppercase">
      {displayDestination.distance}
    </p>
  </div>
  <div class="text-center">
    <span class="text-subh2 font-mono text-brand-primary uppercase"
      >EST. TRAVEL TIME</span
    >
    <p class="text-subh1 font-serif text-brand-white uppercase">
      {displayDestination.travel}
    </p>
  </div>
</div>
