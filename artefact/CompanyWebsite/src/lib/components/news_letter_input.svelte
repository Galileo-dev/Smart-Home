<script>
	import PaperPlaneRight from 'phosphor-svelte/lib/PaperPlaneRight';
</script>

<div class="container">
	<input placeholder="john.bro@email.com" type="email" />
	<div class="btn"><PaperPlaneRight size={20} /></div>
</div>

<style>
	.container {
		justify-content: center;
		display: flex;
		flex-wrap: nowrap;
		height: 3rem;
		width: 75%;
		align-items: center;
	}

	.btn {
		display: flex;
		align-items: center;
		text-align: center;
		background-color: var(--color-secondary);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		height: 100%;
		border-radius: 0 0.2rem 0.2rem 0;
	}
	input {
		padding: 0.4rem;
		margin: 0;
		border-radius: 0.2rem 0 0 0.2rem;
		height: 100%;
		padding: 0;
		border: none;
		width: 100%;
		max-width: 400px;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		font-size: 1.2em;
	}

	input:focus {
		border: none;
	}
</style>
