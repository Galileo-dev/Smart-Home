<script>
	//--------------- Components ---------------
	import Tile from '$lib/components/dashboard/tile.svelte';
	import Sun from 'phosphor-svelte/lib/Sun';
	import arrowsClockwise from 'phosphor-svelte/lib/ArrowClockwise';
	import DataDisplay from '$lib/components/dashboard/data_display.svelte';
	import CircleSpinner from '$lib/components/dashboard/circle_spinner.svelte';

	//--------------- Backend ---------------
	import { get_devices } from '../../../store.js';
	import { toggle, dim } from '../../../api/commands/devices';
	import { onMount } from 'svelte';

	let tileColor = '#4EAFF5';

	onMount(() => {
		tileColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
	});
	const [devices, loading, error, get] = get_devices();
	function refreshDevices() {
		console.log('refreshing');

		//returned from the get_devices() function
		get();
	}

	async function handleButton(device_id) {
		console.log('Device Name: ', device_id);
		let new_state = await toggle(device_id);

		devices.update((old_array) => {
			let index = old_array.findIndex((x) => x.name === device_id);

			old_array[index].state = new_state;
			console.log(old_array);
			return old_array;
		});
	}
	// Function which specifically controls dimming.
	async function handleDim(device_id, dim_value) {
		// get index of device based on device_id which will match the name of the device
		let index = $devices.findIndex((x) => x.name === device_id);
		let state = $devices[index].state;
		let new_state = await dim(state, device_id, dim_value);
	}
</script>

<div class="surface">
	<div class="container">
		{#if $loading}
			<!-- A nice little spinner which displays while loading.
			it may look slightly off axis but that is by design 
			because normal spinners are boring!-->
			<CircleSpinner />
		{:else if $error}
			<!-- Error Will Occur when the server doesnt respond -->
			Error: {$error}
		{:else}
			<div class="top">
				<h1 class="title">Data display</h1>
				<DataDisplay
					Icon={arrowsClockwise}
					Color={tileColor}
					text="Refesh"
					size={18}
					on:click={() => refreshDevices()}
				/>
			</div>

			<div class="grid">
				<!-- Just lists through the devices array which is retreived from the Backend
				Structure as follows [{
					display_name: String,
					name: String,
					state: String,
					
				},{},...] -->

				{#each $devices as device}
					<Tile
						title={device.display_name}
						state={device.state}
						Icon={Sun}
						Color={tileColor}
						on:click={() => handleButton(device.name)}
					/>
					<div class="slidecontainer">
						<input
							type="range"
							min="1"
							max="255"
							value="255"
							class="slider"
							id={device.name}
							on:input={(e) => handleDim(device.name, e.target.value)}
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.surface {
		text-align: center;
		display: flex;
		max-width: 100%;
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-sizing: border-box;
		background-color: var(--color-surface-variant);
		border-radius: 1rem;
		display: flex;
		align-self: center;
		position: relative;
		/* box-sizing: border-box; */
		padding: 1rem;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row: auto auto;
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		height: auto;
		margin-top: 4rem;
	}
	.top {
		top: 0;
		margin: 0.5rem;
		position: absolute;
		display: flex;
		width: 95%;

		justify-content: space-between;
		align-items: center;
	}
	.title {
		margin: 0;
		margin-left: 0.5rem;
		text-decoration: underline;
		text-transform: uppercase;
	}
</style>
