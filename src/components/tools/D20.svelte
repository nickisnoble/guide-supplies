<script>
  import { Button, Display, ToolSection } from '../site'
  import { d } from '../utilities'

  let result = d(20);

  $: consequence =
    result === 20 ? 
      "triumph" :

    result === 1 ? 
      "catastrophe" :

    result <=19 && result > 10 ? 
      "success" :

    result <=10 && result > 5 ? 
      "tough choice" :

    // Otherwise...
      "failure"

</script>

<ToolSection>

  <div slot="description" class="space-y-3">
    <h2>twenty-sided die</h2>
    <p>
      In Quest, the only die you need is a trusty twenty-sided. As the Guide, you can ask players to roll when they try to do something risky, or when introducing a bit of chance makes things more fun.
    </p>
    <p><a href="https://www.adventure.game/chance?ref=guide-supplies">Learn more about die rolls in Quest</a></p>
  </div>

  <Display>
    <h1 class="text-5xl leading-none">{result}</h1>
    <h3 class="mb-3 leading-none">{consequence}</h3>

    <Button handler={ () => result = d(20) } label="Reroll!" />
  </Display>

</ToolSection>