<script>
  import "../../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import WhatsappWidget from "$lib/components/WhatsappWidget.svelte";
</script>

<Header />
<main class="flex-grow text-poliglotam_black">
  <slot />
</main>
<Footer />

<WhatsappWidget walink="https://walink.co/f4306e" />
