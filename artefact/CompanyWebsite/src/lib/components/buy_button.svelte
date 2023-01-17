<script>
	export let text = 'Im a Button';
</script>

<div class="button" on:click>
	{text}
</div>

<style>
	.button {
		display: inline-block;
		background: transparent;
		border-radius: 0.1rem;
		font-size: 1rem;
		color: var(--color-on-primary-varient);
		background-color: var(--primary-color-variant);
		box-shadow: inset;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 10rem;
		text-align: center;
		font-weight: 700;
		letter-spacing: 0.15rem;
		user-select: none;
	}
</style>
