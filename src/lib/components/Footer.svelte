<script>
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/footer";
</script>

<footer
  class="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-around items-center gap-6 bg-poliglotam_black text-white text-gray-200 text-center p-8 font-medium bottom-0"
>
  <img src="/logo.png" alt="Logo" class="h-12" />
  <h2 class="text-white/50">
    {@html texts[$lang].subTagline}
  </h2>
  <span class="text-center lg:text-end">2024</span>
</footer>
