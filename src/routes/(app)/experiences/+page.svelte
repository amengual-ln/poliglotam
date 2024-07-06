<script>
  import Slider from "$lib/components/Slider.svelte";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/experiences"

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
  <div class="grid">
    <p>{texts[$lang].newWay}</p>
    <Slider images={slider1} />
  </div>
  <div class="grid">
    <Slider images={slider2} />
    <p>{texts[$lang].travelLearning}</p>
  </div>
</section>
