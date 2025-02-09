<script lang="ts">
	import { Moon, SunMedium } from 'lucide-svelte';
	import Tooltip from './Tooltip.svelte';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export const isDarkMode = writable(false);

	// Sets dark mode on initial load
	onMount(() => {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (prefersDark) {
			isDarkMode.set(true);
			document.documentElement.classList.add('dark');
		} else {
			isDarkMode.set(false);
			document.documentElement.classList.remove('dark');
		}
	});

	// Toggles dark mode
	function toggleDarkMode() {
		isDarkMode.update((current) => {
			const next = !current;
			if (next) {
				document.documentElement.classList.add('dark');
				// localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				// localStorage.setItem('theme', 'light');
			}
			return next;
		});
	}

	const email = 'email';

	const navLinks = [
		{ label: 'Services', href: '#services' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: `mailto:${email}?subject=Accounting Services` }
	];
</script>

<nav
	class="mx-auto my-4 flex w-full items-center justify-between text-neutral-100 md:my-8 md:max-w-6xl"
>
	<div class="relative">
		<h1 class="basis-1/5 text-[22px] font-bold tracking-wide md:text-[26px]">TaxCutPro</h1>
		<span
			class="pointer-events-none absolute -right-2 bottom-0.5 block h-0.5 w-[55px] -rotate-[4deg] cursor-pointer rounded-full bg-[#DEA73F] transition-all duration-300 md:-right-1"
		></span>
		<span
			class="pointer-events-none absolute -bottom-0.5 -right-2 block h-0.5 w-[55px] -rotate-[4deg] cursor-pointer rounded-full bg-[#DEA73F] transition-all duration-300 md:-right-1"
		></span>
	</div>

	<ul class="hidden basis-3/5 justify-center gap-8 tracking-wide md:flex">
		{#each navLinks as link}
			<li class="group relative">
				{#if link.label === 'Contact'}
					<Tooltip
						content="sara@email.com"
						side="bottom"
						sideOffset={16}
						classes="bg-soft-white text-[#1f1f1f] dark:bg-[#1a1a1a] dark:border-white/10 dark:text-neutral-200"
					>
						<a
							class="py-1.5 font-semibold transition-colors duration-300 ease-out hover:text-neutral-300"
							href={link.href}>{link.label}</a
						>
						<span
							class="pointer-events-none absolute -bottom-0.5 left-0 block h-0.5 w-0 cursor-pointer bg-[#DEA73F] transition-all duration-300 group-hover:w-full"
						></span>
					</Tooltip>
				{:else}
					<a
						class="py-1.5 font-semibold transition-colors duration-300 ease-out hover:text-neutral-300"
						href={link.href}>{link.label}</a
					>
					<span
						class="pointer-events-none absolute -bottom-0.5 left-0 block h-0.5 w-0 cursor-pointer bg-[#DEA73F] transition-all duration-300 group-hover:w-full"
					></span>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="basis-1/5">
		<SunMedium
			class="{$isDarkMode
				? 'hidden'
				: 'block'} ml-auto stroke-neutral-100 transition-colors duration-75 ease-out hover:cursor-pointer hover:stroke-[#DEA73F]"
			size={24}
			onclick={toggleDarkMode}
		/>

		<Moon
			class="{$isDarkMode
				? 'block'
				: 'hidden'} ml-auto stroke-neutral-100 transition-colors duration-75 ease-out hover:cursor-pointer hover:stroke-[#4e32b2]"
			size={24}
			onclick={toggleDarkMode}
		/>
	</div>
</nav>
