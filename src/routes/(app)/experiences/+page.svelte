<script>
  import Slider from "$lib/components/Slider.svelte";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/experiences";

  const slider1 = [
    "/experiences/experience1.webp",
    "/experiences/experience2.webp",
    "/experiences/experience3.webp",
    "/experiences/experience4.webp",
    "/experiences/experience5.webp",
    "/experiences/experience6.webp",
    "/experiences/experience7.webp",
    "/experiences/experience8.webp",
    "/experiences/experience9.webp",
    "/experiences/experience10.webp",
  ];
  const slider2 = [
    "/experiences/experience11.webp",
    "/experiences/experience12.webp",
    "/experiences/experience13.webp",
    "/experiences/experience14.webp",
    "/experiences/experience15.webp",
    "/experiences/experience16.webp",
    "/experiences/experience17.webp",
    "/experiences/experience18.webp",
    "/experiences/experience19.webp",
    "/experiences/experience20.webp",
  ];
</script>

<section>
  <section class="bg-poliglotam_black/20">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 p-8 place-items-center items-center max-w-[1440px] mx-auto animate-fade-up"
    >
      <div class="grid gap-4 mb-8">
        {@html texts[$lang].newWay}
      </div>
      <div class="max-w-[500px] overflow-hidden">
        <Slider images={slider1} />
      </div>
    </div>
  </section>
  <section class="animage-fade-up">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 p-8 place-items-center items-center max-w-[1440px] mx-auto animate-fade-up"
    >
      <div class="max-w-[500px] overflow-hidden order-last lg:order-none">
        <Slider images={slider2} />
      </div>
      <div class="grid gap-4 my-8">
        {@html texts[$lang].travelLearning}
      </div>
    </div>
  </section>
</section>
