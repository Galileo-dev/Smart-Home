<script>
	import { slide } from "svelte/transition";

	export let q = "";
	export let a = "";
	// let height = spring();
	let isDown = false;
	let height = "0%";
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div class="container">
	<button on:click={toggle} aria-expanded={isOpen}>
		<svg
			style="tran"
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
		>{q}
	</button>
	{#if isOpen}
		<ul transition:slide={{ duration: 300 }}>
			{a}
		</ul>
	{/if}
</div>

<style>
	button {
		border: none;
		background: none;
		color: inherit;
		font-size: 36px;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.5em;
		padding-top: 0.5em;
	}

	ul {
		display: flex;
	}
</style>
