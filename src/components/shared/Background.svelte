<script lang="ts">
  import homeBg from "./../../assets/home/background-home-mobile.jpg";
  import destinationBg from "./../../assets/destination/background-destination-mobile.jpg";
  import crewBg from "./../../assets/crew/background-crew-mobile.jpg";
  import techBg from "./../../assets/technology/background-technology-mobile.jpg";

  type BackgroundType = keyof typeof backgrounds;

  let backgrounds = {
    home: homeBg,
    destination: destinationBg,
    crew: crewBg,
    techBg: techBg,
  };

  export let section: BackgroundType;
</script>

{#if section}
  <img
    src={backgrounds[section]}
    alt="bg"
    class="absolute inset-0 w-full h-full object-cover -z-10"
  />
{/if}
