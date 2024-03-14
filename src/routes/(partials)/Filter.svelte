<script lang="ts">
  import { page } from '$app/stores';

  const isActive = (link: string) => (link === '/' ? $page.url.pathname === link : $page.url.pathname.startsWith(link));
</script>

<nav class="mx-auto my-12 flex max-w-3xl justify-between rounded-3xl px-8 py-4 shadow-md shadow-gray-300">
  <h3 class="self-center font-semibold text-gray-700">All Categories</h3>
  <div class="flex space-x-4">
    {@render button('Home', '/')}
    {@render button('Diary', '/diaries')}
    {@render button('Journey', '/journeys')}
  </div>
</nav>

{#snippet button(title, link)}
  {#if isActive(link)}
    <div
      class="select-none rounded border border-gray-500 bg-transparent px-4 py-2 font-semibold text-gray-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
    >
      {title}
    </div>
  {:else}
    <a class="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700" href={link}>
      {title}
    </a>
  {/if}
{/snippet}
