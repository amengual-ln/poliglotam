<script>
  let open = false;
  let subMenuOpen = false;

  import { lang } from "$lib/stores/useLangSetting.js";
</script>

<header class="border-t-8 border-poliglotam_orange">
  <div class="flex justify-between items-center p-4 lg:px-32">
    <a href="/">
      <img src="/logo.png" alt="Logo" class="h-12 lg:h-auto" />
    </a>
    <h1 class="opacity-80 hidden lg:block font-medium">THE POLYGLOT METHOD</h1>
    <div>
      <a href="/contact">
        <button class="bg-poliglotam_orange text-white font-medium px-6 py-4">
          START TODAY
        </button>
      </a>
      <select
        name="language"
        id="language"
        bind:value={$lang}
        on:change={console.log($lang)}
        class="hidden lg:inline p-2 ml-2 bg-white"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  </div>
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
      class="hidden lg:flex list-none gap-16 cursor-pointer text-sm tracking-wide"
    >
      <li class="hover:text-poliglotam_orange transition">
        <a href="/">HOME</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        <a href="/about-us">ABOUT US</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">
        <a href="/languages">LANGUAGES</a>
      </li>
      <li class="hover:text-poliglotam_orange transition">EXPERIENCES</li>
      <li class="hover:text-poliglotam_orange transition">TRANSLATIONS</li>
      <li class="hover:text-poliglotam_orange transition">CONTACT</li>
      <li
        on:mouseenter={() => (subMenuOpen = true)}
        on:mouseleave={() => (subMenuOpen = !subMenuOpen)}
        class="relative cursor-pointer z-50"
      >
        <span>TERMS</span>
        <span class="ml-1">▼</span>
        <div
          class={`absolute w-48 top-4 bg-poliglotam_black p-4 gap-4 flex-col ${subMenuOpen ? "flex" : "hidden"}`}
        >
          <li class="hover:text-poliglotam_orange transition">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/one-to-one-terms">ONE-TO-ONE TERMS</a
            >
          </li>
          <li class="hover:text-poliglotam_orange transition">
            <a target="_blank" rel="noopener noreferrer" href="/group-terms"
              >GROUP TERMS</a
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
  <ul class="flex flex-col gap-4 opacity-75 hover:opacity:100 tracking-wide">
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/">HOME</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/about-us">ABOUT US</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/languages">LANGUAGES</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/#">EXPERIENCES</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/#">TRANSLATIONS</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        href="/#">CONTACT</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="/one-to-one-terms">ONE TO ONE TERMS</a
      >
    </li>
    <li>
      <a
        on:click={() => {
          open = !open;
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="/group-terms">GROUP TERMS</a
      >
    </li>
  </ul>
</div>
