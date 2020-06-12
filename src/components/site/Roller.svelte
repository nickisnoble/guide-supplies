<script>
  import { createEventDispatcher, onMount } from 'svelte';

  import { d } from '../utilities'
  import Button from './Button.svelte'

  const dispatch = createEventDispatcher();

  let result;

  function roll() {
    result = d(20);

    dispatch('roll', {
      result
    });
  }

  onMount(() => roll());

  
</script>

<Button label="reroll" handler={roll}></Button>