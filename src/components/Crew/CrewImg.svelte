<script lang="ts">
  import douglas_hurley from "./../../assets/crew/image-douglas-hurley.png";
  import anousheh_ansari from "./../../assets/crew/image-anousheh-ansari.png";
  import mark_shuttleworth from "./../../assets/crew/image-mark-shuttleworth.png";
  import victor_glover from "./../../assets/crew/image-victor-glover.png";

  import { selectedCrew } from "./../../stores/selectedCrew";
  import { crewsData } from "./../../stores";
  import { fade } from "svelte/transition";

  let crewImages = {
    douglas_hurley,
    anousheh_ansari,
    mark_shuttleworth,
    victor_glover,
  };

  $: value = $crewsData
    .find(({ name }) => name === $selectedCrew)
    .name.toLowerCase()
    .replace(" ", "_");
</script>

<div
  class="w-[327px] h-[223px] border-b border-b-brand-white/10
    md:w-[539px] md:h-[532px]
    lg:w-[453px] lg:h-[654px]"
>
  {#key $selectedCrew}
    <img
      src={crewImages[value]}
      alt={"crew"}
      class="w-full h-full object-contain"
      in:fade={{ duration: 150, delay: 250 }}
      out:fade={{ duration: 150 }}
    />
  {/key}
</div>
