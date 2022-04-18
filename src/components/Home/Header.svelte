<script lang="ts">
  import logo from "./../../assets/shared/logo.svg";
  import openMenu from "./../../assets/shared/icon-hamburger.svg";
  import SideDrawer from "./SideDrawer.svelte";

  let isDrawerOpen = false;

  function toggleSideDrawer() {
    isDrawerOpen = !isDrawerOpen;
  }
</script>

<header class="min-w-full lg:w-full md:pl-10">
  <nav class="p-6 w-full flex justify-between md:p-0 md:items-center">
    <a href="/" class="lg:z-20">
      <img src={logo} alt="Logo" />
    </a>

    <div
      class="lg:before:w-full lg:before:absolute lg:before:border-b lg:before:border-brand-white/20
      lg:before:left-0 lg:before:top-[52px] lg:before:z-10"
    />

    <button class="md:hidden" on:click={toggleSideDrawer}>
      <img src={openMenu} alt="Open menu" />
    </button>
    <SideDrawer {isDrawerOpen} {toggleSideDrawer} />

    <ul
      class="hidden md:flex space-x-6 px-12 bg-brand-white/5
      lg:backdrop-blur-md lg:space-x-12 lg:pl-[123px] lg:pr-[165px] lg:z-20"
    >
      {#each ["home", "destination", "crew", "technology"] as section, index}
        <li
          class="py-10 border-b-4 border-brand-white/0 duration-150 hover:border-brand-white"
        >
          <a
            href={`#${section}`}
            class="text-nav text-brand-white font-mono uppercase"
          >
            <span class="hidden lg:inline-block font-bold">0{index}</span>
            {section}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
