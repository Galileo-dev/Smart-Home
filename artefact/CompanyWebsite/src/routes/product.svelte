<script>
	import SecondaryBTN from "$lib/components/buy_button.svelte";
	import NewsletterInput from "$lib/components/news_letter_input.svelte";
	import Divider from "$lib/components/divider.svelte";
</script>

<div class="container">
	<h1>Our system</h1>
	<Divider />
	<h2>What is it</h2>
	<p>
		a light control system that allows for multiple lights that can all be
		connected to a single RaspberryPi it works by using a MOSFET to toggle a
		low-power light, this can be swapped with a solenoid to allow for proper
		house lights. The RaspberryPi will host both a frontend and backend. The
		backend will control the Lights at the request of the frontend through
		an ExpressJs server which allows for easy adaptability for different
		apps, e.g. phone, tablet, desktop, or even some IoT device. Any device
		that can make requests on your network will be able to communicate with
		the backend server. I added a dimming feature as the pi is capable of
		PWM(Pulse Width Modulation). An application where this is important is a
		wake-up light and mood-setting.
	</p>

	<h2>Features</h2>
	<ul>
		<li>No Relience on Internet</li>
		<li>Easily Adaptable Themes</li>
		<li>Dimming for mood ligthing</li>
		<li>Wake up with no alarm</li>
		<li>Control Your Home Lights from Anywhere!</li>
		<li>Low Cost</li>
		<li>Fast Performance</li>
	</ul>

	<h2>Get Yours Today</h2>
	<SecondaryBTN text="Buy Now" />
</div>

<style>
	ul {
	}

	li {
		text-align: left;
		font-weight: 500;

		list-style-type: circle;
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
		font-size: 1rem;
	}

	p {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.5rem;
		max-width: 80%;
		min-width: 10rem;
		text-align: left;
		max-width: 75%;
		min-width: 15rem;
	}

	h1 {
		text-decoration: underline;
	}
</style>
