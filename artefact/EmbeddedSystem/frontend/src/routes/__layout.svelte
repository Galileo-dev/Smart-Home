<script>
	import '../App.css';
	import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<Navbar />

<svelte:body />
<div id="main">
	<slot />
</div>

<style>
	#main {
		transition: margin 200ms ease;
	}

	@media only screen and (min-width: 600px) {
		#main {
			margin-left: 5rem;
		}
	}

	/* For mobile devices.
	Moves navbar to bottom of screen */
	@media only screen and (max-width: 600px) {
		#main {
			overflow-y: scroll;
			height: calc(100% - 5rem);
		}

		:global(body) {
			overflow: hidden;
		}
	}

	:global(body) {
		height: 100%;
		display: flex;
	}
</style>
