<script>
  import * as transition from "svelte/transition";
  import { inview } from "svelte-inview";

  export let type;

  const animation = transition[type];

  let isInView;
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "0%" }}
  on:change={({ detail }) => {
    isInView = detail?.inView || true;
  }}
>
  {#if isInView}
    <div in:animation={{ delay: 250, duration: 500, y: 100, opacity: 0 }}>
      <slot />
    </div>
  {/if}
</div>
