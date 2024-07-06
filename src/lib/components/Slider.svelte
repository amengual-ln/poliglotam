<script>
  import { register } from "swiper/element/bundle";
  register();

  export let images;
</script>

<swiper-container slides-per-view="1" autoplay-delay="5000" loop>
  {#each images as image}
    <swiper-slide class="drop-shadow-xl">
      <img
        src={image}
        alt="One of our experiences"
        class="aspect-square lg:p-8"
      />
    </swiper-slide>
  {/each}
</swiper-container>
