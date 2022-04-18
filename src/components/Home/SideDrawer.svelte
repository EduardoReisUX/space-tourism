<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  import close_icon from "./../../assets/shared/icon-close.svg";

  export let isDrawerOpen: boolean;
  export let toggleSideDrawer: () => void;
</script>

{#if isDrawerOpen}
  <aside
    class="md:hidden flex flex-col items-end fixed top-0 right-0 z-50 h-screen bg-brand-primary/5 backdrop-blur-2xl scroll-smooth"
    in:fly={{ opacity: 1, duration: 400, x: 200, easing: cubicInOut }}
  >
    <header class="py-8 px-6">
      <button on:click={toggleSideDrawer}>
        <img src={close_icon} alt="Fechar" />
      </button>
    </header>

    <ul class="flex flex-col space-y-8">
      {#each ["home", "destination", "crew", "technology"] as section, index}
        <li
          class="px-8 border-r-4 border-brand-white/0 duration-150 hover:border-brand-white"
        >
          <span class="font-bold text-nav text-brand-white font-mono mr-3"
            >0{index}</span
          >
          <a
            href={`#${section}`}
            class="text-nav text-brand-white font-mono uppercase"
            on:click={toggleSideDrawer}
          >
            {section}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
