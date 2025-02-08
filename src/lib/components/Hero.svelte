<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div
	class="before:absolute before:left-0 before:top-[-350px] before:-z-10 before:h-[800px] before:w-full before:skew-y-[-12deg] before:bg-[#127453]"
>
	<section class="section-container mt-20 w-full">
		<div class="flex items-start justify-between">
			<div class="mt-12 w-3/5">
				<h2 class="text-4xl font-semibold leading-[1.35] tracking-tight text-white">
					We Deliver Clear Financial Solutions.
				</h2>

				<p class="mt-20 text-balance text-lg font-medium leading-7 tracking-wide text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id suscipit minus facilis
					tenetur reiciendis aliquam aut qui asperiores ducimus. Saepe nesciunt quasi mollitia.
				</p>

				<div class="mt-8 flex w-full items-center gap-4 font-medium">
					<div
						class="group/schedule flex items-center justify-center gap-1 rounded-full border-2 border-[#DC9F2E] bg-[#DEA73F] py-3 pl-4 pr-3 font-semibold text-neutral-100 shadow-lg transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-transparent"
					>
						<button>Schedule free consultation</button>
						<ArrowRight
							size={22}
							class="transition-transform duration-100 ease-in group-hover/schedule:translate-x-1"
						/>
					</div>
				</div>
			</div>

			<div class="flex h-[450px] w-[300px] items-center justify-center rounded-md bg-neutral-500">
				Portrait Image
			</div>
		</div>
	</section>
</div>
