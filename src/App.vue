<template>
<div class="container">
  <h2>To-Do List</h2>
  <TodoSimpleForm @add-todo="addTodo"/>
    
    <div v-if="!todos.length">
      추가된 Todo가 없습니다.
    </div>

  <TodoList :todos="todos" @toggle-todo="toggleTodo"/>
    
</div>
  
  
</template>

<script>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';


export default ({
  components: {
    TodoSimpleForm,
    TodoList
  },
  setup(){
    const todos = ref([]);
    const todoStyle = {
      textDecoration: 'line-through',
      color: 'gray'
    }

    const addTodo = (todo) => {
      console.log(todo);
      todos.value.push(todo);
    };

    const deleteTodo = (index) => {
        todos.value.splice(index, 1);
    }

    const toggleTodo = (index) => {
      console.log(todos.value[index]);
      todos.value[index].completed = !todos.value[index].completed;
      console.log(todos.value[index]);
    }

    return {
      todos,
      addTodo,
      todoStyle,
      deleteTodo,
      toggleTodo
    };
  }
})
</script>

<style>

.todo{
  color: gray;
  text-decoration: line-through;
}

</style>
