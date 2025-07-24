<script setup>

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

</script>


<template>
   <div 
      v-for="(item, index) in props.items"
      :key="item.id"
      class="card mt-2"
    >
    <slot :item="item" :index="index"></slot>

   </div>

</template>



<style>

</style>