<template>
  <div class="flex bg-white w-full rounded">
    <form
      class="w-full"
      @submit.prevent="submit"
      :action="`https://app.convertkit.com/landing_pages/${convertkitId}/subscribe`"
      v-show="!subscribed"
    >
      <div class="py-2 px-2 sm:px-6 w-full">
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
            type="email"
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
            :disabled="working"
          >
            <span v-if="working">Working...</span>
            <span v-else>Contact Us</span>
          </button>
        </div>
      </div>
      <div
        class="w-full text-center py-3 rounded-b bg-green-200 text-green-800"
        v-show="subscribed"
      >
        <span class="font-semibold">Success!</span> We'll be in touch as soon as possible.
      </div>
      <div
        class="w-full text-center py-3 rounded-b bg-red-200 text-red-800"
        v-show="error"
      >Something went wrong. Please try again</div>
    </form>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";

export default {
  props: ["cid"],
  data() {
    return {
      convertkitId: this.$store.state.convertkitId,
      working: false,
      subscribed: false,
      error: false,
      firstName: null,
      lastName: null,
      email: null,
      company: null,
      description: null
    };
  },
  methods: {
    submit({ target: { action } }) {
      this.working = true;
      this.error = false;

      console.log(action);
      console.log(
        qs.stringify({
          id: this.convertkitId,
          email: this.email
        })
      );

      axios
        .post(
          action,
          qs.stringify({
            id: this.convertkitId,
            email: this.email
          })
        )
        .then(({ data: { status } }) => {
          this.working = false;

          if (["error", "not_acceptable"].includes(status)) {
            this.error = true;
          } else {
            this.subscribed = true;
          }
        })
        .catch(() => {
          this.error = true;
          this.working = false;
        });
    }
  }
};
</script>

<style>
</style>