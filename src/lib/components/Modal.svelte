<script>
	import { fly, fade } from 'svelte/transition';

	export let open = false;
</script>

{#if open}
	<div class="max-w-2xl mx-auto z-40 modal" in:fade out:fade>
		<div
			class="bg-black bg-opacity-80 flex overflow-x-hidden overflow-y-auto fixed h-full top-0 left-0 right-0 z-40 justify-center items-center"
		>
			<div class="flex items-center justify-center w-full max-w-3xl min-h-screen px-4">
				<div class="bg-black border border-white border-opacity-30 min-w-full" transition:fly={{ y: 50, duration: 500 }}>
					<div class="relative p-10 max-h-min overflow-y-auto no-scrollbar">
						<button
							type="button"
							class="text-white bg-transparent transition-all duration-500 text-sm p-1.5 ml-auto inline-flex items-center absolute top-5 right-5"
							on:click={() => {
								open = false;
							}}
						>
							<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
