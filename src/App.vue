<template>
  <div class="name">
    {{ name }}
  </div>
  <button 
  class="btn btn-primary"
  v-on:click="updateName"
  >
  Click
  </button>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default ({
  setup(){
    // const name = ref('Kossie Coder1');
    const name = reactive({id: 1});

    // const greeting = (name) => {
    //   return 'Hello, ' + name;
    // }

    // const greet = greeting(name);

    const updateName = () => {
      // name.value = 'Kossie Coder'; // ref
      name.id = 2; // reactive
      console.log(name);
    }

    return {
      name,
      updateName
    };
  }
})
</script>

<style>

.name{
  color: rgb(27, 72, 233);
}

</style>
