<script>
  import { fade, fly } from 'svelte/transition';
  import { settings } from '$lib/utilities/settings';

  export let image_original_url = '';
  export let collection = {};
  export let permalink = '';
  export let owner = {};

  let show = false;
  let price = 0.01;

  function toggleShow() {
    show = !show;
  }
</script>

<!-- <div
  class="relative h-auto w-full aspect-square overflow-hidden"
  on:mouseenter={toggleShow}
  on:mouseleave={toggleShow}>
  {#if owner.address !== settings.owner.toLocaleLowerCase()}
    <div class="absolute bg-white/3 backdrop-blur-lg w-full py-1 font-gotham-thin uppercase text-center top-1/2">
      vendido
    </div>
  {:else}
    {#if show}
      <div class="absolute w-full h-12 bottom-0 bg-gray-med-custom flex items-center px-3" transition:fade={{ duration: 1000 }}>
        <div class="price grow">
          {price}Ξ
        </div>
        <div>
          <a href="{permalink}" target="_blank">
            <img src="/images/logo-os.svg" alt="OpenSea" class="w-7 h-7">
          </a>
        </div>
      </div>
    {/if}
  {/if}
  <img src="{image_original_url ? image_original_url : collection.image_url}" alt="" class="w-full absolute -z-10">
  <img src="{image_original_url ? image_original_url : collection.image_url}" alt="" class="hidden">
</div> -->

<div
  class="relative w-full"
  style="background:rgb(10 10 13)"
  on:mouseenter={toggleShow}
  on:mouseleave={toggleShow}>
  {#if owner.address !== settings.owner.toLocaleLowerCase()}
    <div class="absolute bg-white/3 backdrop-blur-lg w-full py-1 font-gotham-thin uppercase text-center top-1/2">
      vendido
    </div>
  {:else}
    {#if show}
      <div class="absolute w-full h-12 bottom-0 bg-gray-med-custom flex items-center px-3 z-50" transition:fade={{ duration: 1000 }}>
        <div class="price grow">
          {price}Ξ
        </div>
        <div>
          <a href="{permalink}" target="_blank">
            <img src="/images/logo-os.svg" alt="OpenSea" class="w-7 h-7">
          </a>
        </div>
      </div>
    {/if}
  {/if}
  <img src="{image_original_url ? image_original_url : collection.image_url}" alt="" class="absolute w-full h-auto">
  <img src="{image_original_url ? image_original_url : collection.image_url}" alt="" class="invisible w-full h-auto">
</div>
