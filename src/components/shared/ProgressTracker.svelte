<script lang="ts">
  type ProgressTrackerType = keyof typeof stepIndicator;

  export let step: ProgressTrackerType;

  let stepIndicator = {
    "01": "PICK YOUR DESTINATION",
    "02": "MEET YOUR CREW",
    "03": "SPACE LAUNCH 101",
  };

  let stepNumber = Object.keys(stepIndicator).find(
    (key) => stepIndicator[key] === stepIndicator[step]
  );
</script>

{#if step}
  <p class="text-nav text-brand-white font-mono md:text-[20px]">
    <span class="mr-4 font-bold text-brand-primary/25">{stepNumber}</span
    >{stepIndicator[step]}
  </p>
{/if}
