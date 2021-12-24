<script>

</script>

<div class="font-body bg-black text-white h-screen w-screen overflow-hidden p-1 flex flex-col">
  <main class="flex-1 text-black bg-white rounded-lg border border-gray-200">
    <slot />
  </main>

  <footer class="footer flex flex-row px-2 pt-1">
    <nav class="flex-1">
      this is the nav
    </nav>

    <p class="flex-1 font-heading text-center self-center">
      <a class="font-display font-bold border-none" href="https://www.adventure.game/shop?ref=guide-supplies">Quest</a> is a trademark of The&nbsp;Adventure&nbsp;Guild,&nbsp;LLC.
    </p>

    <footer class="flex-1 place-content-end flex gap-2 align-baseline">
      <a class="block self-baseline" href="/about">About this site</a>
      <p class="font-heading lowercase">&copy; 2020-{new Date().getFullYear()} MINIWARE, LLC</p>
    </footer>
  </footer>

</div>
