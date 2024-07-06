<script>
  import Members from "$lib/components/Members.svelte";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/languages";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center">
    <div class="max-w-[80%] pt-12 xl:pl-48">
      <p class="text-xl text-center animate-fade-up">
        {texts[$lang].heroText}
      </p>
    </div>
    <div class="overflow-hidden">
      <img
        src="/languages/hero.png"
        alt="Languages"
        class="max-h-[500px] scale-125 pt-12 animate-fade-up"
      />
    </div>
  </div>
  <div class="bg-poliglotam_black text-white text-center text-xl p-8">
    <p>{texts[$lang].enroll}</p>

    <ul class="uppercase grid grid-cols-2 lg:grid-cols-3 gap-12 my-12 lg:mx-12">
      <a
        href="/languages/german"
        class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
      >
        <img
          src="/languages/german/german-flag.webp"
          class="h-8 -mt-1"
          alt=""
        />
        <li>{texts[$lang].german}</li>
      </a>
      <li>
        <a
          href="/languages/czech"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/czech/czech-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].czech}
        </a>
      </li>
      <li>
        <a
          href="/languages/chinese"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/chinese/chinese-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].chinese}
        </a>
      </li>
      <li>
        <a
          href="/languages/korean"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/korean/korean-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].korean}
        </a>
      </li>
      <li>
        <a
          href="/languages/croatian"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/croatian/croatian-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].croatian}
        </a>
      </li>
      <li>
        <a
          href="/languages/spanish"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/spanish/spanish-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].spanish}
        </a>
      </li>
      <li>
        <a
          href="/languages/french"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/french/french-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].french}
        </a>
      </li>
      <li>
        <a
          href="/languages/greek"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/greek/greek-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].greek}
        </a>
      </li>
      <li>
        <a
          href="/languages/hindi"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/hindi/hindi-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].hindi}
        </a>
      </li>
      <li>
        <a
          href="/languages/dutch"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/dutch/dutch-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].dutch}
        </a>
      </li>
      <li>
        <a
          href="/languages/english"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/english/english-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].english}
        </a>
      </li>
      <li>
        <a
          href="/languages/icelandic"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/icelandic/icelandic-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].icelandic}
        </a>
      </li>
      <li>
        <a
          href="/languages/italian"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/italian/italian-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].italian}
        </a>
      </li>
      <li>
        <a
          href="/languages/japanese"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/japanese/japanese-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].japanese}
        </a>
      </li>
      <li>
        <a
          href="/languages/classical-latin"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/classical-latin/classical-latin-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang]["classical-latin"]}
        </a>
      </li>
      <li>
        <a
          href="/languages/portuguese"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/portuguese/portuguese-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].portuguese}
        </a>
      </li>
      <li>
        <a
          href="/languages/romanian"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/romanian/romanian-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].romanian}
        </a>
      </li>
      <li>
        <a
          href="/languages/russian"
          class="hover:text-poliglotam_orange grid place-items-center items-center gap-4 text-lg"
        >
          <img
            src="/languages/russian/russian-flag.webp"
            class="h-8 -mt-1"
            alt=""
          />
          {texts[$lang].russian}
        </a>
      </li>
    </ul>

    <p>
      {@html texts[$lang].dontJustLearn}
    </p>
    <br />
    <p>{texts[$lang].askForOur}</p>
  </div>

  <Members />
</section>
