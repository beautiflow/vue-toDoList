<script setup>
import Toast from '@/components/Toast.vue';
import { useToast } from '@/hooks/toast';
import { useStore } from 'vuex';

  const store = useStore();
  console.log(store.state.showToast);
  const {
      toastMessage,
      toastAlertType,
      showToast,
      // triggerToast
    } = useToast();

    console.log(showToast.value);


</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" :to="{ name: 'Home'}">
    Kossie Coder
  </router-link>
  
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <router-link class="nav-link" :to="{ name: 'Todos'}">Todos</router-link>
    </li>
  </ul>

</nav>
<div class="container">
  <router-view/>
</div>
<Toast 
    v-if="showToast"
        :message="toastMessage"
        :type="toastAlertType"
  />
</template>

<style>



</style>
