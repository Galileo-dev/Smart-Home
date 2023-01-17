<script>
	import Content from '$lib/components/dashboard/content.svelte';
</script>

<div class="container">
	<div class="top__bar ">
		<h1>This is the options</h1>
	</div>
	<div class="content">
		<Content />
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 0.3fr 1.7fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'Top-Bar Top-Bar Top-Bar'
			'Content Content Content'
			'Content Content Content';
	}
	.top__bar {
		grid-area: Top-Bar;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		background-color: var(--bg-primary);
		text-align: center;
	}
	.content {
		text-align: center;
		display: flex;
		grid-area: Content;
		justify-content: center;
		align-items: center;
		background-color: var(--bg-secondary);
		flex-direction: column;
		box-sizing: border-box;
	}
</style>
