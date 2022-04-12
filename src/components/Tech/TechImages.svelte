<script lang="ts">
  import { selectedTechnology } from "../../stores/selectedTech";

  import launch_vehicle from "./../../assets/technology/image-launch-vehicle-landscape.jpg";
  import spaceport from "./../../assets/technology/image-space-capsule-landscape.jpg";
  import space_capsule from "./../../assets/technology/image-spaceport-landscape.jpg";

  let techImages = {
    "1": launch_vehicle,
    "2": spaceport,
    "3": space_capsule,
  };
</script>

{#if $selectedTechnology}
  <img
    src={techImages[$selectedTechnology]}
    alt={"technology"}
    class="absolute w-full h-[170px] object-cover
    md:h-[310px]
    lg:w-[515px] lg:h-[527px] right-0"
  />
  <div class="h-[170px] md:h-[310px] lg:w-[515px] lg:h-[527px]" />
{/if}
