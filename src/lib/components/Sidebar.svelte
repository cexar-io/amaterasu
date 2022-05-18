<script>
	import { fly, fade } from 'svelte/transition';

	export let show = null;
	export let nav = [];
</script>

{#if show}
	<nav
		class="fixed top-0 right-0 h-full w-60 bg-black overflow-x-auto z-50"
		transition:fly={{ x: 250, opacity: 1 }}
	>
		<div class="flex p-8 items-center justify-end">
			<button type="button" on:click>
				<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		</div>
		<div class="tracking-wider">
			<ul>
				{#each nav as item}
					<li class="flex content-center px-6 py-3 hover:bg-w-dark-blue">
						<a
							href={item.link}
							class="font-title text-left text-white text-xl uppercase flex-grow focus:outline-none"
							>{item.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
	<div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-40" in:fade out:fade />
{/if}
