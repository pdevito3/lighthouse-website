<template>
  <div class>
    <div class="mt-24 w-full bg-white text-center">
      <div class="w-full px-8 md:px-24 md:w-202 lg:w-3/4 mx-auto">
        <p class="px-2 text-5xl font-semibold text-gray-800">Let's get in touch</p>
        <p class="text-3xl py-4 text-gray-800 tracking-tight sm:leading-loose">
          We'd love to hear more about your project! Contact us below for a
          <span
            class="text-3xl text-blue-700 font-medium sm:text-normal"
          >free</span> consultation. We'll be in touch as soon as possible.
        </p>
      </div>
    </div>

    <div>
      <div class="mt-6 zeroSmOnly:mx-auto md:mt-8 sm:mx-16 sm:w-142 sm:shadow-lg">
        <ContactUsForm cid="ConvertKitIdPlaceholder" />
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