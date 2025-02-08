<script>
	import { Landmark, MessageSquareMore, ReceiptText } from 'lucide-svelte';
</script>

<div class="mt-9 py-16">
	<section id="services" class="section-container">
		<section class="mx-auto mt-8 flex rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] text-lg">
			<div
				class=" flex basis-1/3 cursor-pointer flex-col rounded-l-lg border-r border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD]"
			>
				<div class="flex items-center gap-2 text-[#127453]">
					<Landmark strokeWidth={2.2} />
					<h3 class="text-xl font-medium">Tax Preparation</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our tax accounting services maximize deductions and ensure compliance for individuals and
					businesses.
				</p>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col border-r border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD]"
			>
				<div class="flex items-center gap-2 text-[#127453]">
					<ReceiptText />
					<h3 class="text-xl font-medium">Bookkeeping</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our bookkeeping ensures accurate financial records, allowing you to focus on growing your
					business.
				</p>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col rounded-r-lg px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#E4E1DD]"
			>
				<div class="flex items-center gap-2 text-[#127453]">
					<MessageSquareMore class="relative top-0.5" />
					<h3 class="text-xl font-medium">Advisory</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					We offer tailored financial strategies and expert guidance to address our clients' unique
					financial needs.
				</p>
			</div>
		</section>
	</section>
</div>
