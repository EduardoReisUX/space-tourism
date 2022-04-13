<script lang="ts">
  import { destinationsData } from "./../../stores/index";
  import { selectedDestination } from "./../../stores/selectedDestination";

  let destinationsName = $destinationsData.map(({ name }) => name);

  function selectDestination(destination: string) {
    $selectedDestination = destination;
  }
</script>

<div
  class="flex space-x-6 mt-7
  md:space-x-9 lg:mt-0"
>
  {#each destinationsName as destination}
    <button
      class="text-subh2 pb-2 text-brand-primary font-mono uppercase border-b-4 border-brand-white/0 duration-150 
      hover:border-brand-white/25"
      class:selected={$selectedDestination === destination}
      on:click={() => selectDestination(destination)}
    >
      {destination}
    </button>
  {/each}
</div>

<style>
  .selected {
    @apply border-brand-white text-brand-white border-brand-white;
  }

  .selected:hover {
    @apply border-brand-white;
  }
</style>
