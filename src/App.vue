<template>
  <div :class="nameClass">
    {{ name }}
  </div>
  <input :type="type" :value="name">
  <button 
  class="btn btn-primary"
  @click="updateName"
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
    const type = ref('number');
    const nameClass = ref('');

    // const greeting = (name) => {
    //   return 'Hello, ' + name;
    // }

    // const greet = greeting(name);

    const updateName = () => {
      name.value = 'Coder';
      type.value = 'text';
      nameClass.value = 'name';
    }

    return {
      name,
      updateName,
      type,
      nameClass
    };
  }
})
</script>

<style>

.name{
  color: rgb(27, 72, 233);
}

</style>
