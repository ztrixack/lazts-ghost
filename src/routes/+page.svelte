<script lang="ts">
  import Featured from '$lib/components/Featured.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<Featured
  title={data.settings.title}
  description={data.settings.description}
  cover_image={data.settings.cover_image}
  facebook={data.settings.facebook}
  twitter={data.settings.twitter}
  youtube="ztrixack"
/>

<Navigation />

<PostList {...data.posts} />
