<script lang="ts">
  import Icon from '@iconify/svelte';
  import dayjs from 'dayjs';
  import BrandIcon from '$lib/components/elements/BrandIcon.svelte';

  let { title } = $props<{
    title: string | undefined;
  }>();
  const year = dayjs().year();

  function onBackToTop(e: MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div style="min-height: calc(100dvh - 64px - 64px - 336px);" />

<svg width="100%" height="134" class="bg-white fill-gray-100">
  <defs>
    <pattern id="footer" x="750px" y="0" width="1501" height="134" patternUnits="userSpaceOnUse" viewBox="0 0 3002 268">
      <path
        d="M3001,115.5c-0.2,0-0.3,0.1-0.5,0.1c-63.1,17.3-124.8,40.8-187,61.5c-529,171-1031,45-1139,18l-430-106 c-90-22-180-45-271-60C653.8-26.3,308.7,3.5,3,112.7l-2,0.7l-1,0.4V268h1v0.1h2l2997.5-0.1h0.5h1V115.2L3001,115.5z"
      ></path>
    </pattern>
    <rect id="rect" x="-50%" y="0" width="100%" height="100%" fill="url(#footer)"></rect>
  </defs>
  <use class="bg-white fill-gray-100" xlink:href="#rect" x="50%" y="0"></use>
</svg>

<footer class="bg-gray-100">
  <div class="container relative mx-auto p-4 sm:px-6 lg:px-8 lg:pt-12">
    <div class="absolute -top-4 end-4 sm:end-6 lg:-top-8 lg:end-8">
      <button
        class="inline-block rounded-full bg-orange-600 p-2 text-white shadow transition hover:bg-orange-500 sm:p-3 lg:p-4"
        on:click={onBackToTop}
      >
        <span class="sr-only">Back to top</span>
        <Icon icon="ant-design:up-outlined" class="h-5 w-5 text-white" />
      </button>
    </div>

    <div class="lg:-mt-24 lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center lg:justify-start">
          <BrandIcon />
          <span class="ml-4 self-center text-3xl font-semibold tracking-widest">{title}</span>
        </div>

        <p class="mx-auto mt-6 flex flex-col text-center leading-relaxed text-gray-500 lg:text-left">
          <span>Hey there! 👋</span>
          <span>This place is a casual space where I share my tech adventures and travel stories.</span>
          <span>Keep an eye out for practical tips and real-world tales. Catch you there! 👨‍💻🌏 </span>
        </p>
      </div>

      <ul class="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/about"> About </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/projects"> Projects </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/blog"> Blog </a>
        </li>
      </ul>
    </div>

    <p class="mt-8 text-center text-sm text-gray-500 lg:text-right">Copyright &copy; {year}. All rights reserved.</p>
  </div>
</footer>
