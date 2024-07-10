<script>
  import Members from "$lib/components/Members.svelte";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/about-us";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div
    class="flex flex-col xl:flex-row items-center justify-center min-h-[calc(100vh-300px)] max-w-screen-xl mx-auto p-8 animate-fade-up"
  >
    <!-- svelte-ignore a11y-media-has-caption -->
    <div class="mb-8 xl:mb-0 xl:mr-8">
      <video src="/aboutus.mkv" autoplay muted loop class="w-full h-auto"
        ><track kind="captions" /></video
      >
    </div>
    <p class="text-xl text-center xl:text-left">
      {texts[$lang].text}
    </p>
  </div>
  <Members />
</section>
