<script lang="ts">
  import Background from "./components/Background.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import ExploreButton from "./components/ExploreButton.svelte";

  import ProgressTracker from "./components/ProgressTracker.svelte";

  import DestinationImg from "./components/DestinationImg.svelte";
  import DestinationOptions from "./components/DestinationOptions.svelte";
  import DestinationDescription from "./components/DestinationDescription.svelte";
  import DestinationMetrics from "./components/DestinationMetrics.svelte";

  import CrewImg from "./components/CrewImg.svelte";
  import CrewOptions from "./components/CrewOptions.svelte";
  import CrewDescription from "./components/CrewDescription.svelte";

  import TechImages from "./components/TechImages.svelte";
  import TechOptions from "./components/TechOptions.svelte";
  import TechDescription from "./components/TechDescription.svelte";
</script>

<svelte:head>
  <title>Space Tourism</title>
</svelte:head>

<main class="flex flex-col">
  <section
    class="relative min-h-screen flex flex-col px-6 mx-auto items-center pb-12"
  >
    <Background section="home" />
    <Header />
    <div class="space-y-20 mt-12 flex flex-col items-center">
      <Hero />
      <ExploreButton />
    </div>
  </section>

  <section
    class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14"
  >
    <Background section="destination" />
    <ProgressTracker step="01" />

    <div
      class="mt-8 flex flex-col items-center text-brand-white border-b border-brand-white pb-8"
    >
      <DestinationImg destination="moon" />
      <div class="flex space-x-6 mt-7">
        <DestinationOptions />
      </div>
      <DestinationDescription />
    </div>

    <div class="mt-8 space-y-8">
      <DestinationMetrics />
    </div>
  </section>

  <section
    class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14"
  >
    <Background section="crew" />
    <ProgressTracker step="02" />

    <div class="mt-8 flex flex-col items-center text-brand-white">
      <CrewImg crew="douglas_hurley" />
      <div class="flex space-x-6 mt-7">
        <CrewOptions />
      </div>
      <CrewDescription />
    </div>
  </section>

  <section
    class="relative min-h-screen flex flex-col px-6 mx-auto items-center w-full pt-[5.5rem] pb-14"
  >
    <Background section="techBg" />
    <ProgressTracker step="03" />

    <div class="mt-8 flex flex-col items-center text-brand-white">
      <TechImages technology="launch_vehicle" />
      <div class="flex space-x-6 mt-7">
        <TechOptions />
      </div>
      <TechDescription />
    </div>
  </section>
</main>
