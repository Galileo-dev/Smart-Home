<script>
	import SecondaryBTN from "$lib/components/buy_button.svelte";
	import NewsletterInput from "$lib/components/news_letter_input.svelte";
	import Divider from "$lib/components/divider.svelte";
</script>

<div class="container">
	<h1>User Guide</h1>
	<p>
		Thank you for purchasing our system in this guide we will discus the
		usage and opperation of the product
	</p>
	<Divider />
	<div class="guide">
		<h1 style="text-decoration: underline;">Setup</h1>
		<h2>
			The engineer who setup your system will setup your device and if you
			have any issues you should contact us but you are your own person so
			heres the guide
		</h2>
		<ul>
			<li>
				The device will need to be preconfigured with your internet name
				and password. this can be done using the sd card
			</li>
			<li>
				use the CONSTANTS.js file to specify the pins being used by the
				light and give it a name accordingly
			</li>
			<li>
				The device you want to control must have a mosfet or solinode
				which supports 3.3v activation.
			</li>
			<li>
				Connect the corrosponding grounding wire and 3.3v wires to the
				RaspberryPI
			</li>
			<li>Connect Device to power through the provided cable</li>
			<li>
				A webserver controlling your lights should be available on port
				predefined
			</li>
		</ul>

		<h1 style="text-decoration: underline;">Troubleshooting</h1>
		<h2>My box is acting up / The app wont work</h2>
		<p>
			we suggest restarting your device. First you must identify your box.
			it looks like a white box and will be installed close to your
			electrical breaker panel or the light it is controlling.
		</p>
		<ul>
			<li>Unplug</li>
			<li>Wait 30 Seconds</li>
			<li>Plug back in</li>
		</ul>
	</div>
</div>

<style>
	.guide {
		text-align: left;
		max-width: 75%;
		min-width: 15rem;
		font-size: 1rem;
	}

	ul {
		min-width: 70%;
	}

	li {
		text-align: left;
		font-weight: 500;

		list-style-type: decimal;
		margin-bottom: 0.5rem;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		text-align: center;
		margin: 10px;
		background-color: var(--color-surface);
		border-radius: 0.7rem;
		padding: 20px;
		padding-bottom: 5rem;
		color: var(--color-on-surface);
	}

	p {
		font-size: 1rem;
		font-weight: 100;
		margin: 0;
	}

	h1 {
		text-decoration: underline;
	}
</style>
