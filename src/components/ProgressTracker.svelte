<script lang="ts">
  type ProgressTrackerType = keyof typeof stepIndicator;

  export let step: ProgressTrackerType;

  let stepIndicator = {
    "01": "PICK YOUR DESTINATION",
    "02": "MEET YOUR CREW",
    "03": "SPACE LAUNCH 101",
  };
</script>

{#if step}
  <p class="text-nav text-brand-white font-mono">
    <span class="mr-4 font-bold text-brand-primary/50">01</span>PICK YOUR
    DESTINATION
  </p>
{/if}
