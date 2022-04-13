<script lang="ts">
  import DestinationDescription from "./DestinationDescription.svelte";
  import DestinationImg from "./DestinationImg.svelte";
  import DestinationMetrics from "./DestinationMetrics.svelte";
  import DestinationOptions from "./DestinationOptions.svelte";

  import Background from "../shared/Background.svelte";
  import ProgressTracker from "../shared/ProgressTracker.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14
  md:items-start lg:px-[164px] lg:pt-[212px]"
  id="destination"
>
  <Background section="destination" />
  <ProgressTracker step="01" />

  <div
    class="mt-8 flex flex-col items-center text-brand-white
    md:px-24 md:mt-16 md:pb-12
    lg:w-full lg:px-0 lg:flex-row lg:justify-around lg:space-x-8"
  >
    <DestinationImg />

    <div
      class="flex flex-col items-center text-center 
      lg:items-start lg:text-left lg:max-w-[445px]"
    >
      <DestinationOptions />
      <DestinationDescription />
      <DestinationMetrics />
    </div>
  </div>
</section>
