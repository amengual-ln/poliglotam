<script>
  import Animate from "$lib/components/atoms/Animate.svelte";
  import ExamPreparation from "$lib/components/icons/ExamPreparation.svelte";
  import SmallGroups from "$lib/components/icons/SmallGroups.svelte";
  import FlexibleSchedules from "$lib/components/icons/FlexibleSchedules.svelte";
  import PoliglotamMethodology from "$lib/components/icons/PoliglotamMethodology.svelte";
  import StudentAdaptation from "$lib/components/icons/StudentAdaptation.svelte";
  import Immersion from "$lib/components/icons/Immersion.svelte";

  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/home";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <img src="/home-{$lang}poliglotam.webp" alt="Hero" class="lg:aspect-[16/7] object-cover" />
</section>
<div class="bg-[#d57927] text-white py-8">
  <section
    class="max-w-screen-2xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 items-center text-center gap-8"
  >
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <SmallGroups color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].smallGroups.title}</h2>
        <p>{texts[$lang].smallGroups.text}</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <PoliglotamMethodology color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].poliglotamMethodology.title}</h2>
        <p>{texts[$lang].poliglotamMethodology.text}</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <FlexibleSchedules color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].flexibleSchedules.title}</h2>
        <p>{texts[$lang].flexibleSchedules.text}</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <StudentAdaptation color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].studentAdaptation.title}</h2>
        <p>{texts[$lang].studentAdaptation.text}</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <ExamPreparation color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].examPreparation.title}</h2>
        <p>{texts[$lang].examPreparation.text}</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <Immersion color="white" />
        </div>
        <h2 class="mb-2">{texts[$lang].immersion.title}</h2>
        <p>{texts[$lang].immersion.text}</p>
      </article>
    </Animate>
  </section>
</div>
<section>
  <img src="/home-{$lang}metas.webp" alt="Logra tus metas" class="xl:aspect-[16/7] xl:object-[0_-25vh] object-cover" />
</section>
