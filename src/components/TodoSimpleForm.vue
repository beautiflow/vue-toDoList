<script setup>
import { ref } from 'vue';
    const emit = defineEmits(
      [
        'add-todo' 
        
        ]
    );

    const todo = ref('');
    const hasError = ref(false);

      const onSubmit = () => {
        if(todo.value === ''){
            hasError.value = true;
        }else{
            emit('add-todo', {
                id: Date.now(),
                subject: todo.value,
                completed: false,
            });
        hasError.value = false;
        todo.value = '';
        }
    };

</script>

<template>
<form 
    @submit.prevent="onSubmit">
    <div class="d-flex">
      <div class="flex-grow-1 mr-2">
        <input 
          class="form-control "
          type="text" 
          v-model="todo"
          placeholder="Type new to-do"
          >
      </div>
      <div>
        <button 
          class="btn btn-primary"
          type="submit"
        >
        Add
        </button>
      </div>
    </div>
      <div v-show="hasError" style="color: red">
        This field cannot be empty
      </div>
    </form>
</template>


<style>

</style>