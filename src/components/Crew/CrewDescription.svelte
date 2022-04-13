<script lang="ts">
  import { selectedCrew } from "./../../stores/selectedCrew";
  import { crewsData } from "./../../stores/index";

  $: displayCrew = $crewsData.find(({ name }) => name === $selectedCrew);
</script>

{#key displayCrew}
  <div class="text-center md:px-32 lg:text-left lg:px-0">
    <h5
      class="mt-8 mb-2 text-nav font-serif text-brand-white/50
    md:text-[24px] lg:text-h4"
    >
      {displayCrew.role}
    </h5>
    <h3
      class="text-subh1 font-serif mb-4 uppercase
    md:text-[40px] lg:text-h3"
    >
      {displayCrew.name}
    </h3>
    <p class="text-brand-primary lg:text-body lg:w-[444px]">
      {displayCrew.bio}
    </p>
  </div>
{/key}
