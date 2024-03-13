<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Pagination } from '@tryghost/content-api/';

  const { pagination } = $props<{ pagination: Pagination }>();
</script>

<div class="inline-flex items-center justify-center gap-3">
  {#if pagination.prev}
    <a
      href={pagination.prev === 1 ? '/' : `/pages/${pagination.prev}`}
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      aria-disabled={!pagination.prev}
    >
      <span class="sr-only">Previous Page</span>
      <Icon icon="mdi:pan-left" class="h-3 w-3" />
    </a>
  {/if}

  <p class="text-xs text-gray-900">
    {pagination.page}
    <span class="mx-0.25">/</span>
    {pagination.pages}
  </p>

  {#if pagination.next}
    <a
      href="/pages/{pagination.next}"
      class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <Icon icon="mdi:pan-right" class="h-3 w-3" />
    </a>
  {/if}
</div>
