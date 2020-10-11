<template>
  <div class="p-8">
    <div class="mb-12 bg-green-200 rounded shadow">
      <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    </div>

    <div class="p-2 mb-4 bg-white rounded shadow">
      <card
        title="Punch the sandbag"
        description="A mini game where you click the bag or button to win."
        uri="/punch-it"
      />
    </div>
    <div class="p-2 mb-4 bg-white rounded shadow">
      <card
        title="Todos app"
        description="Create a todo list"
        uri="/todos"
      />
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";

export default {
  components: {
    card,
  },
};
</script>
