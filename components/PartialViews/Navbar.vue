<template>
  <div
    class="flex bg-blue-700 border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
  >
    <div
      class="w-full max-w-screen-xl relative mx-auto px-8 md:px-12 xl:px-48 flex items-center justify-between"
    >
      <nuxt-link to="/" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-8 w-8 fill-current text-blue-200"
        >
          <rect width="20" height="12" x="2" y="10" class="primary" rx="2" />
          <path
            class="text-gray-100"
            d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"
          />
        </svg>
        <div
          class="hidden md:inline md:pl-4 md:font-medium md:text-xl md:text-gray-100"
        >Lighthouse Development</div>
      </nuxt-link>

      <div class="hidden lg:flex lg:items-center lg:justify-end px-6">
        <nuxt-link
          exact-active-class
          to="/"
          class="px-3 font-medium text-md text-white uppercase"
        >Our Work</nuxt-link>
        <nuxt-link
          exact-active-class
          to="/about"
          class="px-3 font-medium text-md text-white uppercase"
        >About Us</nuxt-link>
        <nuxt-link
          exact-active-class
          to="/playbook"
          class="px-3 font-medium text-md text-white uppercase"
        >Project Lifecycle</nuxt-link>
        <nuxt-link
          exact-active-class
          to="/contactus"
          class="px-3 font-medium text-md text-white uppercase"
        >Contact Us</nuxt-link>
      </div>

      <div class="lg:hidden absolute top-0 right-0 px-4 py-1">
        <button @click="toggleMenu">
          <svg
            class="fill-current text-white w-4 h-4"
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- doing the nav like this sucks because i need to keep the height an stuf in sync. also not a big fan of the full screen atm. refactor TODO  -->
    <nav v-show="isOpen" class="absolute top-0 left-0 w-full h-screen bg-gray-100">
      <button class="absolute top-0 right-0 px-4 py-6 w-full flex justify-end" @click="toggleMenu">
        <svg
          class="fill-current text-gray-900 w-4 h-4"
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>


