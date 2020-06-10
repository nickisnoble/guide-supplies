<script>
  import { Intro } from '../components/site'
  import { generateName, generateColor } from '../components/utilities'
</script>


<svelte:head>
	<title>Guide Tools</title>
</svelte:head>

<Intro>
  <h2 style="color: { generateColor() }">{generateName()}</h2>
  <h1>Guide Tools</h1>
  <p class="text-xl mt-3">Tools for running games with the <a href="https://www.adventure.game?ref=guide-tools">Quest</a> TTRPG game system.</p>
</Intro>
