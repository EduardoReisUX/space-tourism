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
  md:items-start"
  id="destination"
>
  <Background section="destination" />
  <ProgressTracker step="01" />

  <div
    class="mt-8 flex flex-col items-center text-brand-white border-b border-brand-white pb-8
    md:px-24 md:mt-16 md:pb-12"
  >
    <DestinationImg destination="moon" />
    <DestinationOptions />
    <DestinationDescription />
  </div>

  <DestinationMetrics />
</section>
