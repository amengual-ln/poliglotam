<script>
  import Members from "$lib/components/Members.svelte";
  import { lang } from "$lib/stores/useLangSetting.js"
  import { texts } from "$lib/translations/about-us"
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div
    class="grid place-content-center xl:grid-cols-2 min-h-[calc(100vh-300px)] max-w-screen-xl mx-auto p-8 animate-fade-up"
  >
    <div></div>
    <p class="text-xl">
      {texts[$lang].text}
    </p>
  </div>
  <Members />
</section>
