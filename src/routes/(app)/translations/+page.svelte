<script>
  import { lang } from "$lib/stores/useLangSetting.js"
  import { texts } from "$lib/translations/translations"
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div class="flex flex-col xl:flex-row items-center justify-center min-h-[calc(100vh-300px)] max-w-screen-xl mx-auto p-8 animate-fade-up">
    <!-- svelte-ignore a11y-media-has-caption -->
    <div class="mb-8 xl:mb-0 xl:mr-8"><img src="/Translations.png" alt="Hero"/></div>
    <p class="text-xl text-center xl:text-left">
      {texts[$lang].text}
    </p>
  </div>
</section>
