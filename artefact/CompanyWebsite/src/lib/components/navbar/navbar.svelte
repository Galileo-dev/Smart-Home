<script>
	import { goto } from '$app/navigation';
	import { Question, House, Package, Envelope, Book } from 'phosphor-svelte';
	// import House from 'phosphor-svelte/lib/House';
	// import Package from 'phosphor-svelte/lib/Package';
	// import Envolope from 'phosphor-svelte/lib/Envelope';
</script>

<nav class="navbar">
	<ul class="navbar__nav">
		<li class="nav__item">
			<a href="#" class="nav__link" on:click={() => goto('/')}>
				<div class="icon">
					<House size="2rem" weight="duotone" />
				</div>
				<p class="nav__text">Home</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link" on:click={() => goto('/faq')}>
				<div class="icon">
					<Question size="2rem" weight="duotone" />
				</div>
				<p class="nav__text">FAQ</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link" on:click={() => goto('/product')}>
				<div class="icon">
					<Package size="2rem" weight="duotone" />
				</div>
				<p class="nav__text">Products</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link" on:click={() => goto('/manual')}>
				<div class="icon">
					<Book size="2rem" weight="duotone" />
				</div>
				<p class="nav__text">User Guide</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link" on:click={() => goto('/contact')}>
				<div class="icon">
					<Envelope size="2rem" weight="duotone" />
				</div>
				<p class="nav__text">Contact Us</p>
			</a>
		</li>
	</ul>
</nav>

<style>
	p {
		white-space: nowrap;
	}
	.icon__primary {
		color: var(--color-highlighted-variant-inverted);
		transition: var(--transition-speed);
	}

	.navbar {
		position: fixed;
		background-color: var(--navbar-color);
		transition: width 200ms ease;
		z-index: 100;
	}

	.navbar__nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.nav__item {
		width: 100%;
	}

	.nav__item:last-child {
		margin-top: auto;
	}

	.nav__item:last-child:hover .icon__primary {
		animation: spin-animation 0.5s ease;
		display: inline-block;
	}

	@keyframes spin-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}

	.nav__link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--color-on-surface-variant);
		text-decoration: none;
		filter: grayscale(100%) opacity(0.7);
		transition: var(--transition-speed);
		font-weight: 600;
	}

	.nav__link:hover {
		filter: grayscale(0%) opacity(1);
		background-color: var(--color-highlighted-variant);
	}

	.nav__text {
		color: var(--color-highlighted-variant-inverted);
		/* display: none; */
		overflow: hidden;
		margin-left: 1rem;
	}

	.icon {
		min-width: 2rem;
		margin: 0 1.5rem;
	}

	.navbar {
		transition: width 500ms ease;
	}

	/* For mobile devices.
	Moves navbar to bottom of screen */
	@media only screen and (max-width: 600px) {
		.navbar {
			bottom: 0;
			width: 100vw;
			height: 5em;
			overflow: hidden;
			border-radius: 0.8rem 0.8rem 0 0;
		}

		.navbar__nav {
			flex-direction: row;
		}

		.nav__link {
			justify-content: center;
			flex-direction: column;
		}

		main {
			margin: 0;
		}

		.nav__text {
			margin: 0;
			font-size: 0.8rem;
		}
	}
	/* For desktops and large tablets. 
	Moves Nabar to side of screen */
	@media only screen and (min-width: 600px) {
		.navbar {
			width: 5rem;
			height: 100vh;
			border-radius: 0px 0.5rem 0.5rem 0rem;
		}

		.navbar:hover {
			width: 16rem;
		}

		.navbar:hover .nav__text {
		}

		.nav__item:first-child .nav__link {
			border-radius: 0px 0.5rem 0px 0px;
		}

		.nav__item:last-child .nav__link {
			border-radius: 0px 0px 0.5rem 0px;
		}
	}
</style>
