<script lang="ts">
  import Icon from '@iconify/svelte';
  import dayjs from 'dayjs';
  import BrandIcon from './BrandIcon.svelte';

  const year = dayjs().year();

  function onBackToTop(e: MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div style="min-height: calc(100dvh - 64px - 64px - 336px);" />

<footer class="bg-gray-100">
  <div class="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <button
        class="inline-block rounded-full bg-orange-600 p-2 text-white shadow transition hover:bg-orange-500 sm:p-3 lg:p-4"
        on:click={onBackToTop}
      >
        <span class="sr-only">Back to top</span>
        <Icon icon="ant-design:up-outlined" class="h-5 w-5 text-white" />
      </button>
    </div>

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center lg:justify-start">
          <BrandIcon />
        </div>

        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
          <span>Hey there! 👋</span>
          <span>This place is a casual space where I share my tech adventures and travel stories.</span>
          <span>Keep an eye out for practical tips and real-world tales. Catch you there! 👨‍💻🌏 </span>
        </p>
      </div>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
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

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">Copyright &copy; {year}. All rights reserved.</p>
  </div>
</footer>
