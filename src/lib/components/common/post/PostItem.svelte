<script lang="ts">
  import dayjs from 'dayjs';

  let { title, excerpt, reading_time, feature_image, feature_image_alt, published_at, link } = $props<{
    title: string | undefined;
    excerpt: string | undefined;
    reading_time: number | undefined;
    feature_image: string | null | undefined;
    feature_image_alt: string | null | undefined;
    published_at: string | null | undefined;
    link: string | undefined;
  }>();

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

  <a class="group flex flex-1 flex-col justify-between hover:bg-gray-100" href={link}>
    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <h3 class="text-3xl font-bold uppercase text-gray-900 group-hover:text-orange-700">{title}</h3>
      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
        {excerpt}
      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <span
        class="block bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition group-hover:bg-orange-700"
      >
        {reading_time} min read
      </span>
    </div>
  </a>
</article>
