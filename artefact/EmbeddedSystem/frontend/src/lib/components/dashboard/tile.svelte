<script>
	export let state = 'Unkown';
	export let Icon = '/assets/icons/light.svg';
	export let Color = '#804EAFF5';
	export let title = 'light';
</script>

<div class="container">
	<div on:click class="button" style="border-color: {Color};">
		<h1 class="top-text" style="color: {Color};">{title}</h1>
		<Icon size={80} color={Color} />
		<h1 class="bottom-text" style="color: {Color};">{state}</h1>
	</div>
</div>

<style>
	.button {
		border: solid 2px;

		background: var(--color-surface);

		border-radius: 30px;
		min-width: 8rem;
		min-height: 8rem;
		aspect-ratio: 1/1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: transform 4ms ease;
		transform: scale(1);
		padding: 0.5rem;
	}

	.button:active {
		transform: scale(0.98);
	}

	.button:hover:active {
		transform: scale(0.98);
	}

	.button:hover {
		transform: scale(1.05);
	}

	.top-text {
		user-select: none;
		font-size: 1rem;
		padding: 0;
		margin: 0;
		margin-bottom: 1rem;
		font-weight: 700;
		letter-spacing: 4px;
	}

	.bottom-text {
		user-select: none;
		font-size: 1rem;
		padding: 0;
		margin: 0;
		margin-top: 1rem;
		font-weight: 600;
	}
</style>
