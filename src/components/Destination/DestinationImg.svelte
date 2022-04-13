<script lang="ts">
  import Moon from "./../../assets/destination/image-moon.png";
  import Mars from "./../../assets/destination/image-mars.png";
  import Europa from "./../../assets/destination/image-europa.png";
  import Titan from "./../../assets/destination/image-titan.png";

  import { selectedDestination } from "./../../stores/selectedDestination";

  import { fade } from "svelte/transition";

  let destinationImages = { Moon, Mars, Europa, Titan };
</script>

<div
  class="w-[170px] h-[170px] animate-hover aspect-square flex overflow-hidden snap-mandatory scroll-smooth scroll-m-12 
    md:w-[300px] md:h-[300px]
    lg:w-[445px] lg:h-[445px]"
>
  {#key $selectedDestination}
    <img
      src={destinationImages[$selectedDestination]}
      alt={"destination"}
      class="aspect-square snap-start"
      in:fade={{ duration: 150, delay: 250 }}
      out:fade={{ duration: 150 }}
    />
  {/key}
</div>
