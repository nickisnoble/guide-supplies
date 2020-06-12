<script>
  export let handler;
  export let label;
</script>

<button 
  on:click={handler()}
  class="px-3 py-1 font-heading text-3 bg-black text-white hover:bg-gold active:text-black duration-300 rounded-md"
>
  {label}
</button>

<style>
  button {
    transition-property: background-color;
  }
</style>