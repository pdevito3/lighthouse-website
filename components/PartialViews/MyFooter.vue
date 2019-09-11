<template>
  <div class="px-16 mt-12 bg-white flex justify-between border-t border-gray-700">
    <div class="hidden sm:block sm:px-6 sm:py-2 sm:w-1/3">
      <p class="font-medium">Lighthouse Development</p>
      <p
        class="pt-2 text-sm"
      >We design and develop modern websites and custom software solutions that provide value exactly where it's needed to elevate your business.</p>
      <p
        class="text-sm py-3"
      >&copy; {{ new Date().getFullYear() }} Lighthouse Development, LLC | All Rights Reserved</p>
    </div>
    <div class="mx-auto text-center sm:hidden">
      <p
        class="text-sm py-2"
      >©{{ new Date().getFullYear() }} Lighthouse Development, LLC | All Rights Reserved</p>
    </div>
    <div class="py-2 w-48 flex justify-end hidden sm:block">
      <div>
        <p class="font-semibold uppercase">Locations</p>
        <p class="text-sm font-medium">Headquarters</p>
        <p class="text-sm">123 TBD St</p>
        <p class="text-sm">Atlanta, GA 30000</p>
        <p class="text-sm">+1(123) 456-7890</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>