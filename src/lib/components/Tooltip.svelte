<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index';

	let { content, side, sideOffset, classes, children } = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={200}>
		<Tooltip.Trigger>
			{@render children()}
		</Tooltip.Trigger>
		<Tooltip.Content {side} {sideOffset} class={classes}>
			<p class="text-[14px] font-medium tracking-wide">{content}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
