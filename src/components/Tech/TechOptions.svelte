<script lang="ts">
  import { selectedTechnology } from "../../stores/selectedTech";
  import { technologiesData } from "../../stores";

  function selectTechnology(index: number) {
    $selectedTechnology = index;
  }
</script>

<div
  class="flex space-x-6 mt-7 justify-center 
  lg:flex-col lg:justify-start lg:space-x-0 lg:space-y-8"
>
  {#each $technologiesData as _, index}
    <button
      class="w-10 h-10 grid place-items-center border border-brand-white/25 font-serif rounded-full duration-150
      md:h-[60px] md:w-[60px] md:text-[24px]
      lg:h-[80px] lg:w-[80px] lg:text-h4"
      class:selected={$selectedTechnology === index + 1}
      on:click={() => selectTechnology(index + 1)}
    >
      {index + 1}
    </button>
  {/each}
</div>

<style>
  .selected {
    @apply bg-brand-white text-brand-black border-0;
  }
</style>
