<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div
	class="before:animated-mesh before:absolute before:left-0 before:top-[-600px] before:-z-10 before:h-[950px] before:w-full before:skew-y-[-10deg]"
>
	<section class="container mt-44 w-full">
		<div class="flex items-center justify-between">
			<div class="w-3/5">
				<h2 class="text-[64px] font-semibold leading-[1.35] tracking-tighter">
					Personal Accounting,<br />Professional Results
				</h2>

				<p class="mt-8 text-balance text-lg font-medium leading-7 tracking-wide">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id suscipit minus facilis
					tenetur reiciendis aliquam aut qui asperiores ducimus. Saepe nesciunt quasi mollitia?
					Explicabo enim harum corporis inventore iste. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Hic id suscipit minus facilis tenetur reiciendis aliquam aut qui
					asperiores ducimus. Saepe nesciunt quasi mollitia? Explicabo enim harum corporis inventore
					iste.
				</p>

				<div class="mt-8 flex w-full items-center gap-4 font-medium">
					<div
						class="group/schedule flex items-center justify-center gap-1 rounded-full bg-[#009b33] py-3 pl-4 pr-3 text-white transition-colors duration-100 ease-in hover:bg-[#00831c]"
					>
						<button>Schedule free consultation</button>
						<ArrowRight
							size={22}
							class="transition-transform duration-100 ease-in group-hover/schedule:translate-x-1"
						/>
					</div>

					<!-- <div class="group/services flex items-center gap-1 font-semibold">
						<a href="/" class="text-indigo-700">Services</a>
						<ArrowRight
							size={22}
							class="stroke-indigo-700 transition-transform duration-100 ease-in group-hover/services:translate-x-1"
							strokeWidth={2.25}
						/>
					</div> -->
				</div>
			</div>

			<div class="flex h-[450px] w-[300px] items-center justify-center rounded-md bg-neutral-500">
				Portrait Image
			</div>
		</div>
	</section>
</div>
