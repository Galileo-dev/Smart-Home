<script>
	import { initializeApp } from "firebase/app";
	import { getFirestore } from "firebase/firestore";
	import { firebaseConfig } from "../../firebase";
	import { onMount } from "svelte";
	import { collection, addDoc } from "firebase/firestore";

	let db = null;

	onMount(() => {
		initializeApp(firebaseConfig);
		db = getFirestore();
		console.log(db);
	});

	let name = null;
	let email = null;
	let message = null;
	let location = "ROI";
	const submitForm = async (e) => {
		try {
			e.preventDefault();
			let time = Date.now();
			console.log("Sending to firebase");
			let docRef = await addDoc(
				collection(db, "contact_form_submissions"),
				{
					name,
					email,
					message,
					location,
					time,
				}
			);
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};
</script>

<div class="container">
	<form on:submit={submitForm}>
		<label for="name">Name</label>
		<input
			class="text__input"
			type="text"
			id="name"
			bind:value={name}
			name="fullname"
			placeholder="Joe Doe"
		/>
		<label for="name">Email</label>
		<input
			class="text__input"
			type="text"
			id="email"
			bind:value={email}
			name="email"
			placeholder="Joe.doe@mail.com"
		/>
		<p>where do you live</p>
		<div class="radio__options">
			<input
				type="radio"
				id="Choice1"
				name="location"
				value="ROI"
				bind:group={location}
			/>
			<label for="contactChoice1">Republic Of Ireland</label>

			<input
				type="radio"
				id="Choice2"
				name="location"
				value="NI"
				bind:group={location}
			/>
			<label for="Choice2">Northern Ireland</label>
		</div>
		<label for="message">enquire</label>
		<textarea id="message" bind:value={message} />
		<button
			name="submit"
			type="submit"
			id="contact-submit"
			data-submit="...Sending"
			class="submitBtn">Submit</button
		>
	</form>
</div>

<style>
	.container {
		font-size: 1rem;
	}

	.radio__options {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		margin: 1rem;
	}

	.radio__options label {
		margin-right: 1rem;
	}

	.submitBtn {
		border: none;
		align-self: flex-end;
		background-color: var(--primary-color);
		color: var(--color-on-primary);
		margin: 1rem;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 3rem;
		margin-left: 0;
		font-size: 1rem;
	}

	.container {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		max-width: 700px;
	}

	.text__input {
		margin-bottom: 0.5rem;
		width: 100%;
		border-radius: 1rem;
		padding: 0.3rem;
		padding-left: 1rem;
		border: none;
	}

	textarea {
		min-height: 10rem;
		max-width: 100%;
		width: 100%;
		min-width: 100%;
		border-radius: 0.5rem;
	}

	form {
		width: 100%;
	}
</style>
