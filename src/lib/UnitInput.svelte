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


  $: inputValue, () => {
    
  }




</script>
<label class="block">
  <p class="font-bold">
    <slot/>
  </p>
  <div>
    <input type="number" {name} bind:value={inputValue} on:input={setValue} class="min-w-4 w-fit border rounded-md text-sm px-2 py-1 outline-none">
    <select bind:value={selectValue} on:change={setValue} class="">
      <option>{defaultUnit}</option>
      <option>{alternate}</option>
    </select>
  </div>

</label>
