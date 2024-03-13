<script lang="ts">
  import { page } from '$app/stores';

  const isActive = (link: string) => (link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link));
</script>

<nav class="container mx-auto my-12 flex max-w-screen-lg space-x-4">
  {@render button('Home', '/')}
  {@render button('Experience', '/experiences')}
  {@render button('Trip', '/trips')}
</nav>

{#snippet button(title, link)}
  {#if isActive(link)}
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={link}>
      {title}
    </a>
  {:else}
    <a
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      href={link}
    >
      {title}
    </a>
  {/if}
{/snippet}
