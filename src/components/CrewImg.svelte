<script lang="ts">
  import douglas_hurley from "./../assets/crew/image-douglas-hurley.png";
  import anousheh_ansari from "./../assets/crew/image-anousheh-ansari.png";
  import mark_shuttleworth from "./../assets/crew/image-mark-shuttleworth.png";
  import victor_glover from "./../assets/crew/image-victor-glover.png";

  type CrewImagesType = keyof typeof crewImages;

  export let crew: CrewImagesType;

  let crewImages = {
    douglas_hurley,
    anousheh_ansari,
    mark_shuttleworth,
    victor_glover,
  };
</script>

{#if crew}
  <img
    src={crewImages[crew]}
    alt={"crew"}
    class="w-[327px] h-[223px] object-contain border-b border-b-brand-white/10"
  />
{/if}
