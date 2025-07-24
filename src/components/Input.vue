<script setup>

const props = defineProps({
    label: {
        type: String,
        required: true
        },
    error: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})

 const emit = defineEmits(
      [
        'update-subject', 
        ]
    );

const onInput = (e) => {
    emit('update:subject', e.target.value);
}

</script>

<template>
    <div class="form-group">
        
        <label>{{ props.lable}}</label>
        <input 
            :value="subject"
            @input="onInput"
            type="text" 
            class="form-control">
        <div 
            v-if="error"
            class="text-red"
            >
            {{ props.error}}
        </div>
    </div>
</template>


<style scoped>
    .text-red{
        color: red;
    }
</style>