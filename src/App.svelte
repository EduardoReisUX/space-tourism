<script lang="ts">
  import Home from "./components/Home/Home.svelte";
  import Destination from "./components/Destination/Destination.svelte";
  import Crew from "./components/Crew/Crew.svelte";
  import Tech from "./components/Tech/Tech.svelte";
</script>

<svelte:head>
  <title>Space Tourism</title>
</svelte:head>

<main class="flex flex-col">
  <Home />
  <Destination />
  <Crew />
  <Tech />
</main>

<style global>
  html {
    scroll-behavior: smooth;
  }
</style>
