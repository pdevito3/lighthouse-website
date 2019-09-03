<template class="">
  <div class="bg-white h-screen">
    <div class="py-48 flex">
      <div class="w-2/3 flex justify-left content-center">
        <p
          class="text-5xl text-gray-800 font-bold text-left leading-tight tracking-tight"
        >Custom Software To Grow Your Business</p>
      </div>
      <div class="mx-4 w-1/3 max-w-md flex bg-gray-300">
        <form class="m-4">
          <label for="company" class>Your Company</label>
          <input
            v-model="company"
            type="text"
            id="company"
            class="px-2 py-2 block bg-white border border-grey-200 rounded shadow hover:border-grey"
            placeholder="Company Name"
          >

          <label for="email" class>Email Address</label>
          <input
            v-model="email"
            type="text"
            id="email"
            class="px-2 py-2 block bg-white border border-grey-200 rounded shadow hover:border-grey"
            placeholder="Email Address"
          >

          <label for="email" class>Email Address</label>
          <input
            v-model="email"
            type="text"
            id="email"
            class="px-2 py-2 block bg-white border border-grey-200 rounded shadow hover:border-grey"
            placeholder="Email Address"
          >
          
          <label for="email" class>Email Address</label>
          <input
            v-model="email"
            type="text"
            id="email"
            class="px-2 py-2 block bg-white border border-grey-200 rounded shadow hover:border-grey"
            placeholder="Email Address"
          >

          <label for="email" class>Email Address</label>
          <input
            v-model="email"
            type="text"
            id="email"
            class="px-2 py-2 block bg-white border border-grey-200 rounded shadow hover:border-grey"
            placeholder="Email Address"
          >

          <button class="mx-auto py-3 px-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold rounded uppercase">
            Free Consultation
          </button>
        </form>
        
      </div>
      <!-- <div class="flex justify-around py-32">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-32 w-32 fill-current text-blue-300"
          >
            <path
              class="primary"
              d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 6v10h16V9H4z"
            />
            <path
              class="text-gray-100"
              d="M5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            class="h-32 w-32 fill-current text-blue-300"
          >
            <rect
              class="text-white heroicon-monitor-edge heroicon-component-accent heroicon-component-fill"
              width="98"
              height="78"
              x="1"
              y="11"
              rx="5"
            />
            <rect
              class="text-blue-500 heroicon-monitor-screen heroicon-component-fill"
              width="86"
              height="66"
              x="7"
              y="17"
            />
            <rect class="text-blue-700 heroicon-shadows" width="86" height="5" x="7" y="17" />
            <path
              class="text-gray-500 heroicon-outline"
              fill-rule="nonzero"
              d="M0 16a6 6 0 0 1 6-6h88a6 6 0 0 1 6 6v68a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V16zm6-4a4 4 0 0 0-4 4v68a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4H6zm0 6c0-1.1.9-2 2-2h84a2 2 0 0 1 2 2v64a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V18zm2 0v31h1V19h15v-1H8zm17 1h16v-1H25v1zm16 1H25v27.59l1-1L28.41 49h2L32 50.59l1.06-1.06L37 23.26l.99 6.6 3 19.98.01.08V20zm1 31.76L43.38 49h3.2L53 42.59l5 5V20H42v31.76zm-1 6.48l-.48.96-.5-3.04-1-6.01L37 36.75l-2.06 13.72L32 53.41 29.59 51h-2L26 49.41l-1 1V80h16V58.24zM42 80h16V50.41l-5-5L47.41 51h-2.8L42 56.24V80zm-1 1H25v1h16v-1zm1 1h16v-1H42v1zm0-63h16v-1H42v1zm17 0h16v-1H59v1zm0 1v28.59l.41.41h4L67 52.59 70.59 49h1.8L75 43.76V20H59zm0 31v29h16V48.24L73.62 51h-2.2L67 55.41 62.59 51H59zm16 30H59v1h16v-1zm1-35.24L77.62 49H90V20H76v25.76zM76 80h14V51H76.38l-.38-.76V80zm0 2h16V51h-1v30H76v1zm0-63h15v30h1V18H76v1zm-66 1v29h13.59l.41-.41V20H10zm0 31v29h14V51H10zm0 30H9V51H8v31h16v-1H10z"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-32 w-32 fill-current text-blue-300"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path
              class="fill-current text-white"
              d="M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z"
            />
          </svg>
        </div>
      </div> -->
    </div>
  </div>
</template>


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
