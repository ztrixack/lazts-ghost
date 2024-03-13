<script lang="ts">
  let { data } = $props();
</script>

<h1 class="text-red-500">{data.settings.title ?? ''}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
