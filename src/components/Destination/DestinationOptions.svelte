<div
  class="flex space-x-6 mt-7
  md:space-x-9 lg:mt-0"
>
  {#each ["MOON", "MARS", "EUROPA", "TITAN"] as lua, index}
    {#if index === 0}
      <button class="text-subh2 pb-2 border-b-4 font-mono border-brand-white">
        {lua}
      </button>
    {:else}
      <button
        class="text-subh2 pb-2 border-b-4 font-mono text-brand-primary border-[transparent] duration-100 hover:border-brand-white/25"
      >
        {lua}
      </button>
    {/if}
  {/each}
</div>
