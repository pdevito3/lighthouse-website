<template>
  <div class="px-16 mt-12 bg-white flex justify-between border-t border-gray-700">
    <div class="hidden sm:block sm:px-6 sm:py-2 sm:w-1/3">
      <p class="font-medium">Lighthouse Development</p>
      <p
        class="text-sm"
      >We design and develop modern websites and custom software solutions to elevate your business operations and provide value exactly where it's needed to make the most impact.</p>
    </div>
    <div class="mx-auto text-center">
      <p
        class="text-sm py-2"
      >©{{ new Date().getFullYear() }} Lighthouse Development, LLC | All Rights Reserved</p>
    </div>
    <div class="py-2 w-48 flex justify-end hidden sm:block">
      <div>
        <p class="text-lg font-semibold uppercase">Locations</p>
        <p class="font-medium">Headquarters</p>
        <p class="tbd">123 TBD St</p>
        <p class="tbd">Atlanta, GA 30000</p>
        <p class="tbd">+1(123) 456-7890</p>
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