<template lang="pug">
.block-self-host.mx-auto.mt-4(class="md:w-5/6 lg:w-3/4 xl:w-1/2")
  n-h1 Self hosting this page
  n-p Self-hosting this page is very easy thanks to the amazing #[n-a(href="https://redbean.dev/" target="_blank") redbean server],&nbsp;
    | which itself is based on the even greater #[n-a(href="https://justine.lol/cosmopolitan/index.html" target="_blank") cosmopolitan libc]. It brings the following features:
  n-ul.list-disc
    n-li The same binary works on Linux, Mac, Windows, FreeBSD, OpenBSD, NetBSD, and can even be booted from BIOS!
      n-ul.list-disc
        n-li For more details on this, check out the #[n-a(href="https://justine.lol/ape.html" target="_blank") αcτµαlly pδrταblε εxεcµταblε] blog post.
    n-li The server has #[n-a(href="https://redbean.dev/#benchmark" target="_blank") great performance] and can be used just as well in a desktop application as in a very complex internet-facing scalable platform. No need for nginx or similar!
    n-li If you're up for it, the whole thing is even extendable and programmable through a #[n-a(href="https://redbean.dev/#lua" target="_blank") LUA interface]. And all of this is just the beginning!
  n-p You can download a finished executable with this exact build of my website through this button:
  .download-container.py-12.text-center
    a(href="/server.com")
      .download-link
        n-button.download(type="primary" size="large")
          i-feather-download
          | Download
          i-feather-download
  n-p It's automatically generated during the #[n-a(href="https://github.com/TimonLukas/timonlukas.github.io/blob/main/.github/workflows/main.yml" target="_blank") build workflow], after the Vite project is generated, but before the pages are uploaded.&nbsp;
    | In case you're interested in implementing something similar, check out my Github Action #[n-a(href="https://github.com/TimonLukas/action-static-redbean" target="_blank") for generating a redbean executable]! It's pretty easy to add.
</template>

<style lang="sass" scoped>
@keyframes logo-rotate
  0%
    transform: rotate(20deg)
  50%
    transform: rotate(-20deg)
  100%
    transform: rotate(20deg)

@keyframes logo-scale
  0%
    transform: scale(1.65)
  50%
    transform: scale(1.35)
  100%
    transform: scale(1.65)

.block-self-host
  .n-button
    background: var(--n-color)

  .download-link
    animation: logo-scale 1s infinite

  .download
    animation: logo-rotate 3s infinite

    svg:first-child
      margin-right: 1rem

    svg:last-child
      margin-left: 1rem
</style>
