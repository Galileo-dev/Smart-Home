<script>
	import PrimaryBTN from '$lib/components/button.svelte';
	import CPU from 'phosphor-svelte/lib/CPU';
	import { goto } from '$app/navigation';
</script>

<div class="container">
	<div class="left">
		<h2>Get Yours Today</h2>
		<PrimaryBTN text="Learn More" on:click={() => goto('/product')} />
	</div>
	<div class="image">
		<CPU size={200} weight="duotone" />
	</div>
</div>

<style>
	.left {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		align-items: center;
		justify-content: center;
		padding: 2em;
		width: 100%;
	}

	.container {
		display: flex;
		align-content: space-between;
		width: 100%;
	}

	.image {
		width: 100%;
	}

	h2 {
	}

	/* For mobile devices.
	Moves navbar to bottom of screen */
	@media only screen and (max-width: 600px) {
		.image {
			display: none;
		}

		.left {
			display: flex;
			flex-direction: column;
			align-self: center;
			align-items: center;
			justify-content: center;
			padding: 0;
			margin: 0;
		}

		.container {
			display: flex;
			align-content: center;
		}
	}
	/* For desktops and large tablets. 
	Moves Nabar to side of screen */
	@media only screen and (min-width: 600px) {
	}
</style>
