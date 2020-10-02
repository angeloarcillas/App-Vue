<template>
  <div class="pb-4">
    <img
      class="w-full h-24 mb-2 rounded shadow"
      src="https://picsum.photos/300"
      alt="image"
    />
    <h3 class="font-semibold uppercase mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-700 mb-4">{{ description }}</p>

    <div class="flex justify-between items-center">
      <div>
        <!-- CARD STATS -->
      </div>
      <router-link :to="uri">
        <span
          class="py-1 px-6 text-sm text-white tracking-wider uppercase bg-blue-400
          rounded-full border border-transparent shadow
          hover:text-blue-700 hover:bg-white hover:border-blue-700"
        >
          View
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    uri: String,
  },
  data() {
    return {};
  },
};
</script>