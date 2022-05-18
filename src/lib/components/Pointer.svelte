<script>
  import { onMount } from 'svelte';

  let pointer;

  onMount(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      let mousePosX = 0;
      let mousePosY = 0;

      document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
      };

      let delay = 6,
          revisedMousePosX = 0,
          revisedMousePosY = 0;

      function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        if (pointer) {
          pointer.style.top = revisedMousePosY + "px";
          pointer.style.left = revisedMousePosX + "px";
        }
      }
      delayMouseFollow();
    }
  });
</script>

<div bind:this={pointer} class="pointer"></div>
