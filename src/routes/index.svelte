<script>
  import { Intro } from '../components/site'
  import { D20, Namer } from '../components/tools'
</script>


<svelte:head>
	<title>Guide Supplies</title>
</svelte:head>

<Intro>
  <h1>Guide Supplies</h1>
  <p class="text-xl mt-3">Tools for running games with <a href="https://www.adventure.game?ref=guide-supplies">Quest</a>.</p>
</Intro>


<div class="divide-y divide-gray">

  <D20/>
  <Namer/>

</div>