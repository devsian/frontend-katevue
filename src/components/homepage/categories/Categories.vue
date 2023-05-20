<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import CategoriesCard from '../categories/CategoriesCard.vue';

// const categories = ref([
//     { id: 1, title: 'Mobile UI Kit', count: '123', image: 'categories-1.jpg' },
//     { id: 2, title: 'Fonts', count: '123', image: 'categories-2.jpg' },
//     { id: 3, title: 'Icons Set', count: '123', image: 'categories-3.jpg' },
//     { id: 4, title: 'Website UI Kit', count: '123', image: 'categories-4.jpg' },
// ])

const categories = ref([])

async function getCategoriesData() {
    try {
        const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/categories?show_product=1')
        categories.value = response.data.data.data
        // console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getCategoriesData();
})

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-black" id="categories">
            Top Categories
        </h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard
                 v-for="(category, index) in categories"
                 :key="category.id"
                 :title="category.name"
                 :count="category.products.length"
                 :image="category.thumbnails"
                 :class="{'hidden':index >= 4}"
             />
        </div>
    </div>
</template>

<style scoped></style>