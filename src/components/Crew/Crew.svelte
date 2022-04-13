<script lang="ts">
  import CrewImg from "./CrewImg.svelte";
  import CrewOptions from "./CrewOptions.svelte";
  import CrewDescription from "./CrewDescription.svelte";

  import Background from "../shared/Background.svelte";
  import ProgressTracker from "../shared/ProgressTracker.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14
  md:items-start lg:pt-[212px]"
  id="crew"
>
  <Background section="crew" />
  <div class="max-w-screen-xl mx-auto">
    <ProgressTracker step="02" />

    <div
      class="mt-8 flex flex-col items-center text-brand-white 
      md:flex-col-reverse
      lg:w-full lg:px-0 lg:flex-row-reverse lg:justify-between lg:gap-8"
    >
      <CrewImg />

      <div
        class="flex flex-col items-center text-center 
        lg:items-start lg:flex-col-reverse lg:gap-[120px]"
      >
        <CrewOptions />
        <CrewDescription />
      </div>
    </div>
  </div>
</section>
