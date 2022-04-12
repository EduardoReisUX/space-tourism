<script lang="ts">
  import { selectedTechnology } from "../../stores/selectedTech";
  import { technologiesData } from "../../stores";
  import { fade } from "svelte/transition";

  function selectTechnology(index: number) {
    $selectedTechnology = index;
  }
</script>

<div
  class="flex space-x-6 mt-7 justify-center 
  lg:flex-col lg:justify-start lg:space-x-0 lg:space-y-8"
>
  {#each $technologiesData as _, index}
    {#if $selectedTechnology === index + 1}
      <button
        class="w-10 h-10 grid place-items-center bg-brand-white text-brand-black font-serif rounded-full
        md:h-[60px] md:w-[60px] md:text-[24px]
        lg:h-[80px] lg:w-[80px] lg:text-h4"
        on:click={() => selectTechnology(index + 1)}
        in:fade={{ duration: 250 }}
        out:fade={{ duration: 0 }}
      >
        {index + 1}
      </button>
    {:else}
      <button
        class="w-10 h-10 grid place-items-center border border-brand-white/25 font-serif rounded-full
        md:h-[60px] md:w-[60px] md:text-[24px]
        lg:h-[80px] lg:w-[80px] lg:text-h4"
        on:click={() => selectTechnology(index + 1)}
        in:fade={{ duration: 250 }}
        out:fade={{ duration: 0 }}
      >
        {index + 1}
      </button>
    {/if}
  {/each}
</div>
