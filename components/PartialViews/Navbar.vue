<template>
  <div class="px-10 py-8 w-full h-10 bg-blue-800 flex justify-between items-center">
    <div class="flex justify-start">
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
        <div class="pl-4 font-medium text-xl text-gray-100">Lighthouse Development</div>
      </nuxt-link>
    </div>
    <div class="flex justify-end">
      <nuxt-link to="/" class="pl-6 font-medium text-md text-white uppercase">Our Work</nuxt-link>
      <nuxt-link to="/" class="pl-6 font-medium text-md text-white uppercase">About Us</nuxt-link>
      <nuxt-link to="/playbook" class="pl-6 font-medium text-md text-white uppercase">Project Lifecycles</nuxt-link>
      <nuxt-link to="/" class="pl-6 font-medium text-md text-white uppercase">Contact Us</nuxt-link>
    </div>
  </div>
</template>


