<script lang="ts">
  export let name: string;
  export let baseValue: number;
  export let defaultUnit: string;
  export let alternate: string;

  export let conversion: number;


  let selectValue: string;
  let inputValue: number = baseValue;
  export let value: number = inputValue;
  const setValue = () => {
    if(selectValue.toString() == alternate) {
      value = inputValue*conversion;
    }
    else {
      value = inputValue;
    }
  }

</script>
<label class="block mb-4">
  <p class="font-bold mb-1">
    <slot/>
  </p>
  <div class="border w-fit flex flex-row items-center rounded-md bg-white shadow-sm px-2">
    <input type="numeric" {name} bind:value={inputValue} on:input={setValue} class="min-w-4 h-8 w-fit text-sm outline-none bg-transparent">
    <select bind:value={selectValue} on:change={setValue} class="bg-transparent outline-none">
      <option>{defaultUnit}</option>
      <option>{alternate}</option>
    </select>
  </div>

</label>
