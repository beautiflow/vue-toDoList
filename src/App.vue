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
      // name.value = 'Kossie Coder'; // ref를 사용할 때는 value 를 적어야 한다. 그리고 기본 자료형과 object, array 까지 사용이 가능하지만 
      name.id = 2; // reactive // reactive 를 사용하면 value 를 적지 않아도 된다. 기본자료형 x, object, array만 사용가능하다.
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
