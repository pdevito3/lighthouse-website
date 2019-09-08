<template>
  <div>
    <Navbar />
    <nuxt class="font-sans antialiased block" />
    <MyFooter />
  </div>
</template>


<script>
import Navbar from "~/components/PartialViews/Navbar.vue";
import MyFooter from "~/components/PartialViews/MyFooter.vue";

export default {
  components: {
    Navbar,
    MyFooter
  },
  head() {
    return {
      title: "Lighthouse Development | Leading Atlanta Software Development",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "website-description",
          name: "website-description",
          content: this.$store.state.websiteDescription
        }
      ]
    };
  }
};
</script>

<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
