<script>
  import { Intro, ToolSection } from '../components/site'
  import { generateName, generateColor } from '../components/utilities'
  import { D20 } from '../components/tools'
</script>


<svelte:head>
	<title>Guide Supplies</title>
</svelte:head>

<Intro>
  <h1>Guide Supplies</h1>
  <p class="text-xl mt-3">Tools for running games with the <a href="https://www.adventure.game?ref=guide-supplies">Quest</a> TTRPG game system.</p>
</Intro>

<ToolSection tool={D20}>
  <h2>twenty-sided die</h2>
  <p>
    In Quest, the only die you need is a trusty twenty-sided. As the Guide, you can ask players to roll when they try to do something risky, or when introducing a bit of chance makes things more fun.
  </p>
  <p><a href="https://www.adventure.game/chance?ref=guide-supplies">Learn more about die rolls in Quest</a></p>
</ToolSection>