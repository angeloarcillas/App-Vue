<template>
  <div class="m-2 mx-8 p-4 bg-white rounded shadow">

    <div class="mb-6">
      <label class="block mb-1 text-sm font-semibold text-gray-600 uppercase"
        >Create a new todo
      </label>
      <input
        class="w-full px-4 py-2 border rounded text-gray-700"
        v-model="todo"
        @keyup.enter="newTodo"
        type="text"
        placeholder="add something...?"
      />
      <span class="text-xs text-green-400 italic"
        >press enter to create a todo
      </span>
    </div>

    <h2 class="mb-4 text-2xl font-bold uppercase">
      Todos
    </h2>

    <label
      class="block text-sm"
      :class="{ completed: todo.completed }"
      v-for="todo in todos"
      :key="todo.title"
      v-show="!todo.completed"
      >
    <input type="checkbox" v-model="todo.completed" />
      {{ todo.title }}
    </label>

    <h2 class="mb-4 text-2xl font-bold uppercase mt-6">
      Completed Todo
    </h2>

    <label
      class="block text-sm"
      :class="{ completed: todo.completed }"
      v-for="todo in todos"
      :key="todo.title"
      v-show="todo.completed"
      >
    <input type="checkbox" v-model="todo.completed" />
      {{ todo.title }}
    </label>

    <p class="mt-4 text-sm text-gray-700 italic">
      Click the task to complete or uncomplete
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      todos: [
        { title: "Learn JavaScript", completed: false },
        { title: "Learn Vue", completed: false },
        { title: "Build something awesome", completed: true },
      ],
    };
  },
  methods: {
    newTodo() {
      this.todos.push({
        title: this.todo,
        completed: false,
      });
      this.todo = "";
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #8a8a8a;
}
</style>