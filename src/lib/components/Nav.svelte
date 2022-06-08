<script>
  import Sidebar from './Sidebar.svelte';

  let show = false;
  const nav = [
    { text: 'bar', link: '#bar' },
    { text: 'membresia', link: '#membresia' },
    { text: 'nft', link: '#nft' }
  ]

  function toggleSidebar() {
    show = !show;
  }
</script>

<nav class="w-full">
  <div class="w-full">
    <div class="flex items-center">
      <div class="grow md:flex">
        <img src="/images/logo.svg" alt="Amaterasu" class="hidden md:inline w-56">
        <img src="/images/logo-mobile.svg" alt="Amaterasu" class="md:hidden w-32 ml-10">
      </div>
      <div class="flex-none">
        <ul class="hidden md:flex uppercase gap-10">
          <li><a href="#bar">bar</a></li>
          <li><a href="#membresia">membresia</a></li>
          <li><a href="#nft">nft</a></li>
        </ul>
        <div class="md:hidden flex items-center">
          <button type="button" class="m-8" on:click={toggleSidebar}>
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>

<Sidebar {show} {nav} on:click={toggleSidebar} />