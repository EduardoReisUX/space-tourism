<script lang="ts">
  import Header from "./components/Header.svelte";
  import background from "./assets/home/background-home-mobile.jpg";
  import ExploreButton from "./components/ExploreButton.svelte";
  import Hero from "./components/Hero.svelte";
</script>

<svelte:head>
  <title>SSS | Space Tourism Svelte</title>
</svelte:head>

<main class={`relative min-h-screen flex flex-col pb-12`}>
  <img
    src={background}
    alt="bg"
    class="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <Header />

  <section class="flex flex-col items-center px-6 mx-auto mt-6 space-y-20">
    <Hero />
    <ExploreButton />
  </section>
</main>
