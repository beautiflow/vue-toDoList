<script setup>
import { useRouter } from 'vue-router';
import Modal from '@/components/DeleteModal.vue';
import { ref } from 'vue';
import List from '@/components/List.vue';
 
    const { todos } = defineProps({
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

    const router = useRouter();
    const showModal = ref(false);
    const todoDeleteId = ref(null);

    const toggleTodo = (index, event) => {
        emit('toggle-todo', index, event.target.checked);
    };

    const openModal = (id) => {
      todoDeleteId.value = id;
      showModal.value = true;
    }

    
    const closeModal = () => {
      todoDeleteId.value = null;
      showModal.value = false;
    }

    const deleteTodo = () => {
        emit('delete-todo', todoDeleteId.value);

        showModal.value = false;
        todoDeleteId.value = null;
    };

    const moveToPage = (todoId) => {
      console.log(todoId);
      // router.push('/todos/'+ todoId);
      router.push({
        name: 'Todo',
        params: {
          id: todoId
        }
      });
    };


</script>

<template>
<List 
  :items="todos" 
  >
    <template #default="{ item, index }">
      <div 
        class="card-body p-2 d-flex align-items-centera"
        style="cursor: pointer"
        @click="moveToPage(item.id)"
        >
        <div class="flex-grow-1">
          <input 
            class="ml-2 mr-2"
            type="checkbox"
            :checked="item.completed"
            @change="toggleTodo(index, $event)"
            @click.stop
            >
          <span
            :class="{ todo: item.completed }"
            >
            {{ item.subject }}</span>
        </div>
        <div>
          <button 
            class="btn btn-danger btn-sm"
            @click.stop="openModal(item.id)"
            >
            Delete
          </button>
        </div>
      </div>
      </template>
    <!-- </div> -->
   </List>
   <teleport to="#modal">
      <Modal 
        v-if="showModal"
        @close="closeModal"
        @delete="deleteTodo"
      />
    </teleport>
    
</template>

<style>

</style>