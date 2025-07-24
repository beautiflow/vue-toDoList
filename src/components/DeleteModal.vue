<script setup>
import Modal from '@/components/Modal.vue';

const emit = defineEmits(['close', 'delete']);

const onClose = () => {
          console.log("onClose clicked22");

  emit('close'); 
};

const onDelete = () => {
  emit('delete'); 
};

</script>

<template>
  <Modal>
          <template v-slot:title>
            Delete Todo
          </template>
          <template v-slot:body>
            Are you sure you want to delete this todo?
          </template>
          <template v-slot:footer>
           <button 
                    type="button" 
                    class="btn btn-secondary" 
                    @click="onClose">
                    Close
                </button>
                <button 
                    type="button" 
                    class="btn btn-danger"
                    @click="onDelete"
                    >
                    Delete
                </button>
          </template>
         </Modal>
</template>



<style>

</style>