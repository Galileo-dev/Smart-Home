<script>
	export let text = 'Im a Button';
</script>

<div class="button noselect" on:click>
	{text}
</div>

<style>
	.button {
		display: inline-block;
		padding: 5px;
		background: transparent;
		border-radius: 0.1rem;
		font-size: 1rem;
		border: 2px solid var(--color-secondary);
		color: var(--color-on-primary-varient);
		padding: 0.7rem 1.5rem 0.7rem 1.5rem;
		text-align: center;
		font-weight: 700;
		letter-spacing: 0.15rem;
		user-select: none;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
	}

	.button:active {
		transform: scale(0.95);
		transition: 5ms;
		box-shadow: none;
	}
</style>
