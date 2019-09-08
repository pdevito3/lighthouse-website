<template>
  <div class="mx-auto h-full">
    <div class="mt-24 w-full h-48 bg-white text-center mx-auto sm:mt-24 md:px-2 lg:px-12">
      <p class="px-2 text-5xl font-semibold text-gray-800">Let's get in touch</p>
      <p class="text-3xl py-4 text-gray-800 tracking-tight sm:leading-loose">
        We'd love to hear more about your project! Contact us below for a
        <span
          class="text-3xl text-blue-700 font-medium sm:text-normal"
        >free</span> consultation. We'll be in touch as soon as possible.
      </p>
    </div>
    <!-- <div class="mx-auto sm:mx-4 w-full sm:max-w-lg bg-white shadow flex"> -->

    <div>
      <div
        class="zeroSmOnly:mx-auto mt-64 xs:mt-24 sm:mx-16 sm:mt-8 md:mt-24 md:mt-8 sm:w-142 sm:shadow-lg"
      >
        <ContactUsForm cid="abc-prop" />
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "~/components/PartialViews/Navbar.vue";
import MyFooter from "~/components/PartialViews/MyFooter.vue";
import ContactUsForm from "~/components/PartialViews/ContactUsForm.vue";

export default {
  components: {
    Navbar,
    MyFooter,
    ContactUsForm
  }
};
</script>