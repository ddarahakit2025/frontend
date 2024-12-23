<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../../stores/useProductStore'
import { useLoadingStore } from '../../stores/useLoadingStore'

const loadingStore = useLoadingStore()
const productStore = useProductStore()

onMounted(async () => {
    loadingStore.startLoading()
    await productStore.fetchProducts()
    loadingStore.stopLoading()
})
</script>
<template>
    <div>
        <div v-if="loadingStore.isLoading" class="loading-overlay">
            <div class="spinner"></div>
        </div>
        <div v-else>
            <ul>
                <li v-for="product in productStore.products" :key="product.id">
                    {{ product.name }} - {{ product.price }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style scope></style>