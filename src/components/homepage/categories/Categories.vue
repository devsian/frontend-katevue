<script setup>
import { ref } from 'vue'
import CategoriesCard from '../categories/CategoriesCard.vue';

const categories = ref([
    {id: 1, titl: 'Mobile UI Kit', count:'123', image: 'categories-1.jpg' },
    {id: 2, titl: 'Fonts', count:'123', image: 'categories-2.jpg' },
    {id: 3, titl: 'Icons Set', count:'123', image: 'categories-3.jpg' },
    {id: 4, titl: 'Website UI Kit', count:'123', image: 'categories-4.jpg' },
    ])
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-black">
            Top Categories
        </h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard
                 v-for="category in categories"
                 :key="category.id"
                 :title="category.titl"
                 :count="category.count"
                 :image="category.image"
             />
        </div>
    </div>
</template>

<style scoped></style>