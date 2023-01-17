<script>
	import PrimaryBTN from "$lib/components/button.svelte";
	import FirebaseContactForm from "$lib/components/firebase_contact_form.svelte";
</script>

<div class="card">
	<h1>Contact Us</h1>
	<p>
		Having any issues with your system? or just want to ask questions not
		already answered in <a href="/faq">FAQ</a>
	</p>
	<FirebaseContactForm />
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		margin: 10px;
		background-color: var(--color-surface);
		border-radius: 0.7rem;
		padding: 20px;
		color: var(--color-on-surface);
		font-size: 1rem;
	}

	p {
		font-size: 1rem;
		font-weight: 100;
		margin-top: 10px;
	}

	a {
		color: rgb(145, 172, 231);
	}

	h1 {
		padding: 0;
		margin: 0;
		margin-bottom: 10px;
	}
</style>
