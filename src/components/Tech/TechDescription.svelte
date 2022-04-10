<script lang="ts">
  import { fade } from "svelte/transition";

  import { technologiesData } from "../../stores";
  import { selectedTechnology } from "../../stores/selectedTech";
</script>

{#each $technologiesData as { name, description }, index}
  {#if $selectedTechnology === index + 1}
    <h5
      class="mt-8 mb-2 text-nav font-mono text-brand-primary
    md:mt-11 md:mb-4"
    >
      THE TERMINOLOGY...
    </h5>
    <h3
      in:fade={{ duration: 250 }}
      out:fade={{ duration: 0 }}
      class="text-subh1 font-serif mb-4 text-brand-white uppercase
      md:text-[40px]"
    >
      {name}
    </h3>
    <p
      in:fade={{ duration: 250 }}
      out:fade={{ duration: 0 }}
      class="text-brand-primary text-center"
    >
      {description}
    </p>
  {/if}
{/each}
