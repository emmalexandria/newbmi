<script lang="ts">
    import { getBMIRange } from "$lib";
    import FigureDisplay from "./FigureDisplay.svelte";

    export let title: string = "BMI";
    export let bmi: number;
</script>
<span class="flex flex-row items-center space-x-2 mb-2 w-full">
  <FigureDisplay value={bmi}>{title}</FigureDisplay>
  <p class="w-fit">A reading which classifies you as <span class="font-bold">{getBMIRange(bmi).toLowerCase()}</span></p>
</span>