<script lang="ts">
  import Header from '$lib/components/sections/Header.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import '../app.css';

  let { data, children } = $props();
</script>

<Header facebook={data.settings.facebook} twitter={data.settings.twitter} youtube="ztrixack" />

{@render children()}

<Footer title={data.settings.title} />
