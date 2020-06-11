<script>
  import Button from './Button.svelte'
  export let tool;
  
  const rerenderTool = () => tool = (tool); // Svelte rerenders on assignment
</script>

<section class="p-4 grid lg:grid-cols-3 gap-4">
  <aside class="pr-4 col-span-1 space-y-3">
    <slot></slot>
  </aside>
  <div class="col-span-2">
    <svelte:component this={tool}/>
  </div>
</section>