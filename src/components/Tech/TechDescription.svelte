<script lang="ts">
  import { technologiesData } from "../../stores";
  import { selectedTechnology } from "../../stores/selectedTech";
</script>

<div class="text-center lg:max-w-[470px] lg:text-left">
  <h5
    class="mt-8 mb-2 text-nav font-mono text-brand-primary
    md:mt-11 md:mb-4"
  >
    THE TERMINOLOGY...
  </h5>

  <div class="relative h-[226px] lg:max-w-[470px] lg:text-left">
    {#each $technologiesData as { name, description }, index}
      <div class="absolute">
        <h3
          class:visible={$selectedTechnology === index + 1}
          class="invisible text-subh1 font-serif mb-4 text-brand-white uppercase
            md:text-[40px]
            lg:text-h3"
        >
          {name}
        </h3>
        <p
          class:visible={$selectedTechnology === index + 1}
          class="invisible text-brand-primary text-center 
            lg:text-left lg:text-body lg:leading-8 lg:w-[300px]"
        >
          {description}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .visible {
    visibility: visible;
  }
</style>
