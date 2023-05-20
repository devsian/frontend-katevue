<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ItemsCardVue from './ItemsCard.vue'

// const items = ref([
//     {id: 1, title:'Mobile UI Kit', slug: 'User Interface', image:'items-1.jpg'},
//     {id: 2, title:'Online Doctor Consultation', slug: 'User Interface', image:'items-2.jpg'},
//     {id: 3, title:'Banking Crypto', slug: 'User Interface', image:'items-3.jpg'},
// ])

const items = ref([])

async function getItemsData() {
    try {
        const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/products')
        console.log(response.data)
        items.value = response.data.data.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getItemsData();
})


</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-black">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <ItemsCardVue
                v-for="item in items"
                :id="item.id"
                :key="item.id"
                :title="item.name"
                :slug="item.subtitle"
                :image="item.thumbnails"
            />

        </div>
    </div>
</template>