<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { useLoadingStore } from './stores/useLoadingStore'


const loadingStore = useLoadingStore()

</script>

<template>
    <div v-if="loadingStore.isLoading" class="loading-overlay">
        <div class="spinner"></div>
    </div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style scoped></style>
