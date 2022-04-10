<div class="flex space-x-6 mt-7 md:mb-10">
  {#each [1, 2, 3, 4] as _, index}
    {#if index === 0}
      <button class="w-[10px] h-[10px] bg-brand-white rounded-full" />
    {:else}
      <button class="w-[10px] h-[10px] bg-brand-white/25 rounded-full" />
    {/if}
  {/each}
</div>
