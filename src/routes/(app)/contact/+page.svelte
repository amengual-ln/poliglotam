<script>
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/contact";
</script>

<section class="grid lg:grid-cols-2 items-start max-w-[1440px] mx-auto text-xl animate-fade-up lg:mt-6">
  <div class="grid gap-4 p-8">
    <h2 class="text-center lg:text-left">{@html texts[$lang].title}</h2>
    <p>{@html texts[$lang].text}</p>
  </div>
  <div class="flex justify-center lg:justify-start">
    <iframe
      title="Contact form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfLZuuP5wxr4jAkFvM9n7hlM2sceAcV6v0EkiikDaS0BOZobg/viewform?embedded=true"
      style="border: 0; width: 90vw;"
      class="w-[90vw] h-[130vh] lg:h-[110vh] pt-2"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
</section>
