<script lang="ts">
    import UnitInput from "$lib/UnitInput.svelte";
    import FigureDisplay from "$lib/FigureDisplay.svelte";
    import { calcBMI, calcNewBMI, getBMIRange } from "$lib";
    import BMIDisplay from "$lib/BMIDisplay.svelte";

    let weight: number = 60;
    let height: number = 160;

    let bmi = 20;
    let newBMI = 20;

    const updateBMI = () => {
        bmi = calcBMI(weight, height);
        newBMI = calcNewBMI(weight, height);
    };

    $: weight, height, updateBMI();
</script>

<title>New BMI Calculator</title>
<svelte:head>
    <meta name="description" content="A simple calculator for classic and new BMI">
</svelte:head>

<main class="md:w-1/2 lg:w-1/3 mx-auto flex flex-col font-inter p-8">
    <h1 class="text-5xl font-bold mb-2">New BMI Calculator</h1>
    <hr class="mb-4">

    <UnitInput
        name="weight"
        baseValue={60}
        defaultUnit="kg"
        alternate="lbs"
        conversion={0.4535924}
        bind:value={weight}
    >
        Weight</UnitInput
    >
    <UnitInput
        name="height"
        baseValue={160}
        defaultUnit="cm"
        alternate="in"
        conversion={2.54}
        bind:value={height}>Height</UnitInput
    >
    <div class="w-full">
        <BMIDisplay {bmi}></BMIDisplay>
        <BMIDisplay bmi={newBMI} title="New BMI"></BMIDisplay>
    
    </div>

    <h2 class="text-3xl font-bold mb-2 mt-4">About new BMI</h2>
    <hr class="mb-4">
    <p class="mb-2">New BMI was created by Oxford professor Nick Trefethen to address the fact that BMI biases tall people towards being overweight and short people towards
        being underweight on the BMI scale. </p>

    <p class="mb-2">This happens because as one gets taller, the volume of their body increases with the cube (height*breadth*width). In other words, weight increases more
        with height than height does. Tall people tend to have a lower new BMI, while shorter people will have a higher new BMI. 
    </p>

    <p>It is important to note that as of current, new BMI is neither backed up by epidemiological studies, nor used in healthcare. However, it is numerically
        sound and logical. 
    </p>
</main>
