<script>
  import { register } from "swiper/element/bundle";
  register();

  export let images;
</script>

<swiper-container slides-per-view="3" autoplay-delay="5000" loop>
  {#each images as image}
    <swiper-slide>
      <article class="h-96 w-96 p-4 drop-shadow-lg">
        <img
          src={image}
          alt="One of our experiences"
          class="aspect-16/9 overflow-hidden"
        />
      </article>
    </swiper-slide>
  {/each}
</swiper-container>
