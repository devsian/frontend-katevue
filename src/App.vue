<script setup>
import { RouterView } from 'vue-router'

// Commponent pages
import Navbar from './components/layouts/Navbar.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
@import url('@/assets/css/styles.css');
</style>