<script>
	import { Landmark, MessageSquareMore, ReceiptText } from 'lucide-svelte';
</script>

<div class="mt-9 pt-9 md:block md:py-16">
	<section id="services" class="section-container">
		<section
			class="mx-auto mt-8 grid grid-cols-1 grid-rows-3 rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] text-lg dark:border-white/10 dark:bg-[#1a1a1a] md:flex"
		>
			<div
				class="flex basis-1/3 cursor-pointer flex-col rounded-tl-lg border-b border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:border-white/10 dark:hover:bg-[#1f1f1f] md:rounded-l-lg md:border-b-0 md:border-r"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<Landmark strokeWidth={2.2} />
					<h3 class="text-xl font-semibold">Tax Preparation</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our tax accounting services maximize deductions and ensure compliance for individuals and
					businesses.
				</p>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col border-b border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:border-white/10 dark:hover:bg-[#1f1f1f] md:border-b-0 md:border-r"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<ReceiptText strokeWidth={2.2} />
					<h3 class="text-xl font-semibold">Bookkeeping</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our bookkeeping ensures accurate financial records, allowing you to focus on growing your
					business.
				</p>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col rounded-r-lg px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD] dark:hover:bg-[#1f1f1f]"
			>
				<div class="flex items-center gap-2 text-[#127453] dark:text-[#199F72]">
					<MessageSquareMore strokeWidth={2.2} class="relative top-0.5" />
					<h3 class="text-xl font-semibold">Advisory</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					We offer tailored financial strategies and expert guidance to address our clients' unique
					financial needs.
				</p>
			</div>
		</section>
	</section>
</div>
