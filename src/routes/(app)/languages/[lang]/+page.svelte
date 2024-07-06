<script>
  import { page } from "$app/stores";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/languages";

  import Animate from "$lib/components/atoms/Animate.svelte";

  const language = $page.params.lang;
  const translations = texts[language];
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section class="text-poliglotam_black">
  <Animate type="fly">
    <section
      class="grid max-w-[1440px] mx-auto {translations[$lang].difficulties
        .length !== 0 &&
      (translations[$lang].weeklyHours15 || translations[$lang].weeklyHours3)
        ? 'lg:grid-cols-3'
        : 'lg:grid-cols-2'} gap-4 pt-12"
    >
      {#if translations[$lang]?.difficulties.length !== 0}
        <div class="flex flex-col items-center gap-8 pt-4">
          <h2>{translations[$lang].difficulty}</h2>
          <div class="mt-12">
            {#each translations[$lang].difficulties as difficulty}
              <div class="flex gap-2 items-center">
                <h3 class="uppercase text-lg">
                  {difficulty.name}:
                </h3>
                <span class="text-2xl font-[600] text-poliglotam_orange">
                  {difficulty.value}%</span
                >
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div class="flex flex-col items-center gap-8 order-first lg:order-none">
        <h1
          class="uppercase text-poliglotam_orange text-3xl text-center font-[600]"
        >
          {translations[$lang].title}
        </h1>
        <img
          src="/languages/{language}/{language}-flag.webp"
          alt="Language flag"
          class="w-48"
        />
      </div>

      {#if translations[$lang].weeklyHours15 || translations[$lang].weeklyHours3}
        <div class="flex flex-col items-center text-center gap-8 p-4">
          <h2>{translations[$lang].learningTime}</h2>
          <h3 class="text-5xl text-poliglotam_orange">15</h3>
          <p class="text-xl">{translations[$lang].weeklyHours15}</p>

          <h3 class="text-5xl text-poliglotam_orange">3</h3>
          <p class="text-xl">{translations[$lang].weeklyHours3}</p>
        </div>
      {/if}
    </section>

    <!-- CONTENT -->

    <section class="text-xl mt-12 p-8 max-w-[1440px] mx-auto">
      {@html translations[$lang].content}
    </section>

    {#if translations.video !== ""}
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
    {/if}
  </Animate>
</section>
