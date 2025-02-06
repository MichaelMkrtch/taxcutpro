<script>
	import { Landmark, MessageSquareMore, ReceiptText } from 'lucide-svelte';
</script>

<div class="mt-56 bg-[#EAEAEC] py-16">
	<section id="services" class="container">
		<div class="flex items-center justify-between">
			<h2 class="section-header">Services</h2>
			<p class="font-medium text-gray-500">We deliver clear financial solutions</p>
		</div>

		<section
			class="mx-auto mt-8 flex gap-4 rounded-lg border border-[#C9C9CF] bg-[#DFDFE2] px-7 py-6 text-lg"
		>
			<div class="flex basis-1/3 flex-col border-r border-[#C9C9CF] px-4">
				<div class="flex items-center gap-2 text-[#009b33]">
					<MessageSquareMore class="relative top-0.5" />
					<h3 class="text-xl font-medium">Consulting</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					We offer tailored financial strategies and expert guidance to address our clients' diverse
					financial needs.
				</p>
			</div>

			<div class="flex basis-1/3 flex-col border-r border-[#C9C9CF] px-4">
				<div class="flex items-center gap-2 text-[#009b33]">
					<Landmark />
					<h3 class="text-xl font-medium">Tax Preparation</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our tax accounting services maximize deductions and ensure compliance for individuals and
					businesses.
				</p>
			</div>

			<div class="flex basis-1/3 flex-col px-4">
				<div class="flex items-center gap-2 text-[#009b33]">
					<ReceiptText />
					<h3 class="text-xl font-medium">Bookkeeping</h3>
				</div>
				<p class="mt-6 text-pretty leading-7">
					Our bookkeeping ensures accurate financial records, allowing you to focus on growing your
					business.
				</p>
			</div>
		</section>

		<!-- <p class="mt-10 w-4/5 font-medium leading-7 tracking-wide">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic soluta quae alias
			dolorum quasi suscipit unde. Velit, facere non aliquid illum voluptatum, ea eos rerum
			consequatur id et unde! Nesciunt, natus. Voluptates eius fugit explicabo repudiandae, soluta
			esse corporis sapiente sequi expedita laborum? Culpa eos voluptatum, deserunt alias inventore
			reiciendis est, rerum veniam nostrum vero, quos id ducimus accusantium.
		</p> -->
	</section>
</div>
