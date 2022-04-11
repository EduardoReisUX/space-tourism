<div
  class="mt-8 space-y-8 mx-auto 
    md:flex md:space-y-0 md:justify-around md:w-full md:px-24 md:mt-7
    lg:px-0 lg:justify-start lg:space-x-20"
>
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
</div>
