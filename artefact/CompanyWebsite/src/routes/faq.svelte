<script>
	import PrimaryBTN from '$lib/components/button.svelte';
	import Divider from '$lib/components/divider.svelte';
	import QuestionDropDown from '$lib/components/question_dropdown.svelte';
</script>

<div class="container">
	<h1>FAQ</h1>
	<Divider />
	<p>
		<QuestionDropDown
			q="Who is Gateway"
			a="Gateway was formed by sentient beings who belived the world was too stupid. I am joking Gateway was formed by a leaving cert student as part of a project"
		/>

		<QuestionDropDown
			q="What software does Gateway use"
			a="We use an array of technologies throught our operations to offer a unbeatable product such as SvelteKit and ExpressJs to power out products"
		/>

		<QuestionDropDown
			q="I want to buy a system"
			a="To purchase our system first you will need to contact us you can do so on the Contact Us page"
		/>

		<QuestionDropDown
			q="Why are you called Gateway"
			a="Gateway refers to the way we enable our customers to do more for less!"
		/>
	</p>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
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
		font-weight: 400;
		letter-spacing: 0.1em;
		color: var(--color-on-primary-variant);
		margin: 1rem;
	}

	h1 {
		text-decoration: underline;
	}
</style>
