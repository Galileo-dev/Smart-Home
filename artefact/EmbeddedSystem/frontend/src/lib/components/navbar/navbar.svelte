<nav class="navbar">
	<ul class="navbar__nav">
		<li class="nav__item">
			<a href="#" class="nav__link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-2 -1.5 24 24"
					width="24"
					fill="currentColor"
					class="icon__primary"
				>
					<path
						d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"
					/></svg
				>
				<p class="nav__text">Home</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">
				<svg
					class="icon__primary"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-5 -1.5 24 24"
					width="24"
					fill="currentColor"
					><path
						d="M11 14.565H8v-8a1 1 0 1 0-2 0v8H3V13.31a7 7 0 1 1 8 0v1.255zm0 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2h8z"
					/></svg
				>
				<p class="nav__text">Lights</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">
				<svg
					class="icon__primary"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-2 -1.5 24 24"
					width="24"
					fill="currentColor"
					><path
						d="M11 17.858v2a1 1 0 0 1-2 0v-2H7v2a1 1 0 0 1-2 0v-2c0-.057.005-.112.014-.166a3.008 3.008 0 0 1-1.848-1.848c-.054.01-.11.014-.166.014H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 1 1 0-2h2c.057 0 .112.005.166.014.3-.864.984-1.548 1.848-1.848A1.007 1.007 0 0 1 5 3.858v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 0 1 2 0v2c0 .056-.005.112-.014.166.864.3 1.548.984 1.848 1.848.054-.01.11-.014.166-.014h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2c-.057 0-.112-.005-.166-.014a3.008 3.008 0 0 1-1.848 1.848c.01.054.014.11.014.166v2a1 1 0 0 1-2 0v-2h-2zm-3-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8z"
					/></svg
				>
				<p class="nav__text">Devices</p>
			</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-2 -2 24 24"
					width="24"
					fill="currentColor"
					class="icon__primary"
					><path
						d="M20 8.163A2.106 2.106 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.106 2.106 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097L17.064 2.7a2.105 2.105 0 0 0 2.218 3.058L20 8.162zM10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
					/></svg
				>
				<p class="nav__text">Settings</p>
			</a>
		</li>
	</ul>
</nav>

<style>
	.icon__primary {
		color: var(--color-highlighted-variant-inverted);
		transition: var(--transition-speed);
	}

	.navbar {
		position: fixed;
		background-color: var(--color-surface);
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

	.nav__link svg {
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
			height: 5rem;
			overflow: hidden;
		}

		.navbar__nav {
			flex-direction: row;
		}

		.nav__link {
			justify-content: center;
		}

		main {
			margin: 0;
		}

		.nav__text {
			display: none;
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
