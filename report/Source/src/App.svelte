<script>
	import NotFound from "./components/404_not_found.svelte";
	import Design from "./components/Design.svelte";
	import Evaluation from "./components/Evaluation.svelte";
	import ImplementationAndTesting from "./components/Implementation_and_testing.svelte";
	import Intro from "./components/Intro.svelte";
	import InvestigationAndPlanning from "./components/Investigation_and_planning.svelte";
	import References from "./components/References.svelte";

	let page = document.location.hash;

	window.onpopstate = function (event) {
		page = document.location.hash;
	};
</script>

<main>
	<div class="container">
		{#if page === ""}
			<Intro />
		{:else if page === "#implementation&testing"}
			<ImplementationAndTesting />
		{:else if page === "#design"}
			<Design />
		{:else if page === "#evaluation"}
			<Evaluation />
		{:else if page === "#investigation&planning"}
			<InvestigationAndPlanning />
		{:else if page === "#references"}
			<References />
		{:else}
			<NotFound />
		{/if}
	</div>
	<div class="menu">
		<div class="menu__text">
			<h1>Menu</h1>
			<a href={""}>Introduction</a>
			<a href="#design">Design</a>
			<a href="#investigation&planning">Investigation & Planning</a>
			<a href="#implementation&testing">Implmentation & Testing</a>
			<a href="#evaluation">Evauluation</a>
			<a href="#references">References</a>
		</div>
	</div>
</main>

<style>
	.menu__text {
		display: flex;
		flex-direction: column;
	}

	a {
		font-weight: 700;
		margin-bottom: 5px;
	}

	a:active {
		color: rebeccapurple;
	}

	.menu {
		display: flex;
		position: fixed;
		width: 100%;
		justify-content: flex-end;
		margin: 10px;
		right: 15px;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.container {
		margin: 2rem;
		max-width: 80%;
		width: calc(80% - 100px);
		text-align: left;
		padding: 1em;
	}

	main {
		display: flex;
		width: 100%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 300;
	}
</style>
