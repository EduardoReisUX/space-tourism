<script lang="ts">
  import logo from "./../../assets/shared/logo.svg";
  import openMenu from "./../../assets/shared/icon-hamburger.svg";
  import SideDrawer from "./SideDrawer.svelte";

  let isDrawerOpen = false;

  function toggleSideDrawer() {
    isDrawerOpen = !isDrawerOpen;
  }
</script>

<header class="min-w-full">
  <nav class="p-6 w-full flex justify-between">
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
    <button class="md:hidden" on:click={toggleSideDrawer}>
      <img src={openMenu} alt="Open menu" />
    </button>

    <SideDrawer {isDrawerOpen} {toggleSideDrawer} />

    <ul
      class="hidden md:flex absolute right-0 top-0 space-x-6 px-12 bg-brand-white/5"
    >
      {#each ["home", "destination", "crew", "technology"] as section}
        <li
          class="py-10 border-b-4 border-brand-white/0 duration-150 hover:border-brand-white"
        >
          <a
            href={`#${section}`}
            class="text-nav text-brand-white font-mono uppercase">{section}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>
