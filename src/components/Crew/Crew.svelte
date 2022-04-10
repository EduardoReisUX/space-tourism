<script lang="ts">
  import CrewImg from "./CrewImg.svelte";
  import CrewOptions from "./CrewOptions.svelte";
  import CrewDescription from "./CrewDescription.svelte";

  import Background from "../shared/Background.svelte";
  import ProgressTracker from "../shared/ProgressTracker.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14
  md:items-start"
>
  <Background section="crew" />
  <ProgressTracker step="02" />

  <div
    class="mt-8 flex flex-col items-center text-brand-white 
  md:flex-col-reverse"
  >
    <CrewImg crew="douglas_hurley" />
    <CrewOptions />
    <CrewDescription />
  </div>
</section>
