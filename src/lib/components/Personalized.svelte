<script>
	import { Calculator, HandCoins, Landmark, UserCheck } from 'lucide-svelte';
</script>

<div class="mt-16 py-16">
	<section class="section-container flex items-center justify-center gap-10">
		<div class="grid flex-grow basis-2/5 grid-cols-2 grid-rows-2 gap-3">
			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3"
			>
				<Calculator size={36} class="basis-1/3 stroke-[#127453]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Accurate Accounting</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3"
			>
				<HandCoins size={36} class="basis-1/3 stroke-[#127453]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Maximum Savings</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3"
			>
				<UserCheck size={36} class="basis-1/3 stroke-[#127453]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Tailored Solutions</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3"
			>
				<Landmark size={36} class="basis-1/3 stroke-[#127453]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Strategic Structuring</span
				>
			</div>
		</div>

		<div class="basis-3/5">
			<h2 class="section-header text-[#004466]">Individualized Approach</h2>
			<p class="mt-8 w-4/5 text-pretty text-lg font-medium leading-7 tracking-wide">
				Our accounting services are built on a commitment to truly understanding your unique
				financial requirements. We do more than just process numbers—we offer personalized insights,
				identify discrepancies before they become issues, and proactively communicate strategies to
				enhance your financial success.
			</p>
		</div>
	</section>
</div>
