<script lang="ts">
	import { Moon, SunMedium } from 'lucide-svelte';

	let darkMode = $state(false);

	const navLinks = [
		{ label: 'Services', href: '#services' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];

	function handleClick() {
		darkMode = !darkMode;
	}
</script>

<nav class="mx-auto my-8 flex max-w-6xl items-center justify-between">
	<a href="/" class="basis-1/5 text-[26px] font-bold">Tax Cut Pro</a>

	<ul class="flex basis-3/5 justify-center gap-8 tracking-wide">
		{#each navLinks as link}
			<li class="group relative">
				<a class="py-1.5 font-semibold" href={link.href}>{link.label}</a>
				<span
					class="pointer-events-none absolute -bottom-0.5 left-0 block h-0.5 w-0 cursor-pointer bg-amber-300 transition-all duration-300 group-hover:w-full"
				></span>
			</li>
		{/each}
	</ul>

	<div class="basis-1/5">
		<SunMedium
			class="{darkMode
				? 'hidden'
				: 'block'} ml-auto stroke-primary-text transition-colors duration-100 ease-in hover:cursor-pointer hover:stroke-amber-300"
			size={24}
			onclick={() => (darkMode = !darkMode)}
		/>

		<Moon
			class="{darkMode
				? 'block'
				: 'hidden'} ml-auto stroke-primary-text transition-colors duration-100 ease-in hover:cursor-pointer hover:stroke-indigo-600"
			size={24}
			onclick={handleClick}
		/>
	</div>
</nav>
