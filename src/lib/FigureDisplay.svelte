<script lang="ts">
  export let value: number;
  export let unit: string = "";
</script>

<div class="bg-white flex flex-col items-center shadow-sm min-w-20 w-fit px-2 py-1 rounded-md border-2">
  <p class="font-bold"><slot/></p>
  <p>{value.toFixed(2)}{unit}</p>
</div>