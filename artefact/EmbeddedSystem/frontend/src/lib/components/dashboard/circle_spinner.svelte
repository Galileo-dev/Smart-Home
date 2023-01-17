<script>
	import CircleDashed from 'phosphor-svelte/lib/CircleDashed';
</script>

<div>
	<div class="spinner">
		<CircleDashed size={70} />
	</div>
</div>

<style>
	.spinner {
		-webkit-animation: swash 0.5s ease infinite;
	}

	/* Safari */
	@-webkit-keyframes swash {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes swash {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
