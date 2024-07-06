<script>
  import Animate from "$lib/components/atoms/Animate.svelte";
  import { lang } from "$lib/stores/useLangSetting.js";
  import { texts } from "$lib/translations/header";

  let open = false;
  let subMenuOpen = false;
</script>

<header class="border-t-8 border-poliglotam_orange">
  <Animate type="fade">
    <div class="flex justify-between items-center p-4 lg:px-32">
      <a href="/">
        <img src="/logo.svg" alt="Logo" class="h-8 md:h-12" />
      </a>
      <h1 class="opacity-80 hidden lg:block font-medium">
        {texts[$lang].tagline}
      </h1>
      <div>
        <a href="https://walink.co/f4306e">
          <button class="bg-poliglotam_orange text-white font-medium px-6 py-4">
            {texts[$lang].cta}
          </button>
        </a>
        <select
          name="language"
          id="language"
          bind:value={$lang}
          on:change={console.log($lang)}
          class="hidden md:inline p-2 ml-2 bg-white"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  </Animate>
  <div class="lg:flex justify-center bg-poliglotam_black lg:p-4 text-white">
    <button
      on:click={() => {
        open = !open;
      }}
      class="lg:hidden text-3xl px-4 py-2"
    >
      =
    </button>
    <nav
      class="uppercase hidden lg:flex list-none gap-16 cursor-pointer text-sm tracking-wide"
    >
      <li class="hover:text-poliglotam_orange transition">
        <a href="/">{texts[$lang].menu.home}</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        <a href="/about-us">{texts[$lang].menu.aboutUs}</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        <a href="/languages">{texts[$lang].menu.languages}</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        <a href="/experiences">{texts[$lang].menu.experiences}</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        {texts[$lang].menu.translations}
      </li>
      <li class="hover:text-poliglotam_orange transition">
        {texts[$lang].menu.contact}
      </li>
      <li
        on:mouseenter={() => (subMenuOpen = true)}
        on:mouseleave={() => (subMenuOpen = !subMenuOpen)}
        class="relative cursor-pointer z-50"
      >
        <span>{texts[$lang].menu.terms}</span>
        <span class="ml-1">▼</span>
        <div
          class={`absolute w-48 top-4 bg-poliglotam_black p-4 gap-4 flex-col ${subMenuOpen ? "flex" : "hidden"}`}
        >
          <li class="hover:text-poliglotam_orange transition">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/one-to-one-terms">{texts[$lang].menu.oneToOneTerms}</a
            >
          </li>
          <li class="hover:text-poliglotam_orange transition">
            <a target="_blank" rel="noopener noreferrer" href="/group-terms"
              >{texts[$lang].menu.groupTerms}</a
            >
          </li>
        </div>
      </li>
    </nav>
  </div>

  <div>
    <nav class="lg:grid list-none gap-16 cursor-pointer"></nav>
  </div>
</header>

<div
  class={`absolute top-[147px] bg-poliglotam_black w-full p-4 text-white text-center text-2xl ${open ? "block" : "hidden"} z-10`}
>
  <ul
    class="uppercase flex flex-col gap-4 opacity-75 hover:opacity:100 tracking-wide"
  >
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/">{texts[$lang].menu.home}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/about-us">{texts[$lang].menu.aboutUs}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/languages">{texts[$lang].menu.languages}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/experiences">{texts[$lang].menu.experiences}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/#">{texts[$lang].menu.translations}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/#">{texts[$lang].menu.contact}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="/one-to-one-terms">{texts[$lang].menu.oneToOneTerms}</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="/group-terms">{texts[$lang].menu.groupTerms}</a
      >
    </li>
  </ul>
</div>
