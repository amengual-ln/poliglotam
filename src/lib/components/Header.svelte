<script>
  let open = false;
</script>

<header class="border-t-8 border-[#E05900]">
  <div class="flex justify-between items-center p-4 lg:px-32">
    <img src="/logo.png" alt="Logo" class="h-12 lg:h-auto" />
    <h1 class="opacity-80 hidden lg:block font-medium">
      EL MÉTODO DE UN POLÍGLOTA
    </h1>
    <div>
      <button class="bg-[#E05900] text-white font-medium px-6 py-4"
        >COMIENZA HOY</button
      >
      <select
        name="language"
        id="language"
        class="hidden lg:inline p-2 ml-2 bg-white"
      >
        <option value="spanish">Español</option>
        <option value="english">English</option>
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
      <li><a href="/">HOME</a></li>
      <li><a href="/about-us">ABOUT US</a></li>
      <li>LANGUAGES</li>
      <li>EXPERIENCES</li>
      <li>TRANSLATIONS</li>
      <li>INFORMATION</li>
      <li>CONTACT</li>
    </nav>
  </div>
</header>
