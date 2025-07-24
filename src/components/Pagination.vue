<script setup>

const props = defineProps({
    numberOfPages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
});

const emits = defineEmits([
    'click',
])

const onClick = (page) => {
    emits('click', page)
};


</script>

<template>
  <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="props.currentPage !== 1" class="page-item">
            <a 
                style="cursor:pointer" 
                class="page-link" 
                @click="onClick(props.currentPage-1)"
            >
                Previous
            </a>
        </li>
        <li 
            v-for="page in props.numberOfPages"
            :key="page"
            class="page-item"
            :class="props.currentPage === page ? 'active' : ''"
        >
            <a 
                style="cursor:pointer" 
                class="page-link" 
                @click="onClick(page)">{{ page }}
            </a>
        </li>
        <li 
            v-if="props.numberOfPages !== props.currentPage" 
            class="page-item"
        >
            <a 
                style="cursor:pointer" 
                class="page-link" 
                @click="onClick(props.currentPage+1)"
            >
                Next
            </a>
        </li>
      </ul>
    </nav>
</template>

<style>

</style>