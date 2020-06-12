<script>
  import Button from './Button.svelte'
  export let tool;
  
  const rerenderTool = () => tool = (tool); // Svelte rerenders on assignment
</script>

<section class="px-4 py-5 grid md:grid-cols-3 gap-4">
  <aside class="pr-4 col-span-1 space-y-3 text-lg">
    <slot></slot>
  </aside>
  <div class="col-span-2">
    <svelte:component this={tool}/>
  </div>
</section>