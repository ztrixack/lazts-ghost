<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';
  import PaginationComponent from '$lib/components/Pagination.svelte';
  import type { PostOrPage, Pagination } from '@tryghost/content-api';

  let { posts, pagination } = $props<{ posts: PostOrPage[]; pagination: Pagination }>();
</script>

<div class="container mx-auto my-12 flex flex-col space-y-4">
  {#each posts as post (post.uuid)}
    <BlogCard
      title={post.title}
      excerpt={post.excerpt}
      reading_time={post.reading_time}
      feature_image={post.feature_image?.toString()}
      feature_image_alt={post.feature_image_alt?.toString()}
      published_at={post.published_at?.toString()}
      link="/journeys/{post.slug}"
    />
  {/each}
</div>

<div class="flex w-full justify-center">
  <PaginationComponent {pagination} />
</div>
