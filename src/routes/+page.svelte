<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import Filter from '$lib/components/Filter.svelte';

  let { data } = $props();
</script>

<Hero title={data.settings.title} description={data.settings.description} />
<Filter />

<PostList {...data.posts} />
