<script>
  import { generateName } from '../utilities'
  import { Display, Button, ToolSection } from '../site'

  let name = generateName();
</script>

<ToolSection>

  <div slot="description" class="space-y-3">
    <h2>Name Generator</h2>
    <p>
      Names are crucial to identify your characters, objects, and locations – but it can be really hard to come up with them on the fly! This tool will help you come up with something fantasy-esque in a pinch.
    </p>
  </div>

  <Display>
    <h1 class="text-3xl md:text-5xl leading-snug">{name}</h1>
    <Button handler={ () => name = generateName() } label="Another!" />
  </Display>

</ToolSection>