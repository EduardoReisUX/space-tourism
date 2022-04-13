<script lang="ts">
  import { destinationsData } from "./../../stores/index";
  import { selectedDestination } from "./../../stores/selectedDestination";

  $: displayDestination = $destinationsData.find(
    (destination) => destination.name === $selectedDestination
  );
</script>

<div
  class="border-b border-brand-white pb-8 mt-5 
lg:mt-8 lg:pb-14 lg:space-y-4"
>
  <h3 class="text-h3 font-serif md:text-[80px] uppercase lg:text-h2">
    {displayDestination.name}
  </h3>
  <p
    class="text-brand-primary text-center lg:text-body lg:text-left lg:leading-8"
  >
    {displayDestination.description}
  </p>
</div>
