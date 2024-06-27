<script>
  let open = false;
  let subMenuOpen = false;
</script>

<header class="border-t-8 border-[#E05900]">
  <div class="flex justify-between items-center p-4 lg:px-32">
    <a href="/">
      <img src="/logo.png" alt="Logo" class="h-12 lg:h-auto" />
    </a>
    <h1 class="opacity-80 hidden lg:block font-medium">THE POLYGLOT METHOD</h1>
    <div>
      <button class="bg-[#E05900] text-white font-medium px-6 py-4"
        >START TODAY</button
      >
      <select
        name="language"
        id="language"
        class="hidden lg:inline p-2 ml-2 bg-white"
      >
        <option value="english">English</option>
        <option value="spanish">Español</option>
      </select>
    </div>
  </div>
  <div class="lg:flex justify-center bg-[#232323] lg:p-4 text-white">
    <button
      on:click={() => {
        open = !open;
      }}
      class="lg:hidden text-3xl px-4 py-2"
    >
      =
    </button>
    <nav class="hidden lg:flex list-none gap-16 cursor-pointer">
      <li class="hover:text-[#E05900] transition"><a href="/">HOME</a></li>
      <li class="hover:text-[#E05900] transition">
        <a href="/about-us">ABOUT US</a>
      </li>
      <li class="hover:text-[#E05900] transition">LANGUAGES</li>
      <li class="hover:text-[#E05900] transition">EXPERIENCES</li>
      <li class="hover:text-[#E05900] transition">TRANSLATIONS</li>
      <li class="hover:text-[#E05900] transition">INFORMATION</li>
      <li class="hover:text-[#E05900] transition">CONTACT</li>
      <li
        on:mouseenter={() => (subMenuOpen = true)}
        on:mouseleave={() => (subMenuOpen = !subMenuOpen)}
        class="relative cursor-pointer"
      >
        <a href="/#ceo-de-tu-vida">TERMS</a>
        <span class="ml-1">▼</span>
        <div
          class={`absolute w-48 top-6 bg-[#232323] p-4 gap-4 flex-col ${subMenuOpen ? "flex" : "hidden"}`}
        >
          <li class="hover:text-[#E05900] transition">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/one-to-one-terms">ONE-TO-ONE TERMS</a
            >
          </li>
          <li class="hover:text-[#E05900] transition">
            <a target="_blank" rel="noopener noreferrer" href="/group-terms"
              >GROUP TERMS</a
            >
          </li>
        </div>
      </li>
    </nav>
  </div>

  <div>
    <nav class=" lg:grid list-none gap-16 cursor-pointer"></nav>
  </div>
</header>

<div
  class={`absolute top-[140px] bg-[#232323] w-full p-4 text-white text-center text-2xl ${open ? "block" : "hidden"} z-10`}
>
  <ul class="flex flex-col gap-4 opacity-75 hover:opacity:100">
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
        href="/#">LANGUAGES</a
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
