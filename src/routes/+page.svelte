<script lang="ts">
  import Hero from './(partials)/Hero.svelte';
  import PostList from '$lib/components/common/post/PostList.svelte';
  import Filter from './(partials)/Filter.svelte';
  import Gallery from './(partials)/Gallery.svelte';

  let { data } = $props();
</script>

<Hero title={data.settings.title} description={data.settings.description} />
<Filter />
<PostList {...data.posts} />
<Gallery />
