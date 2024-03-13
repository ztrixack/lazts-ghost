<script lang="ts">
  import dayjs from 'dayjs';

  export let title: string | undefined;
  export let excerpt: string | undefined;
  export let reading_time: number | undefined;
  export let feature_image: string | null | undefined;
  export let feature_image_alt: string | null | undefined;
  export let published_at: string | null | undefined;
  export let link: string | undefined;

  const datetime = dayjs(published_at);
</script>

<article class="m-2 flex bg-white transition hover:shadow-xl">
  <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime={datetime.format('YYYY-MM-DD')}
      class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>{datetime.year()}</span>
      <span class="w-px flex-1 bg-gray-900/10"></span>
      <span>{datetime.format('DD MMM')}</span>
    </time>
  </div>

  <div class="hidden sm:block sm:basis-56">
    <img
      alt={feature_image_alt || title}
      src={feature_image}
      placeholder=""
      class="aspect-square h-full w-full object-cover"
    />
  </div>

  <div class="flex flex-1 flex-col justify-between">
    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href={link}>
        <h3 class="font-bold uppercase text-gray-900">{title}</h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
        {excerpt}
      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <a
        href={link}
        class="block bg-amber-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-amber-400"
      >
        {reading_time} min read
      </a>
    </div>
  </div>
</article>
