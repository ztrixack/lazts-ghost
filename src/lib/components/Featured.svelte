<script lang="ts">
  import Icon from '@iconify/svelte';

  export let title: string | undefined;
  export let description: string | undefined;
  export let cover_image: string | undefined;
  export let facebook: string | undefined;
  export let twitter: string | undefined;
  export let youtube: string | undefined;
</script>

<section class="overflow-hidden">
  <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24" style="background-image: url('{cover_image}');">
    <div class="flex flex-col justify-center text-center">
      <h1 class="text-[9.5vmin] font-bold leading-[1] tracking-tight text-gray-900 md:text-[8.5vmin]">
        <span class="block">{title}</span>
        <span class="block font-extrabold text-pink-900"> {description}</span>
      </h1>
      <div class="mt-4 flex justify-center space-x-2 sm:mt-8">
        <a href="https://www.facebook.com/{facebook}" target="_blank">
          <Icon icon="line-md:facebook" class="h-6 w-6 text-blue-500" />
        </a>
        <a href="https://www.twitter.com/{twitter}" target="_blank">
          <Icon icon="line-md:twitter" class="h-6 w-6 text-blue-500" />
        </a>
        <a href="https://www.youtube.com/{youtube}" target="_blank">
          <Icon icon="line-md:youtube" class="h-6 w-6 text-red-500" />
        </a>
      </div>
    </div>
  </div>
</section>
