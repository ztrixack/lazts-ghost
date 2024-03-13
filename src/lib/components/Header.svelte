<script lang="ts">
  import Icon from '@iconify/svelte';
  import BrandIcon from './BrandIcon.svelte';

  let { facebook, twitter, youtube } = $props<{
    facebook: string | undefined;
    twitter: string | undefined;
    youtube: string | undefined;
  }>();

  let scrollY = 0;
  let prevScrollY = 0;
  let header = $state<HTMLElement>();

  $effect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (!header || !window) return;

    prevScrollY = scrollY;
    scrollY = window.scrollY;

    if (scrollY <= prevScrollY) {
      header.classList.remove('translate-y-hide');
      header.classList.add('translate-y-show');
    } else {
      header.classList.remove('translate-y-show');
      header.classList.add('translate-y-hide');
    }
  }
</script>

<div class="relative">
  <header
    class="translate-y-hide translate-y-show fixed left-0 top-0 z-10 w-full transform bg-white shadow transition-transform duration-300"
    bind:this={header}
  >
    <div class="container mx-auto px-8 py-4">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <BrandIcon />
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
              </li>

              <li>|</li>

              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/projects"> Projects </a>
              </li>

              <li>|</li>

              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/journeys"> Journey </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="hidden justify-center space-x-2 md:flex">
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
  </header>
</div>

<div class="h-24"></div>

<style>
  .transform.translate-y-show {
    transform: translateY(0);
  }

  .transform.translate-y-hide {
    transform: translateY(-100%);
  }
</style>
