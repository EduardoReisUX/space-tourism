<script lang="ts">
  import Background from "../shared/Background.svelte";
  import ExploreButton from "./ExploreButton.svelte";
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
</script>

<section
  class="relative min-h-screen flex flex-col px-6 mx-auto items-center pb-12 
  md:w-full"
>
  <Background section="home" />
  <Header />
  <div
    class="space-y-20 mt-12 flex flex-col items-center
    md:space-y-40
    lg:w-full lg:flex-row lg:justify-around lg:mt-[251px]"
  >
    <Hero />
    <ExploreButton />
  </div>
</section>
