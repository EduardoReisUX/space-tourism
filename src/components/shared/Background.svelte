<script lang="ts">
  /* Mobile bg images */
  import homeMobile from "./../../assets/home/background-home-mobile.jpg";
  import destinationMobile from "./../../assets/destination/background-destination-mobile.jpg";
  import crewMobile from "./../../assets/crew/background-crew-mobile.jpg";
  import techMobile from "./../../assets/technology/background-technology-mobile.jpg";

  /* Tablet bg images */
  import homeTablet from "./../../assets/home/background-home-tablet.jpg";
  import destinationTablet from "./../../assets/destination/background-destination-tablet.jpg";
  import crewTablet from "./../../assets/crew/background-crew-tablet.jpg";
  import techTablet from "./../../assets/technology/background-technology-tablet.jpg";

  /* Desktop bg images */
  import homeDesktop from "./../../assets/home/background-home-desktop.jpg";
  import destinationDesktop from "./../../assets/destination/background-destination-desktop.jpg";
  import crewDesktop from "./../../assets/crew/background-crew-desktop.jpg";
  import techDesktop from "./../../assets/technology/background-technology-desktop.jpg";

  type BackgroundType = keyof typeof mobileBackgrounds;

  let mobileBackgrounds = {
    home: homeMobile,
    destination: destinationMobile,
    crew: crewMobile,
    techBg: techMobile,
  };

  export let section: BackgroundType;

  let tabletBackgrounds = {
    home: homeTablet,
    destination: destinationTablet,
    crew: crewTablet,
    techBg: techTablet,
  };

  let desktopBackgrounds = {
    home: homeDesktop,
    destination: destinationDesktop,
    crew: crewDesktop,
    techBg: techDesktop,
  };

  let innerWidth = 0;
  $: device =
    innerWidth > 1024 ? "desktop" : innerWidth < 768 ? "mobile" : "tablet";
</script>

<svelte:window bind:innerWidth />

{#if section}
  {#if device === "mobile"}
    <img
      src={mobileBackgrounds[section]}
      alt="bg"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />
  {/if}

  {#if device === "tablet"}
    <img
      src={tabletBackgrounds[section]}
      alt="bg"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />
  {/if}

  {#if device === "desktop"}
    <img
      src={desktopBackgrounds[section]}
      alt="bg"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />
  {/if}
{/if}
