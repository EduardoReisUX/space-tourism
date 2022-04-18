<script lang="ts">
  import { selectedCrew } from "./../../stores/selectedCrew";
  import { crewsData } from "./../../stores/index";

  let crewsName = $crewsData.map(({ name }) => name);

  function selectCrew(crewName: string) {
    $selectedCrew = crewName;
  }
</script>

<div class="flex space-x-6 mt-7 md:mb-10">
  {#each crewsName as crew}
    <button
      class="w-[10px] h-[10px] bg-brand-white/25 rounded-full duration-150 lg:w-[15px] lg:h-[15px]
      hover:bg-brand-white/50"
      class:selected={$selectedCrew === crew}
      on:click={() => selectCrew(crew)}
    />
  {/each}
</div>

<style lang="postcss">
  .selected {
    @apply bg-brand-white;
  }

  .selected:hover {
    @apply bg-brand-white;
  }
</style>
