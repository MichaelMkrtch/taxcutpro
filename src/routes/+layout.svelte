<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>TaxCutPro</title>
	<meta
		name="description"
		content="Tax Cut Pro is a professional tax accounting and advisory service tailored for you and your business. Trust our experience to streamline your finances and support your growth."
	/>
</svelte:head>
{@render children()}
