<script setup>
import { RouterLink } from 'vue-router'

// Commponent
import Logo from './Logo.vue';
import NavigationLinks from './NavigationLinks.vue';
</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">

            <Logo />
            <div class="md:order-2">
                <a href="login.html"
                    class="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow">
                    Sign In
                </a>
                <a href="register.html"
                    class="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow">
                    Sign Up
                </a>
            </div>
            <NavigationLinks />

        </div>
    </nav>
</template>

<style scoped></style>