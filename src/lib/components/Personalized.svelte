<script>
	import { ArrowRight, Calculator, HandCoins, Landmark, UserCheck } from 'lucide-svelte';
</script>

<div
	class="my-9 rounded-lg bg-[#EDEBE8] px-7 py-9 dark:bg-[#1a1a1a] md:my-10 md:rounded-none md:bg-transparent md:px-0 md:py-16 md:pb-0 md:dark:bg-transparent"
>
	<section
		class="section-container flex flex-col-reverse items-center justify-center gap-10 md:flex-row"
	>
		<div class="grid flex-grow basis-2/5 grid-cols-2 grid-rows-2 gap-3">
			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3 dark:border-white/10 dark:bg-[#1a1a1a]"
			>
				<Calculator size={36} class="basis-1/3 stroke-[#127453] dark:stroke-[#199F72]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Accurate Accounting</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3 dark:border-white/10 dark:bg-[#1a1a1a]"
			>
				<HandCoins size={36} class="basis-1/3 stroke-[#127453] dark:stroke-[#199F72]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Maximum Savings</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3 dark:border-white/10 dark:bg-[#1a1a1a]"
			>
				<UserCheck size={36} class="basis-1/3 stroke-[#127453] dark:stroke-[#199F72]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Tailored Solutions</span
				>
			</div>

			<div
				class="flex items-center justify-between rounded-lg border border-[#C9C9CF] bg-[#EDEBE8] p-3 dark:border-white/10 dark:bg-[#1a1a1a]"
			>
				<Landmark size={36} class="basis-1/3 stroke-[#127453] dark:stroke-[#199F72]" />
				<span class="basis-2/3 text-center text-lg font-medium leading-7 tracking-wide"
					>Strategic Structuring</span
				>
			</div>
		</div>

		<div class="basis-3/5">
			<h2 class="section-header text-[#6B50CE]">Individualized Approach</h2>
			<p class="mt-8 w-full text-pretty text-lg font-medium leading-7 tracking-wide md:w-4/5">
				Our accounting services are built on a commitment to truly understanding your unique
				financial requirements. We do more than just process numbers—we offer personalized insights,
				identify discrepancies before they become issues, and proactively communicate strategies to
				enhance your financial success.
			</p>
		</div>
	</section>

	<div
		class="group/schedule mx-auto mt-10 flex items-center justify-center gap-1 rounded-full bg-[#127453] py-2 pl-3 pr-2 font-semibold text-neutral-100 shadow-md transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-transparent md:hidden md:w-[300px] md:py-3 md:pl-4 md:pr-3 md:shadow-lg"
	>
		<button>Schedule free consultation</button>
		<ArrowRight
			size={22}
			class="transition-transform duration-100 ease-in group-hover/schedule:translate-x-1"
		/>
	</div>
</div>
