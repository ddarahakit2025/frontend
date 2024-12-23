<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>

<template>
    <Header></Header>
    <ul>
        <li>
            <router-link to="/product/list">상품 목록</router-link>
        </li>
        <li>
            <router-link to="/user/login">로그인</router-link>
        </li>
    </ul>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style scoped></style>
