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
        class="flex bg-white w-full zeroSmOnly:mx-auto mt-64 xs:mt-24 sm:mx-16 sm:mt-8 md:mt-24 md:mt-8 sm:w-142 sm:shadow-lg"
      >
        <form class="py-2 px-2 sm:px-6 w-full">
          <div
            class="pt-4 w-full font-medium border sm:flex sm:justify-between sm:border-0 zeroSmOnly:px-2"
          >
            <label
              for="firstName"
              class="w-full sm:w-48 block self-center text-sm sm:text-base zeroSmOnly:uppercase"
            >Your first name</label>
            <input
              v-model="firstName"
              type="text"
              id="firstName"
              class="py-2 w-full sm:w-108 bg-white outline-none sm:px-2 sm:bg-gray-100 sm:border sm:border-grey-200 sm:rounded hover:border-grey sm:focus:bg-white sm:focus:placeholder-blue-500"
              placeholder="Jane"
            />
          </div>

          <div
            class="pt-4 w-full font-medium border sm:flex sm:justify-between sm:border-0 zeroSmOnly:px-2"
          >
            <label
              for="lastName"
              class="w-full sm:w-48 block self-center text-sm sm:text-base zeroSmOnly:uppercase"
            >Your last name</label>
            <input
              v-model="lastName"
              type="text"
              id="lastName"
              class="py-2 w-full sm:w-108 bg-white outline-none sm:px-2 sm:bg-gray-100 sm:border sm:border-grey-200 sm:rounded hover:border-grey sm:focus:bg-white sm:focus:placeholder-blue-500"
              placeholder="Doe"
            />
          </div>

          <div
            class="pt-4 w-full font-medium border sm:flex sm:justify-between sm:border-0 zeroSmOnly:px-2"
          >
            <label
              for="email"
              class="w-full sm:w-48 block self-center text-sm sm:text-base zeroSmOnly:uppercase"
            >Your work email</label>
            <input
              v-model="email"
              type="text"
              id="email"
              class="py-2 w-full sm:w-108 bg-white outline-none sm:px-2 sm:bg-gray-100 sm:border sm:border-grey-200 sm:rounded hover:border-grey sm:focus:bg-white sm:focus:placeholder-blue-500"
              placeholder="jane.doe@example.com"
            />
          </div>

          <div
            class="pt-4 w-full font-medium border sm:flex sm:justify-between sm:border-0 zeroSmOnly:px-2"
          >
            <label
              for="company"
              class="w-full sm:w-48 block self-center text-sm sm:text-base zeroSmOnly:uppercase"
            >Your company</label>
            <input
              v-model="company"
              type="text"
              id="company"
              class="py-2 w-full sm:w-108 bg-white outline-none sm:px-2 sm:bg-gray-100 sm:border sm:border-grey-200 sm:rounded hover:border-grey sm:focus:bg-white sm:focus:placeholder-blue-500"
              placeholder="Company name"
            />
          </div>

          <div
            class="pt-4 w-full font-medium border sm:flex sm:justify-between sm:border-0 zeroSmOnly:px-2"
          >
            <label
              for="description"
              class="w-full sm:w-48 block self-start text-sm sm:text-base zeroSmOnly:uppercase"
            >Project details</label>
            <textarea
              id="description"
              name="description"
              class="py-2 w-full sm:w-108 bg-white outline-none resize-y h-24 sm:px-2 sm:bg-gray-100 sm:border sm:border-grey-200 sm:rounded hover:border-grey sm:focus:bg-white sm:focus:placeholder-blue-500"
              placeholder="Tell us more about your project, needs and timeline."
            />
          </div>

          <div class="py-4 w-full flex justify-end">
            <button
              class="py-3 px-8 zeroSmOnly:w-full block bg-blue-500 text-white font-bold rounded uppercase hover:bg-blue-400 sm:"
            >Contact Us</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <MyFooter /> -->
  </div>
</template>


<script>
import Navbar from "~/components/PartialViews/Navbar.vue";
import MyFooter from "~/components/PartialViews/MyFooter.vue";

export default {
  components: {
    Navbar,
    MyFooter
  }
};
</script>