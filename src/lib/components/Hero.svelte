<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div
	class="mt-24 before:absolute before:left-0 before:top-[-425px] before:-z-10 before:h-[800px] before:w-full before:skew-y-[-4deg] before:bg-[#127453] md:mt-32 md:before:top-[-350px] md:before:h-[700px] md:before:skew-y-[-10deg]"
>
	<section class="section-container mt-14 w-full md:mt-20">
		<div class="flex items-start justify-between">
			<div class="w-4/5 flex-grow md:w-3/5">
				<h2 class="font-kurale text-3xl font-semibold leading-[1.25] text-neutral-100 md:text-5xl">
					We Deliver Clear Financial Solutions.
				</h2>

				<p
					class="mt-8 text-pretty text-base font-medium tracking-wide text-neutral-100 md:text-balance md:text-lg md:leading-7"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id suscipit minus facilis
					tenetur reiciendis aliquam.
				</p>

				<div class="mt-8 flex w-full items-center gap-4 font-medium">
					<div
						class="group/schedule flex items-center justify-center gap-1 rounded-full border-2 border-[#DC9F2E] bg-[#DEA73F] py-2 pl-3 pr-2 font-semibold text-neutral-100 shadow-md transition-colors duration-100 ease-in hover:cursor-pointer hover:bg-transparent md:py-3 md:pl-4 md:pr-3 md:shadow-lg"
					>
						<button>Schedule free consultation</button>
						<ArrowRight
							size={22}
							class="transition-transform duration-100 ease-in group-hover/schedule:translate-x-1"
						/>
					</div>
				</div>
			</div>

			<div
				class="hidden items-center justify-center rounded-full bg-neutral-500 md:flex md:h-[450px] md:w-[300px] md:rounded-md"
			></div>
		</div>
	</section>
</div>
