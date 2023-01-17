<script>
	import Sun from 'phosphor-svelte/lib/Sun';
	export let Icon = Sun;
	export let Color = '#804EAFF5';
	export let text = 'no text';
	export let size = 30;
</script>

<div class="container">
	<div on:click class="display" style="border-color: {Color};">
		<Icon {size} color={Color} />
		<h1 style="color: {Color};">{text}</h1>
	</div>
</div>

<style>
	.display {
		display: flex;
		border: solid 2px;
		flex-direction: row;
		background: var(--color-surface);

		border-radius: 0.5rem;

		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		box-sizing: border-box;
		padding-left: 0.5rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}

	h1 {
		user-select: none;
		font-size: 0.85rem;
		font-weight: 500;
		margin: 0;
		padding-left: 0.25rem;
		padding-right: 0.5rem;
	}
</style>
