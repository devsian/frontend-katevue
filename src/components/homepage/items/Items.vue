<script setup>
import { ref } from 'vue'
import ItemsCardVue from './ItemsCard.vue'

// ref = data in options
const items = ref([
    {id: 1, title:'Mobile UI Kit', slug: 'User Interface', image:'items-1.jpg'},
    {id: 2, title:'Online Doctor Consultation', slug: 'User Interface', image:'items-2.jpg'},
    {id: 3, title:'Banking Crypto', slug: 'User Interface', image:'items-3.jpg'},
])

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg text-black">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <ItemsCardVue
                v-for="item in items"
                :key="item.id"
                :title="item.title"
                :slug="item.slug"
                :image="item.image"
            />

        </div>
    </div>
</template>