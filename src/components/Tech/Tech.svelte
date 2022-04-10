<script lang="ts">
  import Background from "./../shared/Background.svelte";
  import ProgressTracker from "./../shared/ProgressTracker.svelte";
  import TechDescription from "./TechDescription.svelte";
  import TechImages from "./TechImages.svelte";
  import TechOptions from "./TechOptions.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14
  md:items-start"
>
  <Background section="techBg" />
  <ProgressTracker step="03" />

  <div
    class="mt-8 flex flex-col items-center text-brand-white 
  md:px-32"
  >
    <TechImages />
    <TechOptions />
    <TechDescription />
  </div>
</section>
