<script>
  let lang = "es";
  let studentName = "";
  let accepted = false;
  export let form;

  import { texts } from "$lib/translations/group-terms";
</script>

<section>
  <div class="flex justify-center">
    <select
      name="language"
      id="language"
      value={lang}
      on:change={(event) => (lang = event.target.value)}
      class="lg:inline p-2 ml-2 mb-8 bg-white"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  </div>

  <h1 class="text-center text-xl font-medium">{@html texts[lang].title}</h1>

  <div class="mt-6 mb-4">
    {#each Object.entries(texts[lang].welcome.items) as [key, item]}
      <p>{@html item}</p>
    {/each}
  </div>

  {#each Object.entries(texts[lang].lists) as [key, list]}
    <h3>{list.title}</h3>

    <ul class="py-2 list-disc ml-8">
      {#each list.items as item}
        <li>{@html item}</li>
      {/each}
    </ul>
  {/each}

  <p>{@html texts[lang].thankYou}</p>

  <hr class="my-4" />

  <form method="POST" class="max-w-screen-lg mx-auto">
    <div class="grid gap-4">
      {#if !form?.success}
        <label for="student-name" class="-mb-2">
          {texts[lang].form.fullName}
        </label>
        <input
          type="text"
          name="student-name"
          value={studentName}
          on:change={(event) => (studentName = event.target.value)}
          class="border px-3 py-1 outline-[#E05900]/50"
        />
        <div class="flex items-center lg:items-baseline justify-center">
          <input
            type="checkbox"
            value={accepted}
            on:change={() => (accepted = !accepted)}
            id="accepted"
            class="cursor-pointer scale-150 accent-[#E05900]"
          />
          <label for="accepted" class="p-4 cursor-pointer text-lg"
            >{texts[lang].form.checkbox}</label
          >
        </div>
        <button
          type="submit"
          disabled={!accepted || studentName.trim() === ""}
          class="bg-[#E05900]/80 text-white py-2 w-48 mx-auto hover:bg-[#E05900] disabled:bg-[#E05900]/50"
          >{texts[lang].form.submit}</button
        >
      {/if}
      {#if form?.success}
        <div class="bg-[#E05900]/80 text-white text-center py-2 w-48 mx-auto">
          {@html texts[lang].form.submitSuccess}
        </div>
      {/if}
    </div>
  </form>
</section>
