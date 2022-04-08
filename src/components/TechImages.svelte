<script lang="ts">
  import launch_vehicle from "./../assets/technology/image-launch-vehicle-landscape.jpg";
  import spaceport from "./../assets/technology/image-space-capsule-landscape.jpg";
  import space_capsule from "./../assets/technology/image-spaceport-landscape.jpg";

  type TechImagesType = keyof typeof techImages;

  export let technology: TechImagesType;

  let techImages = {
    launch_vehicle,
    spaceport,
    space_capsule,
  };
</script>

{#if technology}
  <img
    src={techImages[technology]}
    alt={"technology"}
    class="absolute w-full h-[170px] object-cover"
  />
  <div class="h-[170px]" />
{/if}
