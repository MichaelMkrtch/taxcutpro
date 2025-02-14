<script>
	import { BriefcaseBusiness, Landmark, ReceiptText } from 'lucide-svelte';
</script>

<div class="pt-9 md:block md:py-16">
	<section id="services" class="section-container">
		<section
			class="mx-auto mt-8 grid grid-cols-1 grid-rows-3 rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] text-lg dark:border-white/10 dark:bg-[#1a1a1a] md:flex"
		>
			<div
				class="flex basis-1/3 cursor-pointer flex-col rounded-tl-lg border-b border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:border-white/10 dark:hover:bg-[#1f1f1f] md:rounded-l-lg md:border-b-0 md:border-r"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<Landmark strokeWidth={2.2} />
					<h3 class="text-xl font-semibold">Tax Services</h3>
				</div>
				<ul class="ml-7 list-[var(--list-marker)] text-pretty">
					<li class="mt-6">Individual</li>
					<li class="mt-1.5">Corporate</li>
					<li class="mt-1.5">Sales Tax</li>
					<li class="mt-1.5">Business Tax</li>
				</ul>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col border-b border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:border-white/10 dark:hover:bg-[#1f1f1f] md:border-b-0 md:border-r"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<ReceiptText strokeWidth={2.2} />
					<h3 class="text-xl font-semibold">Accounting Services</h3>
				</div>
				<ul class="ml-7 list-[var(--list-marker)] text-pretty">
					<li class="mt-6">Bookkeeping</li>
					<li class="mt-1.5">Financial Reporting</li>
					<li class="mt-1.5">Compliance</li>
				</ul>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col rounded-r-lg px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:hover:bg-[#1f1f1f]"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<BriefcaseBusiness strokeWidth={2.2} />
					<h3 class="text-xl font-semibold">Business Formation</h3>
				</div>
				<ul class="ml-7 list-[var(--list-marker)] text-pretty">
					<li class="mt-6">LLC</li>
					<li class="mt-1.5">Corporation (Chapters S and C)</li>
					<li class="mt-1.5">DBN</li>
					<li class="mt-1.5">EIN, BOI, Seller's Permit, and more</li>
				</ul>
			</div>
		</section>
	</section>
</div>
