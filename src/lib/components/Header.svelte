<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<header class="bg-white shadow-lg">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
        <a class="block border rounded-full p-1 border-gray-500" href="/">
          <span class="sr-only">Home</span>
          <Icon icon="la:dragon" class="h-8 w-8 text-gray-500" />
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/projects"> Projects </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/trips"> Trips </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
