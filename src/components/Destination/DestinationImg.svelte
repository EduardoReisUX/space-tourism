<script lang="ts">
  import moon from "./../../assets/destination/image-moon.png";
  import mars from "./../../assets/destination/image-mars.png";
  import europa from "./../../assets/destination/image-europa.png";
  import titan from "./../../assets/destination/image-titan.png";

  type DestinationImagesType = keyof typeof destinationImages;

  export let destination: DestinationImagesType;

  let destinationImages = {
    moon: moon,
    mars: mars,
    europa: europa,
    titan: titan,
  };
</script>

{#if destination}
  <img
    src={destinationImages[destination]}
    alt={"destination"}
    class="w-[170px] h-[170px] animate-hover
    md:w-[300px] md:h-[300px]"
  />
{/if}
