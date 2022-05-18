<script>
  import { fade, fly } from 'svelte/transition';

  let show = false;
  let price = 0.01;

  function toggleShow() {
    show = !show;
  }
</script>

<div
  class="relative bg-black h-auto w-full aspect-square"
  on:mouseenter={toggleShow}
  on:mouseleave={toggleShow}>
  {#if show}
    <button
      type="button"
      class="absolute px-3 border rounded-full font-gotham-thin top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      transition:fly={{ y: 30, duration: 1000 }}
      on:click>
      Beneficios
    </button>
    <div class="absolute w-full h-12 bottom-0 bg-gray-med-custom flex items-center px-3" transition:fade={{ duration: 1000 }}>
      <div class="price grow">
        {price}Ξ
      </div>
      <div>
        <a href="https://opensea.io" target="_blank">
          <img src="/images/logo-os.svg" alt="OpenSea" class="w-7 h-7">
        </a>
      </div>
    </div>
  {/if}
</div>
