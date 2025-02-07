<script>
	import { Landmark, MessageSquareMore, ReceiptText } from 'lucide-svelte';
</script>

<div class="mt-56 bg-[#EAEAEC] py-16">
	<section id="services" class="container">
		<div class="flex items-center justify-between">
			<h2 class="section-header">Services</h2>
			<p class="font-medium text-gray-500">We deliver clear financial solutions</p>
		</div>

		<section class="mx-auto mt-8 flex rounded-lg border border-[#C9C9CF] bg-[#DFDFE2] text-lg">
			<div
				class="flex basis-1/3 cursor-pointer flex-col border-r border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#d4d4d9]"
			>
				<div class="flex items-center gap-2 text-[#23BE5C]">
					<MessageSquareMore class="relative top-0.5" />
					<h3 class="text-xl font-medium">Consulting</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					We offer tailored financial strategies and expert guidance to address our clients' unique
					financial needs.
				</p>
			</div>

			<div
				class=" flex basis-1/3 cursor-pointer flex-col border-r border-[#C9C9CF] px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#d4d4d9]"
			>
				<div class="flex items-center gap-2 text-[#23BE5C]">
					<Landmark />
					<h3 class="text-xl font-medium">Tax Preparation</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our tax accounting services maximize deductions and ensure compliance for individuals and
					businesses.
				</p>
			</div>

			<div
				class="flex basis-1/3 cursor-pointer flex-col px-7 py-6 transition-colors duration-100 ease-in hover:bg-[#d4d4d9]"
			>
				<div class="flex items-center gap-2 text-[#23BE5C]">
					<ReceiptText />
					<h3 class="text-xl font-medium">Bookkeeping</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our bookkeeping ensures accurate financial records, allowing you to focus on growing your
					business.
				</p>
			</div>
		</section>
	</section>
</div>
