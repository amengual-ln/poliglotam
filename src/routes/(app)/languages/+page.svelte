<script>
  import Members from "$lib/components/Members.svelte";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center">
    <div class="max-w-[80%] pt-12 xl:pl-48">
      <p class="text-xl text-center animate-fade-up">
        What makes us unique is our ability to adapt languages to the way each
        student learns. Our courses are designed by polyglot linguists who will
        make your learning experience unique.
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
    <p>
      Enroll in our courses and become part of our community, where you can
      attend our events and travel with your classmates and teachers.
    </p>

    <ul class="uppercase grid grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      <li class="hover:text-poliglotam_orange text-lg">
        <a href="/languages/german">GERMAN</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/czech">czech</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/chinese">chinese</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/korean">korean</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/croatian">croatian</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/spanish">spanish</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/french">french</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/greek">greek</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/hindi">hindi</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/dutch">dutch</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/english">english</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/icelandic">icelandic</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/italian">italian</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/japanese">japanese</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/classical-latin">classical latin</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/portuguese">portuguese</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/romanian">romanian</a>
      </li>
      <li class="hover:text-poliglotam_orange">
        <a href="/languages/russian">russian</a>
      </li>
    </ul>

    <p>
      Don't just learn the language, <span class="text-poliglotam_orange"
        >live it!</span
      >
    </p>
    <br />
    <p>Ask about our official exam preparation and certification courses.</p>
  </div>

  <Members />
</section>
