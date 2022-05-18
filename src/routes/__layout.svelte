<script>
	import '../app.css';
	import { settings } from './../utilities/settings';
</script>

<svelte:head>
	<title>{settings.title}</title>
</svelte:head>

<slot />
