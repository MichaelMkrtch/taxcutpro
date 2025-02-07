<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div
	class="before:absolute before:left-0 before:top-[-600px] before:-z-10 before:h-[950px] before:w-full before:skew-y-[-8deg] before:bg-[#4ade80]"
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
						class="group/schedule flex items-center justify-center gap-1 rounded-full bg-[#23BE5C] py-3 pl-4 pr-3 text-white transition-colors duration-100 ease-in hover:bg-[#1C9B4B]"
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
