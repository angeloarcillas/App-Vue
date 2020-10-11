<template>
  <div class="p-4">
    <div class="bg-white shadow rounded p-4">
      <div
        id="bag"
        class="flex items-end w-40 mx-auto mb-6 rounded"
        :class="{ 'bg-gray-300': ended }"
      >
        <div
          class="w-full bg-blue-400 cursor-pointer"
          :style="{ height: health + '%' }"
          @click="punch">
        </div>
      </div>

      <div class="flex justify-center mb-4">
        <button
          class="py-2 px-6 mr-2 text-sm text-white uppercase rounded bg-red-700"
          @click="punch"
          v-show="!ended"
          >punch
        </button>
        <button
          class="py-2 px-6 text-sm text-white uppercase rounded bg-gray-700"
          @click="reset"
          >reset
        </button>
      </div>

      <p class="text-sm text-gray-700 text-center italic">
        Click the bag or punch to hit the bag
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: 100,
      ended: false,
    };
  },
  methods: {
    punch() {
      this.health -= 10;

      if (this.health <= 0) {
        this.ended = true;
      }
    },

    reset() {
      this.health = 100;
      this.ended = false;
    },
  },
};
</script>

<style scoped>
#bag {
  height: 50vh;
  border: 1px dashed #c4c4c4;
}
</style>