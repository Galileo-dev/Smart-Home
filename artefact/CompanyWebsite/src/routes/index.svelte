<script>
	import PrimaryBTN from '$lib/components/button.svelte';
	import NewsletterInput from '$lib/components/news_letter_input.svelte';
	import Divider from '$lib/components/divider.svelte';
	import GetYoursCTA from '$lib/components/get_yours_cta.svelte';
</script>

<div class="container">
	<h1>Welcome To Gateway</h1>
	<p>
		gateway provides smart home technology which offer state of the art and intellagent home
		automation devices at a low and affordable price
	</p>
	<Divider />
	<p>
		A system which offers a seamless exprience between you and your lights. With no relience on the
		outer web like many other smart devices
	</p>
	<GetYoursCTA />
</div>
<div class="container">
	<h2>Sign Up To Our Newsletter</h2>
	<p>get discounts up to 20% off!</p>
	<NewsletterInput />
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
