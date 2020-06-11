<script>
  export let handler;
  export let label;
</script>

<button 
  on:click={handler()}
  class="px-3 py-1 font-heading text-3 bg-black text-white rounded-md"
>
  {label}
</button>