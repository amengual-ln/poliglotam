<script>
  import Members from "$lib/components/Members.svelte";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <div
    class="grid place-content-center xl:grid-cols-2 min-h-[calc(100vh-300px)] max-w-screen-xl mx-auto p-8 animate-fade-up"
  >
    <div></div>
    <p class="text-xl">
      We are an institution formed by specialized language teachers with the
      purpose of providing teaching that adapts to each person's way of
      learning, using methods that make language acquisition a dynamic,
      enriching, and effective process.
    </p>
  </div>
  <Members />
</section>
