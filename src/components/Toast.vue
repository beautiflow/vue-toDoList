<script setup>
    const {message} = defineProps({
        message: {
            type: String,
            required: true
        },
        type:{
            type: String,
            default: 'success'
        }
    })


</script>

<template>
    <div 
        class="alert toast-box"
        :class="`alert-${type}`"
        role="alert"
    >
        {{message}}
    </div>

</template>



<style>
    .toast-box{
        position: fixed;
        top: 10px;
        right: 10px;
    }

</style>