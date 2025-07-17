<template>
  <input 
    type="text" 
    v-model="name"
    >
  <button 
    class="btn btn-primary"
    @click="onSubmit"
  >
  Click
  </button>
</template>

<script>
import { ref } from 'vue';

export default ({
  setup(){
    // const name = ref('Kossie Coder1');
    const name = ref('Kossie');

    const onSubmit = () => {
      console.log(name.value);
    }

    return {
      name,
      onSubmit,
    };
  }
})
</script>

<style>

.name{
  color: rgb(27, 72, 233);
}

</style>
