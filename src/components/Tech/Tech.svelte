<script lang="ts">
  import Background from "./../shared/Background.svelte";
  import ProgressTracker from "./../shared/ProgressTracker.svelte";
  import TechDescription from "./TechDescription.svelte";
  import TechImages from "./TechImages.svelte";
  import TechOptions from "./TechOptions.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14
  md:items-start lg:pt-[212px]"
  id="technology"
>
  <Background section="techBg" />

  <div class="w-full md:max-w-screen-xl md:mx-auto">
    <ProgressTracker step="03" />

    <div
      class="mt-8 flex flex-col items-center text-brand-white 
      md:px-32
      lg:flex-row-reverse lg:px-0"
    >
      <TechImages />

      <div class="w-full lg:flex lg:space-x-20">
        <TechOptions />
        <TechDescription />
      </div>
    </div>
  </div>
</section>
