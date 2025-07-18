<template>
  <div 
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="card mt-2"
    >
      <div class="card-body p-2 d-flex align-items-centera">
        <div class="form-check flex-grow-1">
          <input 
            class="form-check-input"
            type="checkbox"
            :checked="todo.completed"
            @change="toggleTodo(index)"
            >
          <label
            class="form-check-label"
            :class="{todo: todo.completed}"
            >
            {{ todo.subject }}</label>
        </div>
        <div>
          <button 
            class="btn btn-danger btn-sm"
            @click="deleteTodo(index)"
            >
            Delete
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { watchEffect } from 'vue';
    const props = defineProps({
        todos: {
            type: Array,
            required: true
        }
    });

    const emit = defineEmits(
      [
        'toggle-todo', 
        'delete-todo'
        ]
    );

    watchEffect(() => {
      // console.log(props.todos.length);
    })

    const toggleTodo = (index) => {
        emit('toggle-todo', index);
    };

    const deleteTodo = (index) => {
        emit('delete-todo', index);

    };



</script>

<style>

</style>