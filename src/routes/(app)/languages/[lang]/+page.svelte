<script>
  import { page } from "$app/stores";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/languages";

  const language = $page.params.lang;
  const translations = texts[language];

  let imageCount = 0;

  const updateCounter = () => {
    imageCount++;
    return imageCount;
  };
</script>

<section>
  <div class="flex flex-col items-center gap-8">
    <h1
      class="uppercase text-poliglotam_orange text-3xl text-center font-[600] pt-8"
    >
      {translations[$lang].title}
    </h1>
    <img
      src="/languages/{language}-flag.webp"
      alt="Language flag"
      class="w-48"
    />
    <h2>{translations[$lang].difficulty}</h2>
  </div>

  <div class="flex justify-center py-8">
    <img src="/languages/{language}-map.webp" alt="Map" />
  </div>

  <div class="grid gap-2 text-lg max-w-screen-xl mx-auto text-balance">
    {#each translations[$lang].paragraphs as paragraph}
      <div class="flex gap-4">
        <div>
          <h3>{paragraph.title || ""}</h3>
          <p>{paragraph.text}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex justify-center py-8">
    <iframe
      width="1120"
      height="630"
      src={translations.video}
      title="WIKITONGUES: speaking {language}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</section>
