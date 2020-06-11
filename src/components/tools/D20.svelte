<script>
  import { d } from '../utilities'
  import { Display, Button } from '../site'

  $: result = d(20);
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


  const roll = () => result = d(20);
</script>

<Display>
  <h1 class="text-5xl leading-none">{result}</h1>
  <h3 class="mb-3 leading-none">{consequence}</h3>

  <Button label="reroll" handler={roll}></Button>
</Display>