<script setup>
import { useCount } from '@/hooks/count';

const { count } = useCount();
console.log(count);

</script>

<template>
  <div>Home page</div>
  <div>{{ count }}</div>
  <button @click="count++">Add</button>
</template>

<style>

</style>