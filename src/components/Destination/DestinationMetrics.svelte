{#each [["AVG. DISTANCE", "384,400 km"], ["EST. TRAVEL TIME", "3 DAYS"]] as [label, metric]}
  <div class="text-center">
    <span class="text-subh2 font-mono text-brand-primary uppercase"
      >{label}</span
    >
    <p class="text-subh1 font-serif text-brand-white uppercase">
      {metric}
    </p>
  </div>
{/each}
