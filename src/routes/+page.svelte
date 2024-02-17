<script lang="ts">
    import UnitInput from "$lib/UnitInput.svelte";

</script>
<h1 class="text-7xl">New BMI Calculator</h1>

<UnitInput name="weight" baseValue={60} defaultUnit="kg" alternate="lbs" conversion={2.204623}>Weight</UnitInput>
<UnitInput name="height" baseValue={160} defaultUnit="cm" alternate="in" conversion={2.204623}>Weight</UnitInput>