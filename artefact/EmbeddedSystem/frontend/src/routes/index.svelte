<script>
	import Content from '$lib/components/dashboard/content.svelte';
</script>

<div class="container">
	<Content />
</div>

<style>
	.container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 10px;
		margin: 10px;
		background-color: var(--background-color);
		color: var(--color-on-primary-variant);
	}
</style>
