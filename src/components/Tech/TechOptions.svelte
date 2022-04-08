{#each [1, 2, 3] as option, index}
  {#if index === 0}
    <button
      class="w-10 h-10 grid place-items-center bg-brand-white text-brand-black font-serif rounded-full"
    >
      {option}
    </button>
  {:else}
    <button
      class="w-10 h-10 grid place-items-center border border-brand-white/25 font-serif rounded-full"
    >
      {option}
    </button>
  {/if}
{/each}
