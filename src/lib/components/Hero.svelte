<script lang="ts">
  let { title, description } = $props<{
    title: string | undefined;
    description: string | undefined;
  }>();
</script>

<section class="overflow-hidden">
  <div class="relative -z-10 bg-gray-950 p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      class="absolute left-1/2 top-0 -z-10 h-full w-full"
      style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 32px 32px;"
    />
    <div class="flex flex-col justify-center text-center">
      <h1 class="text-[9.5vmin] font-bold leading-tight tracking-wider text-white md:text-[8.5vmin]">
        <span class="bg-gradient-to-br from-gray-900 via-orange-50 to-gray-900 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <h4 class="mt-2 block text-3xl font-medium">
        <span class="bg-gradient-to-br from-gray-500 via-orange-50 to-gray-500 bg-clip-text text-transparent">
          {description}
        </span>
      </h4>
    </div>
  </div>
</section>
